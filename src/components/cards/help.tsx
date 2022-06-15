import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Divider from '@material-ui/core/Divider'

const useStyles = makeStyles((theme) => ({
  card: {
    // backgroundColor: theme.palette.primary.main,
  },
}))

export default function HelpCard() {
  const classes = useStyles()
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant='h5' component='h2'>
            Need help managing your spending?
          </Typography>
          <Typography gutterBottom variant='body2' component='h2'>
            Proin leo sem, luctus ac sodales in, condimentum et elit. Donec arcu
            lacus, pharetra in massa eu, tempor faucibus sapien. Curabitur
            molestie neque ac lectus semper, ac condimentum magna pellentesque.
          </Typography>
        </CardContent>
        <Divider />
      </CardActionArea>
      <CardActions>
        <Button size='small' color='secondary'>
          Contact Us
        </Button>
      </CardActions>
    </Card>
  )
}
