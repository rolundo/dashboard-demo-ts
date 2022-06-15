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
            {`To conditionally render a component based on the state, we first
            create a function component with a state property called 'value':`}
          </Typography>
          <Highlighter
            codeString={`
              export default function ConditionalExample() {
                const [value, setValue] = useState('')
              }
            `}
          />
          <Typography paragraph>
            Then we create a TextField to change the state value:
          </Typography>
          <Highlighter
            codeString={`
              <TextField
                id='outlined-basic'
                label='Value'
                autoComplete='off'
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
            `}
          />
          <Typography paragraph>
            {`After that, we use an inline If with logical && operator to
            conditionally render the component. If value is not equal to '',
            then the component is rendered:`}
          </Typography>
          <Highlighter
            codeString={`
              {value && <ConditionalRender enteredValue={value} />}
            `}
          />
        </Grid>
      </Grid>
    </Container>
  )
}
