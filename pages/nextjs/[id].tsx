import { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useRouter } from 'next/router'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import { Fragment } from 'react'
import Jumbotron from '../../src/components/ui/jumbotron'
import Button from '@material-ui/core/Button'
import ShallowRoutingTutorial from '../../src/components/tutorials/shallow-routing'

const useStyles = makeStyles({})

export default function ImageOptimizationExample() {
  const classes = useStyles()
  const router = useRouter()

  const handleClick = () => {
    const randomInt = Math.floor(Math.random() * 30)
    router.push(`/nextjs/${randomInt}`, undefined, { shallow: true })
  }

  useEffect(() => {
    // The id changed!
  }, [router.query.id])

  return (
    <Fragment>
      <Container maxWidth='md' component='main'>
        {/* @ts-ignore */}
        <Grid container align='center'>
          {/* @ts-ignore */}
          <Grid item xs={12} align='center'>
            <Jumbotron
              title='Shallow Routing'
              summary={`In this example, we will be using NextJS's Shallow Routing to navigate
              to a page with a different query parameter without having to re-run
              NextJS's HTML pre-rendering functions. This feature is useful for navigating between
              similar-style pages. For example between user profiles, products, invoices, etc.`}
            />
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth='md' component='main'>
        <Grid container spacing={5} alignItems='flex-end'>
          <Grid item xs={12}>
            {`The current id for the page is: ${router.query.id}`}
          </Grid>
          <Grid item xs={12}>
            <Button variant='contained' color='secondary' onClick={handleClick}>
              Navigate to page with new ID
            </Button>
          </Grid>
        </Grid>
      </Container>
      <ShallowRoutingTutorial />
    </Fragment>
  )
}
