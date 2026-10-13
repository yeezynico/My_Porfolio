import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Techno from './techno'
import technos from './asset_techno'
import environements from './asset_environnement'

describe('Techno', () => {
  it('rend la section "Techno" avec ses deux titres', () => {
    const { container } = render(<Techno />)
    expect(container.querySelector('section#Techno')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Technos :' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Environnements :' })).toBeInTheDocument()
  })

  it('affiche une carte par techno et par environnement', () => {
    const { container } = render(<Techno />)
    expect(container.querySelectorAll('.custom-border')).toHaveLength(technos.length)
    expect(container.querySelectorAll('.custom-environement')).toHaveLength(environements.length)
  })

  it('contient 9 technos et 5 environnements', () => {
    expect(technos).toHaveLength(9)
    expect(environements).toHaveLength(5)
  })
})
