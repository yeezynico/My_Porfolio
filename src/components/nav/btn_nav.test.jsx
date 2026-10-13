import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import BtnNav from './btn_nav'

describe('BtnNav', () => {
  it('affiche le texte passé en props dans un bouton', () => {
    render(<BtnNav props="LinkedIn" />)
    expect(screen.getByRole('button', { name: 'LinkedIn' })).toBeInTheDocument()
  })
})
