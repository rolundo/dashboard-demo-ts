import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import { Fragment } from 'react'
import Jumbotron from '../../src/components/ui/jumbotron'
import axios from 'axios'
import DessertTable from '../../src/components/nextjs/dessert-table'
import ServerSideRenderingTutorial from '../../src/components/tutorials/server-side-rendering'
import { Dessert } from '../../src/types'

const useStyles = makeStyles({})

type Props = {
  desserts: Dessert[]
}

export default function ServerSideRenderingExample({ desserts }: Props) {
  const classes = useStyles()

  return (
    <Fragment>
      <Container maxWidth='md' component='main'>
        {/*@ts-ignore*/}
        <Grid container align='center'>
          {/*@ts-ignore*/}
          <Grid item xs={12} align='center'>
            <Jumbotron
              title='Server-side Rendering'
              summary={`In this example, we will be using NextJS's server-side rendering 
              to pre-render the page. The HTML of this page is generated on each request. 
              This feature is useful for pages which require up-to-date content.`}
            />
          </Grid>
        </Grid>
      </Container>
      <Container>
        <DessertTable data={desserts} />
      </Container>
      <Grid container>
        <Grid item xs={12}>
          <ServerSideRenderingTutorial />
        </Grid>
      </Grid>
    </Fragment>
  )
}

export async function getServerSideProps() {
  const response = await axios.get(`${process.env.SERVER}/api/desserts`)

  if (!response.data && !response.data.desserts) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      desserts: response.data.desserts,
    },
  }
}
