import { Component, Fragment } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Jumbotron from '../../src/components/ui/jumbotron'
import ErrorBoundary from '../../src/components/react/error-boundary'
import Error from '../../src/components/react/error'
import ErrorBoundaryTutorial from '../../src/components/tutorials/error-boundary'

const useStyles = makeStyles((theme) => ({}))

export default class ErrorBoundariesExample extends Component<any, any> {
  constructor(props: any) {
    super(props)

    this.state = {
      renderError: false,
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState({ renderError: true })
  }

  render() {
    return (
      <ErrorBoundary>
        <Container maxWidth='md' component='main'>
          {/* @ts-ignore */}
          <Grid container align='center'>
            {/* @ts-ignore */}
            <Grid item xs={12} align='center'>
              <Jumbotron
                title='Error Boundaries'
                summary={`In this example, we will be using React's getDerivedStateFromError
                lifecycle method to catch any JavaScript errors during the rendering process.
                This is useful for creating a fallback UI whenever unhandledException errors occur.`}
              />
            </Grid>
          </Grid>
        </Container>
        <Container maxWidth='xl' component='main'>
          {/* @ts-ignore */}
          <Grid item align='center'>
            <Button
              variant='contained'
              color='secondary'
              onClick={this.handleClick}
            >
              This button will cause the errored component to render
            </Button>
          </Grid>
          <Grid item>{this.state.renderError && <Error />}</Grid>
        </Container>
        <ErrorBoundaryTutorial />
      </ErrorBoundary>
    )
  }
}
