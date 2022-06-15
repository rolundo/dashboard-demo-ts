import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import TwoLineChart from '../charts/two-line-chart'
import { getActivity } from '../../../pages/api/chart-data'

const useStyles = makeStyles((theme) => ({
  card: {
    // backgroundColor: theme.palette.primary.main,
  },
  paper: {
    marginTop: theme.spacing(2),
    height: '300px',
  },
}))

export default function ActivityCard() {
  const classes = useStyles()
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardContent>
          <Typography variant='h5' component='h1'>
            Activity
          </Typography>
          <Typography variant='subtitle1' component='h1'>
            Last 6 months
          </Typography>
          <Paper className={classes.paper} elevation={0}>
            <TwoLineChart data={getActivity()} />
          </Paper>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
