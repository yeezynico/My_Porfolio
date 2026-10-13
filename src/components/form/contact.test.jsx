import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import emailjs from '@emailjs/browser'
import Contact from './contact'

vi.mock('@emailjs/browser', () => ({
  default: { sendForm: vi.fn() },
}))

describe('Contact', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    vi.spyOn(window, 'alert').mockImplementation(() => {})
  })

  it('rend la section "Contact" ciblée par la navigation', () => {
    const { container } = render(<Contact />)
    expect(container.querySelector('section#Contact')).toBeInTheDocument()
  })

  it('affiche les champs nom, email et message', () => {
    render(<Contact />)
    expect(screen.getByPlaceholderText('Nom')).toHaveAttribute('name', 'name')
    expect(screen.getByPlaceholderText('Email')).toHaveAttribute('type', 'email')
    expect(screen.getByPlaceholderText('Votre message...')).toHaveAttribute('name', 'message')
  })

  it('relie chaque label à son champ', () => {
    render(<Contact />)
    expect(screen.getByLabelText('Votre nom')).toBe(screen.getByPlaceholderText('Nom'))
    expect(screen.getByLabelText('Votre email')).toBe(screen.getByPlaceholderText('Email'))
    expect(screen.getByLabelText('Votre message')).toBe(screen.getByPlaceholderText('Votre message...'))
  })

  it('sélectionne le champ quand on clique sur son label', async () => {
    const user = userEvent.setup()
    render(<Contact />)
    await user.click(screen.getByText('Votre email'))
    expect(screen.getByLabelText('Votre email')).toHaveFocus()
  })

  it('transmet les valeurs saisies à EmailJS', async () => {
    emailjs.sendForm.mockResolvedValue({ status: 200 })
    const user = userEvent.setup()
    render(<Contact />)

    await user.type(screen.getByLabelText('Votre nom'), 'Jean')
    await user.type(screen.getByLabelText('Votre email'), 'jean@example.com')
    await user.type(screen.getByLabelText('Votre message'), 'Bonjour')
    await user.click(screen.getByRole('button', { name: 'Valider' }))

    const data = new FormData(emailjs.sendForm.mock.calls[0][2])
    expect(Object.fromEntries(data)).toEqual({
      name: 'Jean',
      email: 'jean@example.com',
      message: 'Bonjour',
    })
  })

  it("envoie le formulaire via EmailJS et confirme l'envoi", async () => {
    emailjs.sendForm.mockResolvedValue({ status: 200 })
    const user = userEvent.setup()
    render(<Contact />)

    await user.type(screen.getByPlaceholderText('Nom'), 'Jean')
    await user.type(screen.getByPlaceholderText('Email'), 'jean@example.com')
    await user.type(screen.getByPlaceholderText('Votre message...'), 'Bonjour')
    await user.click(screen.getByRole('button', { name: 'Valider' }))

    expect(emailjs.sendForm).toHaveBeenCalledTimes(1)
    const [serviceId, templateId, form, options] = emailjs.sendForm.mock.calls[0]
    expect(serviceId).toBe('service_pfheq8r')
    expect(templateId).toBe('template_o2jfj8j')
    expect(form).toBeInstanceOf(HTMLFormElement)
    expect(options).toEqual({ publicKey: 'dvfnNq-r50wj28cJx' })
    await vi.waitFor(() => expect(window.alert).toHaveBeenCalledWith('Email envoyé !'))
  })

  it("affiche une alerte en cas d'échec de l'envoi", async () => {
    emailjs.sendForm.mockRejectedValue({ text: 'erreur' })
    const user = userEvent.setup()
    render(<Contact />)

    await user.click(screen.getByRole('button', { name: 'Valider' }))

    await vi.waitFor(() =>
      expect(window.alert).toHaveBeenCalledWith('Il faut remplire tous les champs !', 'erreur'),
    )
  })
})
