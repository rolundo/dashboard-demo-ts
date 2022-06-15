import { Profiler, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { Fragment } from 'react'
import Jumbotron from '../../src/components/ui/jumbotron'
import ProfilerTutorial from '../../src/components/tutorials/profiler'

const useStyles = makeStyles((theme) => ({}))

export default function ConditionalExample() {
  const [renderComponent, setRenderComponent] = useState(false)

  const handleClick = () => {
    setRenderComponent(true)
  }

  const displayRenderResults = (
    // @ts-ignore
    id, // the "id" prop of the Profiler tree that has just committed
    // @ts-ignore
    phase, // either "mount" (if the tree just mounted) or "update" (if it re-rendered)
    // @ts-ignore
    actualDuration, // time spent rendering the committed update
    // @ts-ignore
    baseDuration, // estimated time to render the entire subtree without memoization
    // @ts-ignore
    startTime, // when React began rendering this update
    // @ts-ignore
    commitTime, // when React committed this update
    // @ts-ignore
    interactions // the Set of interactions belonging to this update
  ) => {
    console.log({
      id,
      phase,
      actualDuration,
      baseDuration,
      startTime,
      commitTime,
      interactions,
    })
  }

  return (
    <Fragment>
      <Container maxWidth='md' component='main'>
        {/* @ts-ignore */}
        <Grid container align='center'>
          {/* @ts-ignore */}
          <Grid item xs={12} align='center'>
            <Jumbotron
              title='Profiler'
              summary={`Profiler is wrapper that measures how often the child tree renders
              and how much it costs to render the child components. This is useful for determining
              which components require optimization.`}
            />
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth='xl' component='main'>
        <Grid container>
          <Grid item xs={12}>
            <Typography paragraph variant='body2'>
              The following component will be rendered after the button is
              clicked. After the component is rendered, the profiler will
              display the results in the textbox.
            </Typography>
          </Grid>
        </Grid>
        <Grid item>
          <Button
            variant='contained'
            color='secondary'
            fullWidth
            onClick={handleClick}
          >
            Render Component
          </Button>
          <Grid item xs={12}>
            {renderComponent && (
              <Profiler id='div' onRender={displayRenderResults}>
                <div>This is the rendered component</div>
              </Profiler>
            )}
          </Grid>
        </Grid>
      </Container>
      <ProfilerTutorial />
    </Fragment>
  )
}
