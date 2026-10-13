import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import CardLogo from './card_techno'
import Card_environement from './environement'

describe('CardLogo', () => {
  it("affiche l'icône passée en props", () => {
    render(<CardLogo icon={<span>icone</span>} />)
    expect(screen.getByText('icone')).toBeInTheDocument()
  })
})

describe('Card_environement', () => {
  it("affiche l'icône passée en props", () => {
    render(<Card_environement icon={<span>env</span>} />)
    expect(screen.getByText('env')).toBeInTheDocument()
  })
})
