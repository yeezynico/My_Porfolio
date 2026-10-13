import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Footer from './footer'

describe('Footer', () => {
  it('affiche le copyright', () => {
    render(<Footer />)
    expect(screen.getByRole('contentinfo')).toHaveTextContent('Copyright © 2025 Nicolas Vanbreusegem')
  })
})
