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
            {`Shallow Routing allows you to change the URL without re-running
            NextJS's data-fetching methods. To implement shallow routing, we
            need to include a shallow option when pushing a route:`}
          </Typography>
          <Highlighter
            codeString={`
              export default function ImageOptimizationExample(props) {
                const classes = useStyles()
                const router = useRouter()
              
                const handleClick = () => {
                  const randomInt = Math.floor(Math.random() * 30)
                  router.push(\`/nextjs/\${randomInt}\`, undefined, { shallow: true })
                }
              }
            `}
          />
          <Typography paragraph>
            The URL will be updated with the new query parameters
          </Typography>
          <Highlighter
            codeString={`
              http://localhost:3000/nextjs/20
            `}
          />
          <Typography paragraph>
            Shallow Routing only works for pages with the same base URL. If you
            attempt to implement shallow routing when navigating to a new URL,
            shallow routing will not be used. The following example will not use
            shallow routing since we are moving to a new page URL:
          </Typography>
          <Highlighter
            codeString={`
              router.push('/?counter=10', '/about?counter=10', { shallow: true })
            `}
          />
        </Grid>
      </Grid>
    </Container>
  )
}
