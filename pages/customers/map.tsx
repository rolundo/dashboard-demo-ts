import dynamic from 'next/dynamic'
import { Container, Grid, makeStyles, Paper } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import axios from 'axios'
import { Customer } from '../../src/types'

// disable server-side rendering to render Mapbox map
const Map = dynamic(() => import('../../src/components/cards/map'), {
  //@ts-ignore
  loading: () => 'Loading...',
  ssr: false,
})

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
    height: '500px',
    backgroundColor: theme.palette.primary.main,
  },
}))

type Props = {
  customers: Customer[]
}

export default function Customers({ customers }: Props) {
  const classes = useStyles()

  return (
    <Container maxWidth='xl' className={classes.container}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Typography component='h1' variant='h4'>
            Customer Map
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Map locations={customers} />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  )
}

export async function getServerSideProps() {
  const response = await axios.get(
    `${process.env.SERVER}/api/graphql?query={customers{ _id, name, city, state, country, orders, spent, latitude, longitude }}`
  )

  return {
    props: {
      customers: response.data.data.customers,
    },
  }
}
