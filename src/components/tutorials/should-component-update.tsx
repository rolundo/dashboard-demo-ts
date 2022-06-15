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
            To use shouldComponentUpdate(), we must create a class-based
            component:
          </Typography>
          <Highlighter
            codeString={`
              export default class ShouldComponentUpdate extends Component {
                constructor(props) {
                  super(props)
              
                  this.state = {
                    value: 0,
                  }
                }
              }
            `}
          />
          <Typography paragraph>
            {`Then we implement the shouldComponentUpdate function. The function
            receives the nextProps and nextState values, and we will use these
            to decide if the component should update. In this example, we will
            prevent update if this.state.value is '5':`}
          </Typography>
          <Highlighter
            codeString={`
              shouldComponentUpdate(nextProps, nextState) {
                if (nextState.value === '5') {
                  return false
                }
            
                return true
              }
            `}
          />
          <Typography paragraph>
            {`The component should now only update for every value other than '5'.`}
          </Typography>
        </Grid>
      </Grid>
    </Container>
  )
}
