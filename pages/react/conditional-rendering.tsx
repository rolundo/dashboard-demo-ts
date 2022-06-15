import { Fragment, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Jumbotron from '../../src/components/ui/jumbotron'
import ConditionalRender from '../../src/components/react/conditional-render'
import ConditionalRenderTutorial from '../../src/components/tutorials/conditional-render'

const useStyles = makeStyles((theme) => ({}))

export default function ConditionalExample() {
  const [value, setValue] = useState('')

  return (
    <Fragment>
      <Container maxWidth='md' component='main'>
        {/* @ts-ignore */}
        <Grid container align='center'>
          {/* @ts-ignore */}
          <Grid item xs={12} align='center'>
            <Jumbotron
              title='Conditional Rendering'
              summary={`In this example, we will be using conditional rendering to render
              components depending on the current state of the application.`}
            />
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth='xl' component='main'>
        <Grid container>
          <Grid item xs={12}>
            <Typography paragraph variant='body2'>
              The following component will only be rendered when a value has
              been entered.
            </Typography>
          </Grid>
        </Grid>
        <TextField
          id='outlined-basic'
          label='Value'
          autoComplete='off'
          size='small'
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <Grid item xs={12}>
          {value && <ConditionalRender enteredValue={value} />}
        </Grid>
      </Container>
      <ConditionalRenderTutorial />
    </Fragment>
  )
}
