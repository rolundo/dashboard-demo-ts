import { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import { Fragment } from 'react'
import Jumbotron from '../../src/components/ui/jumbotron'
import MountUpdateUnmountTutorial from '../../src/components/tutorials/mount-update-unmount'

const useStyles = makeStyles((theme) => ({}))

type State = {
  value: string
}

export default class MountUpdateUnMount extends Component<any, State> {
  constructor(props: any) {
    super(props)

    this.state = {
      value: '',
    }
  }

  componentDidMount() {
    console.log('The component has mounted')
  }

  componentDidUpdate() {
    console.log('The component has updated')
  }

  componentWillUnmount() {
    console.log('The componet has unmounted')
  }

  render() {
    return (
      <Fragment>
        <Container maxWidth='md' component='main'>
          {/* @ts-ignore */}
          <Grid container align='center'>
            {/* @ts-ignore */}
            <Grid item xs={12} align='center'>
              <Jumbotron
                title='Mount/Update/Unmount'
                summary={`This example demonstrates some of React's most important 
                lifecycle methods. When the page is loaded, the component will console-log a mounted message.
                When the input is updated, the component will log an updated message. When the user navigates
                away from the page, the component will log an unmounted message.`}
              />
            </Grid>
          </Grid>
        </Container>
        <Container maxWidth='xl' component='main'>
          <Grid container>
            <Grid item xs={12}>
              <Typography paragraph variant='body2'>
                {`The current value is ${this.state.value}.`}
              </Typography>
            </Grid>
          </Grid>
          <TextField
            id='outlined-basic'
            label='Value'
            autoComplete='off'
            size='small'
            value={this.state.value}
            onChange={(e) => this.setState({ value: e.target.value })}
          />
        </Container>
        <MountUpdateUnmountTutorial />
      </Fragment>
    )
  }
}
