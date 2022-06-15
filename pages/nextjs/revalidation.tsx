import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import { Fragment } from 'react'
import Jumbotron from '../../src/components/ui/jumbotron'
import DessertTable from '../../src/components/nextjs/dessert-table'
import { getAllDesserts } from '../api/desserts'
import RevalidationTutorial from '../../src/components/tutorials/revalidation'
import { Dessert } from '../../src/types'

const useStyles = makeStyles({})

type Props = {
  desserts: Dessert[]
}

export default function RevalidationExample({ desserts }: Props) {
  const classes = useStyles()

  return (
    <Fragment>
      <Container maxWidth='md' component='main'>
        {/*@ts-ignore*/}
        <Grid container align='center'>
          {/*@ts-ignore*/}
          <Grid item xs={12} align='center'>
            <Jumbotron
              title='Pre-fetching with Revalidation'
              summary={`In this example, we will be using NextJS's incremental static generation to pre-render
              the page and pre-fetch the table data at build time. With the revalidate property set, NextJS will attempt
              to re-generate the page every hour. This feature is useful for pages which have content and data that changes infrequently.`}
            />
          </Grid>
        </Grid>
      </Container>
      <Container>
        <DessertTable data={desserts} />
      </Container>
      <Grid container>
        <Grid item xs={12}>
          <RevalidationTutorial />
        </Grid>
      </Grid>
    </Fragment>
  )
}

export async function getStaticProps() {
  // const response = await axios.get(`${process.env.SERVER}/api/desserts`)

  // if (!response.data && !response.data.desserts) {
  //   return {
  //     notFound: true,
  //   }
  // }

  // return {
  //   props: {
  //     desserts: response.data.desserts,
  //   },
  //   // Page is re-generated every hour
  //   revalidate: 3000,
  // }

  const desserts = await getAllDesserts()

  return {
    props: {
      desserts,
    },
    // Page is re-generated every hour
    revalidate: 3600,
  }
}
