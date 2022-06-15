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

export default function ConditionalRenderTutorial() {
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
            {`To access a component's lifecycle methods, we must first create a
            class-based component:`}
          </Typography>
          <Highlighter
            codeString={`
              export default class ShouldComponentUpdate extends Component {
                constructor(props) {
                  super(props)
                }
              }
            `}
          />
          <Typography paragraph>
            After that, we can now access the lifecycle methods by using the
            following functions:
          </Typography>
          <Highlighter
            codeString={`
              componentDidMount() {
                console.log('The component has mounted')
              }
            
              componentDidUpdate() {
                console.log('The component has updated')
              }
            
              componentWillUnmount() {
                console.log('The componet has unmounted')
              }
            `}
          />
          <Typography paragraph>
            The ComponentWillMount is no longer recommended. If you want to
            initialize the state, it is recommended to do so within the
            constructor:
          </Typography>
          <Highlighter
            codeString={`
              constructor(props) {
                super(props)
            
                this.state = {
                  value: 10,
                }
              }

              /*
              componentWillMount() {
                this.setState({ value: 10 })
              }
              /*
            `}
          />
        </Grid>
      </Grid>
    </Container>
  )
}
