import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import { Fragment } from 'react'
import Jumbotron from '../../src/components/ui/jumbotron'
import Image from 'next/image'

const useStyles = makeStyles({})

const imageAmount = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

export default function ImageOptimizationExample() {
  const classes = useStyles()

  return (
    <Fragment>
      <Container maxWidth='md' component='main'>
        {/*@ts-ignore*/}
        <Grid container align='center'>
          {/*@ts-ignore*/}
          <Grid item xs={12} align='center'>
            <Jumbotron
              title='Image Optimization'
              summary={`In this example, we will be using NextJS's image optimization to convert
              all images to modern .webp formats and resize them to improve performance. All images
              are also lazy loaded so they will not be loaded if they are not visible in the viewport.`}
            />
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth='md' component='main'>
        <Grid container spacing={5} alignItems='flex-end'>
          {imageAmount.map((image) => (
            <Grid key={image} item xs={12} sm={8} md={6}>
              <Image
                src={`/img/samples/sample-${image}.jpg`}
                alt={`sample image ${image}`}
                height='300'
                width='300'
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Fragment>
  )
}
