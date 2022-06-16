import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Highlighter from '../ui/highlighter'
import { Typography } from '@material-ui/core'
import Divider from '@material-ui/core/Divider'

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(5),
  },
}))

export default function JestTutorial() {
  const classes = useStyles()

  return (
    <Container maxWidth='xl' component='main' className={classes.container}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Typography variant='h5'>Tutorial</Typography>
          <Divider />
        </Grid>
        <Grid item xs={12}>
          <Typography paragraph>
            {`We will begin by testing the home page to make sure all our components 
            actually rendered onto the page. We will use @testing-libary's screen property to grab
            the heading elements by their role and text value:`}
          </Typography>
          <Highlighter
            codeString={`
              // describes test suite
              describe('Home', () => {
                // describes test
                it('renders headings', () => {
                  // render the component so we can extract elements
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
                })
              })
            `}
          />
          <Typography paragraph>
            After grabbing the elements, we will describe the expected status of
            these elements. To make sure these elements are actually rendered on
            screen, we will use the .toBeInTheDocument() property to check that
            it is rendered. If there are no rejects, then the test passes:
          </Typography>
          <Highlighter
            codeString={`
              expect(heading).toBeInTheDocument()
              expect(weeklyHeading).toBeInTheDocument()
              expect(walletHeading).toBeInTheDocument()
              expect(balanceHeading).toBeInTheDocument()
              expect(currencyHeading).toBeInTheDocument()
              expect(transactionsHeading).toBeInTheDocument()
              expect(inboxHeading).toBeInTheDocument()
              expect(helpHeading).toBeInTheDocument()
            `}
          />
          <Typography paragraph>
            In this next example, we will be testing our Conditionl Rendering
            Example to make sure that a component only renders when a certain
            condition has been met. In this case, the conditional component
            should only be rendered when a value has been entered into the input
            element:
          </Typography>
          <Highlighter
            codeString={`
              // describe the test
              it('only renders condtional component when a value has been entered', () => {
                // render the component
                render(<ConditionalRendering />)
            
                // grab the input using the its data-testid property
                const input = screen.getByTestId('outlined-basic')
            
                // make sure the conditional component does not exist before a value has been entered
                expect(
                  screen.queryByText('This component is now rendered!')
                ).not.toBeInTheDocument()
            
                // use @testing-library's fire event to change the value of the input to '1'
                fireEvent.change(input, { target: { value: '1' } })

                // After the value has changed, check for the existence of the conditional component
                const heading = screen.getByTestId('conditional-header')
                expect(heading).toBeInTheDocument()
              })
            `}
          />
          <Typography paragraph>
            In this next example, we will be testing our Should Component Update
            Example to make sure that the component only updates when a certain
            condition has been met. In this case, the state will only change
            when the entered value is not equal to 5:
          </Typography>
          <Highlighter
            codeString={`
              // describe the test
              it('do not render a 5 when the number 5 is entered', () => {
                // render the component
                render(<ShouldComponentUpdate />)
            
                // grab the input using the its data-testid property
                const input = screen.getByTestId('outlined-basic')

                // use @testing-library's fire event to change the value of the input to '1'
                fireEvent.change(input, { target: { value: '5' } })
            
                // Ensure the component has not been updated to include the '5' character
                expect(
                  screen.queryByText(
                    /This component will only update when the value is not equal to 5. The current value is 5./i
                  )
                ).not.toBeInTheDocument()
              })
            `}
          />
        </Grid>
      </Grid>
    </Container>
  )
}
