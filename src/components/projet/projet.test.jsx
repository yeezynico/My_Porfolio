import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Projet from './projet'

describe('Projet', () => {
  it('rend la section "Projet" ciblée par la navigation', () => {
    const { container } = render(<Projet />)
    expect(container.querySelector('section#Projet')).toBeInTheDocument()
  })

  it('affiche les 5 projets avec leur image webp', () => {
    render(<Projet />)
    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(5)
    for (const img of images) {
      expect(img.getAttribute('src')).toMatch(/\.webp$/)
    }
  })

  it('a un lien Github par projet', () => {
    render(<Projet />)
    const githubLinks = screen.getAllByRole('link', { name: 'Github' })
    expect(githubLinks).toHaveLength(5)
    for (const link of githubLinks) {
      expect(link.getAttribute('href')).toMatch(/^https:\/\/github\.com\/yeezynico\//)
    }
  })

  it("n'a aucun lien sans href", () => {
    const { container } = render(<Projet />)
    expect(container.querySelectorAll('a:not([href])')).toHaveLength(0)
  })
})
