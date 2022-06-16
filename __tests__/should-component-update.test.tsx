import { render, screen, fireEvent } from '@testing-library/react'
import ShouldComponentUpdate from '../pages/react/should-component-update'

describe('Should Component Update', () => {
  it('renders components', () => {
    render(<ShouldComponentUpdate />)

    const heading = screen.getByRole('heading', {
      name: /Should Component Update?/i,
    })

    const paragraph = screen.getByText(
      /shouldComponentUpdate is a rarely-used lifecycle method that checks the values of state before determing whether or not to update the component./i
    )

    const paragraph2 = screen.getByText(
      /This component will only update when the value is not equal to 5. The current value is 0./i
    )

    const input = screen.getByTestId('outlined-basic')

    expect(heading).toBeInTheDocument()
    expect(paragraph).toBeInTheDocument()
    expect(paragraph2).toBeInTheDocument()
    expect(input).toBeInTheDocument()
  })

  it('do not render a 5 when the number 5 is entered', () => {
    render(<ShouldComponentUpdate />)

    const input = screen.getByTestId('outlined-basic')

    fireEvent.change(input, { target: { value: '5' } })

    expect(
      screen.queryByText(
        /This component will only update when the value is not equal to 5. The current value is 5./i
      )
    ).not.toBeInTheDocument()
  })
})
