import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Hero from './hero'

describe('Hero', () => {
  it('affiche un seul titre h1 avec le nom complet', () => {
    render(<Hero />)
    const headings = screen.getAllByRole('heading', { level: 1 })
    expect(headings).toHaveLength(1)
    expect(headings[0]).toHaveTextContent('NicolasVanbreusegem')
  })

  it('affiche la photo de profil en webp chargée en priorité', () => {
    render(<Hero />)
    const img = screen.getByAltText('Avatar')
    expect(img).toHaveAttribute('src', 'profil.webp')
    expect(img).toHaveAttribute('fetchpriority', 'high')
  })

  it('affiche le métier', () => {
    render(<Hero />)
    expect(screen.getByText('Développeur Web FullStack junior')).toBeInTheDocument()
  })

  it('propose le lien LinkedIn dans un nouvel onglet', () => {
    render(<Hero />)
    const link = screen.getByText('LinkedIn').closest('a')
    expect(link).toHaveAttribute('href', expect.stringContaining('linkedin.com/in/nicolas-vanbreusegem'))
    expect(link).toHaveAttribute('target', '_blank')
  })

  it('propose le téléchargement du CV', () => {
    render(<Hero />)
    const link = screen.getByText('Cv').closest('a')
    expect(link).toHaveAttribute('href', 'cv.nicolas.vanbreusegem.pdf')
    expect(link).toHaveAttribute('download', 'CV_Nicolas_Vanbreusegem')
  })
})
