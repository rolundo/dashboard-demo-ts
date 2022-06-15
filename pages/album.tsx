import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import { Fragment } from 'react'
import Jumbotron from '../src/components/ui/jumbotron'
import Image from 'next/image'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import CardActions from '@material-ui/core/CardActions'

import IconButton from '@material-ui/core/IconButton'
import FavoriteIcon from '@material-ui/icons/Favorite'
import ShareIcon from '@material-ui/icons/Share'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme) => ({
  cardMedia: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: theme.spacing(2),
  },
  cardActions: {
    display: 'flex',
    // justifyContent: 'center',
  },
}))

const imageAmount = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

export default function ImageOptimizationExample() {
  const classes = useStyles()

  return (
    <Fragment>
      <Container maxWidth='md' component='main'>
        {/*@ts-ignore*/}
        <Grid container align='center'>
          {/*@ts-ignore*/}
          <Grid item xs={12} align='center'>
            <Jumbotron title='Photo Album' summary={''} />
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth='md' component='main'>
        <Grid container spacing={5} alignItems='flex-end'>
          {imageAmount.map((image) => (
            <Grid key={image} item xs={12} sm={8} md={6}>
              <Card>
                <CardMedia className={classes.cardMedia}>
                  <Image
                    src={`/img/album/album-${image}.jpg`}
                    alt={`album image ${image}`}
                    height='300'
                    width='400'
                  />
                </CardMedia>
                <CardActions className={classes.cardActions}>
                  <IconButton aria-label='add to favorites'>
                    <FavoriteIcon />
                  </IconButton>
                  <IconButton aria-label='share'>
                    <ShareIcon />
                  </IconButton>
                  {/* <Button
                    aria-label='download image'
                    variant='outlined'
                    color='secondary'
                  >
                    Download
                  </Button> */}
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Fragment>
  )
}
