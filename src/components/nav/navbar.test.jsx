import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Nav from './navbar'

describe('Nav', () => {
  it('affiche les 5 liens de navigation vers les bonnes sections', () => {
    render(<Nav />)
    const expected = {
      Accueil: '#hero',
      'À propos': '#À-propos',
      Projets: '#Projet',
      Technos: '#Techno',
      Contact: '#Contact',
    }
    expect(screen.getAllByRole('link')).toHaveLength(5)
    for (const [label, href] of Object.entries(expected)) {
      expect(screen.getByText(label).closest('a')).toHaveAttribute('href', href)
    }
  })
})
