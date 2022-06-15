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
            {`To fetch data on each request when using NextJS's pre-rendering, we
            need to export an async function called getServerSideProps and
            return a props object:`}
          </Typography>
          <Highlighter
            codeString={`
              export async function getServerSideProps() {
                const response = await axios.get(\`\${process.env.SERVER}/api/desserts\`)
              
                return {
                  props: {
                    desserts: response.data.desserts,
                  },
                }
              }
            `}
          />
          <Typography paragraph>
            If no data is returned from the response, we can instead return a
            property called notFound which will be used to generate a 404 page:
          </Typography>
          <Highlighter
            codeString={`
              if (!response.data && !response.data.desserts) {
                return {
                  notFound: true,
                }
              }
            `}
          />
          <Typography paragraph>
            The data will now be fetched before the component is pre-rendered:
          </Typography>
          <Highlighter
            codeString={`
              <Container>
                <DessertTable data={props.desserts} />
              </Container>
            `}
          />
        </Grid>
      </Grid>
    </Container>
  )
}
