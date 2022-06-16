import { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import { Fragment } from 'react'
import Jumbotron from '../../src/components/ui/jumbotron'
import ShouldComponentUpdateTutorial from '../../src/components/tutorials/should-component-update'

const useStyles = makeStyles((theme) => ({}))

type State = {
  value: string
}

export default class ShouldComponentUpdate extends Component<any, State> {
  constructor(props: any) {
    super(props)

    this.state = {
      value: '0',
    }
  }

  shouldComponentUpdate(nextProps: any, nextState: State) {
    if (nextState.value === '5') {
      return false
    }

    return true
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
                title='Should Component Update?'
                summary={`shouldComponentUpdate is a rarely-used lifecycle method that checks the
                values of state before determing whether or not to update the component.`}
              />
            </Grid>
          </Grid>
        </Container>
        <Container maxWidth='xl' component='main'>
          <Grid container>
            <Grid item xs={12}>
              <Typography paragraph variant='body2'>
                {`This component will only update when the value is not equal to 5.  The current value is ${this.state.value}.`}
              </Typography>
            </Grid>
          </Grid>
          <TextField
            id='outlined-basic'
            inputProps={{
              'data-testid': 'outlined-basic',
            }}
            label='Value'
            autoComplete='off'
            size='small'
            value={this.state.value}
            onChange={(e) => this.setState({ value: e.target.value })}
          />
        </Container>
        <ShouldComponentUpdateTutorial />
      </Fragment>
    )
  }
}
