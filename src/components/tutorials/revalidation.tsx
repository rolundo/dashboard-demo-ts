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
            To generate a page with incremental static re-generation, we need to
            export an async function named getStaticProps which returns a prop
            object containing the data along with a revalidate property which
            tells NextJS how often to re-generate:
          </Typography>
          <Highlighter
            codeString={`
              export async function getStaticProps() {
                const response = await axios.get(\`\${process.env.SERVER}/api/desserts\`)
              
                return {
                  props: {
                    desserts: response.data.desserts,
                  },
                  // Page is re-generated every hour
                  revalidate: 3600
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
            After the data is generated, the component can now access the prop
            value:
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
