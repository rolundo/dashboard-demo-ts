import { Component, ErrorInfo, ReactNode } from 'react'
import Container from '@material-ui/core/Container'
import Jumbotron from '../ui/jumbotron'

type MyProps = {
  children: ReactNode
}

type MyState = {
  error: Error
  errorInfo: ErrorInfo
  hasError: boolean
}

export default class ErrorBoundary extends Component<MyProps, any> {
  constructor(props: any) {
    super(props)

    this.state = {
      error: '',
      errorInfo: '',
      hasError: false,
    }
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.log({ error, errorInfo })
    this.setState({ errorInfo })
  }

  render() {
    if (this.state.hasError) {
      return (
        <Container maxWidth='sm'>
          <Jumbotron
            title='Fallback UI'
            summary={`You are receiving this fallback UI Error page instead of an errored 
            component. Unhandled Exception error message: ${this.state.error.message}.`}
          />
        </Container>
      )
    }

    return this.props.children
  }
}
