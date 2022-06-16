import { render, screen, fireEvent } from '@testing-library/react'
import ConditionalRendering from '../pages/react/conditional-rendering'

describe('Condtional Rendering', () => {
  it('renders components', () => {
    render(<ConditionalRendering />)

    const heading = screen.getByRole('heading', {
      name: /Conditional Rendering/i,
    })

    const paragraph = screen.getByText(
      /In this example, we will be using conditional rendering to render components depending on the current state of the application./i
    )

    const paragraph2 = screen.getByText(
      /The following component will only be rendered when a value has been entered./i
    )

    const input = screen.getByTestId('outlined-basic')

    expect(heading).toBeInTheDocument()
    expect(paragraph).toBeInTheDocument()
    expect(paragraph2).toBeInTheDocument()
    expect(input).toBeInTheDocument()
  })

  it('only renders condtional component when a value has been entered', () => {
    render(<ConditionalRendering />)

    const input = screen.getByTestId('outlined-basic')

    expect(
      screen.queryByText('This component is now rendered!')
    ).not.toBeInTheDocument()

    fireEvent.change(input, { target: { value: '1' } })
    const heading = screen.getByTestId('conditional-header')

    expect(heading).toBeInTheDocument()
  })
})
