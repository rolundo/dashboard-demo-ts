import { render, screen } from '@testing-library/react'
import Home from '../pages/index'

describe('Home', () => {
  it('renders headings', () => {
    render(<Home />)

    const heading = screen.getByRole('heading', {
      name: /good morning, rolando/i,
    })

    const weeklyHeading = screen.getByRole('heading', {
      name: /Your weekly earnings/i,
    })

    const walletHeading = screen.getByRole('heading', {
      name: /Your wallet/i,
    })

    const balanceHeading = screen.getByRole('heading', {
      name: /total balance/i,
    })

    const currencyHeading = screen.getByRole('heading', {
      name: /available currency/i,
    })

    const transactionsHeading = screen.getByRole('heading', {
      name: /Latest Transactions/i,
    })

    const inboxHeading = screen.getByRole('heading', {
      name: /inbox/i,
    })

    const helpHeading = screen.getByRole('heading', {
      name: /Need help managing your spending/i,
    })

    expect(heading).toBeInTheDocument()
    expect(weeklyHeading).toBeInTheDocument()
    expect(walletHeading).toBeInTheDocument()
    expect(balanceHeading).toBeInTheDocument()
    expect(currencyHeading).toBeInTheDocument()
    expect(transactionsHeading).toBeInTheDocument()
    expect(inboxHeading).toBeInTheDocument()
    expect(helpHeading).toBeInTheDocument()
  })
})
