import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Biographie from './biographie'

describe('Biographie', () => {
  it('rend la section "À propos" ciblée par la navigation', () => {
    const { container } = render(<Biographie />)
    expect(container.querySelector('section#À-propos')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'À propos de moi :' })).toBeInTheDocument()
  })

  it('mentionne la formation Epitech', () => {
    render(<Biographie />)
    expect(screen.getByText(/Web@academie à Epitech/)).toBeInTheDocument()
  })
})
