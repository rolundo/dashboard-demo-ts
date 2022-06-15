import { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import { Fragment } from 'react'
import Jumbotron from '../../src/components/ui/jumbotron'
import MemoTutorial from '../../src/components/tutorials/memo'

import Memoized from '../../src/components/react/memoized'

const useStyles = makeStyles((theme) => ({}))

export default function ConditionalExample() {
  const classes = useStyles()
  const [value, setValue] = useState('')

  return (
    <Fragment>
      <Container maxWidth='md' component='main'>
        {/* @ts-ignore */}
        <Grid container align='center'>
          {/* @ts-ignore */}
          <Grid item xs={12} align='center'>
            <Jumbotron
              title='Memo'
              summary={`In this example, we will be using Memo to memoize the results of
              a component so that we can skip a re-rendering if the props do not change. This feature
              is useful for avoiding unnecessary re-renders for components that do not require a re-rendering.`}
            />
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth='xl' component='main'>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              id='outlined-basic'
              label='Value'
              autoComplete='off'
              size='small'
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography paragraph variant='body2'>
              The following component will not re-render even though the state
              of the component changes when the textfield is changed.
            </Typography>
            <Memoized />
          </Grid>
        </Grid>
      </Container>
      <MemoTutorial />
    </Fragment>
  )
}
