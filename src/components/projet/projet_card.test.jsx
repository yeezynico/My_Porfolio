import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Project_card from './projet_card'

const baseProps = {
  title: 'Mon projet :',
  text: 'Description du projet.',
  src: 'image.webp',
  alt: 'image du projet',
  href: 'https://github.com/yeezynico/projet',
}

describe('Project_card', () => {
  it("affiche le titre, le texte et l'image chargée en différé", () => {
    render(<Project_card {...baseProps} />)
    expect(screen.getByRole('heading', { level: 2, name: 'Mon projet :' })).toBeInTheDocument()
    expect(screen.getByText('Description du projet.')).toBeInTheDocument()
    const img = screen.getByAltText('image du projet')
    expect(img).toHaveAttribute('src', 'image.webp')
    expect(img).toHaveAttribute('loading', 'lazy')
  })

  it('affiche le lien Github dans un nouvel onglet', () => {
    render(<Project_card {...baseProps} />)
    const link = screen.getByRole('link', { name: 'Github' })
    expect(link).toHaveAttribute('href', baseProps.href)
    expect(link).toHaveAttribute('target', '_blank')
  })

  it('affiche le lien de démo quand un path est fourni', () => {
    render(<Project_card {...baseProps} path="https://demo.vercel.app/" path_name="Lien vercel" />)
    expect(screen.getByRole('link', { name: 'Lien vercel' })).toHaveAttribute('href', 'https://demo.vercel.app/')
    expect(screen.getAllByRole('link')).toHaveLength(2)
  })

  it("n'affiche pas de lien vide quand aucun path n'est fourni", () => {
    const { container } = render(<Project_card {...baseProps} />)
    expect(screen.getAllByRole('link')).toHaveLength(1)
    expect(container.querySelectorAll('a:not([href])')).toHaveLength(0)
  })
})
