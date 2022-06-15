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

export default function ErrorBoundaryTutorial() {
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
            To implement an error boundary, first we create an error boundary
            wrapper. To become an Error Boundary component, a component must
            define a static getDerivedStateFromError() or componentDidCatch()
            function. getDerivedStateFromError will provide a fallback UI and
            componentDidCatch will log errors:
          </Typography>
          <Highlighter
            codeString={`
            import { Component } from 'react'
            import { makeStyles } from '@material-ui/core/styles'
            import Container from '@material-ui/core/Container'
            import Jumbotron from '../ui/jumbotron'
            
            const useStyles = makeStyles((theme) => ({}))
            
            export default class ErrorBoundary extends Component {
              constructor(props) {
                super(props)
            
                this.state = {
                  error: '',
                  errorInfo: '',
                  hasError: false,
                }
              }
            
              static getDerivedStateFromError(error) {
                return { hasError: true, error }
              }
            
              componentDidCatch(error, errorInfo) {
                console.log({ error, errorInfo })
                this.setState({ errorInfo })
              }
            
              render() {
                if (this.state.hasError) {
                  return (
                    <Container maxWidth='sm'>
                      <Jumbotron
                        title='Fallback UI'
                        summary='Error Summary'
                      />
                    </Container>
                  )
                }
            
                return this.props.children
              }
            }
          `}
          />
          <Typography paragraph>
            This wrapper will return a fallback UI instead of the child
            component. After that, we wrap our current component within the
            ErrorBoundary. Any unhandledExceptions within this component will
            get caught by the error boundary:
          </Typography>
          <Highlighter
            codeString={`
              render() {
                return (
                  <ErrorBoundary>
                    <Container maxWidth='md' component='main'>
                      <Grid container align='center'>
                        <Grid item xs={12} align='center'>
                          <Jumbotron
                            title='Error Boundaries'
                            summary='Summary'
                          />
                        </Grid>
                      </Grid>
                    </Container>
                    <Container maxWidth='xl' component='main'>
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
            `}
          />
          <Typography paragraph>
            After that, we simply render a broken component to display the
            fallback UI:
          </Typography>
          <Highlighter
            codeString={`
              render() {
                return <div>{undefinedConstant}</div>
              }
            `}
          />
        </Grid>
      </Grid>
    </Container>
  )
}
