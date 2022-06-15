import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import { Fragment } from 'react'
import Jumbotron from '../../src/components/ui/jumbotron'
import DessertTable from '../../src/components/nextjs/dessert-table'
import { getAllDesserts } from '../api/desserts'
import StaticGenerationTutorial from '../../src/components/tutorials/static-generation'
import { Dessert } from '../../src/types'

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(3),
  },
}))

type Props = {
  desserts: Dessert[]
}

export default function StaticGenerationExample({ desserts }: Props) {
  const classes = useStyles()

  return (
    <Fragment>
      <Container maxWidth='md' component='main'>
        {/*@ts-ignore*/}
        <Grid container align='center'>
          {/*@ts-ignore*/}
          <Grid item xs={12} align='center'>
            <Jumbotron
              title='Static Generation'
              summary={`In this example, we will be using NextJS's static generation to pre-render
              the page and pre-fetch the table data at build time. This feature is useful for pages
              which have content and data that never changes.`}
            />
          </Grid>
        </Grid>
      </Container>
      <Container>
        <DessertTable data={desserts} />
      </Container>
      <Grid container className={classes.container}>
        <Grid item xs={12}>
          <StaticGenerationTutorial />
        </Grid>
      </Grid>
    </Fragment>
  )
}

export async function getStaticProps() {
  const desserts = await getAllDesserts()

  return {
    props: {
      desserts,
    },
  }
}
