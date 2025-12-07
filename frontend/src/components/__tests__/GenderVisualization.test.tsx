import { render, screen } from '@testing-library/react'
import { GenderVisualization } from '../gender/GenderVisualization'

describe('GenderVisualization', () => {
  it('renders DER with correct styling', () => {
    render(<GenderVisualization gender="der" word="Vater" />)
    expect(screen.getByText('DER')).toBeInTheDocument()
    expect(screen.getByText('Vater')).toBeInTheDocument()
  })

  it('renders DIE with correct styling', () => {
    render(<GenderVisualization gender="die" word="Mutter" />)
    expect(screen.getByText('DIE')).toBeInTheDocument()
    expect(screen.getByText('Mutter')).toBeInTheDocument()
  })

  it('renders DAS with correct styling', () => {
    render(<GenderVisualization gender="das" word="Kind" />)
    expect(screen.getByText('DAS')).toBeInTheDocument()
    expect(screen.getByText('Kind')).toBeInTheDocument()
  })
})

