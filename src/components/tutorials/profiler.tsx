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

export default function ShouldComponentUpdateTutorial() {
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
            To use the Profiler method, we wrap our component with the Profiler
            component:
          </Typography>
          <Highlighter
            codeString={`
              <Profiler id='div' onRender={displayRenderResults}>
                <div>This is the rendered component</div>
              </Profiler>
            `}
          />
          <Typography paragraph>
            The Profiler component accepts an onRender callback which is used to
            access the profiler results:
          </Typography>
          <Highlighter
            codeString={`
              id, // the "id" prop of the Profiler tree that has just committed
              phase, // either "mount" (if the tree just mounted) or "update" (if it re-rendered)
              actualDuration, // time spent rendering the committed update
              baseDuration, // estimated time to render the entire subtree without memoization
              startTime, // when React began rendering this update
              commitTime, // when React committed this update
              interactions // the Set of interactions belonging to this update
            `}
          />
          <Typography paragraph>
            Because Profiler adds a non-insignificant amount of CPU and memory
            overhead to the application, Profiler should only be used sparingly.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  )
}
