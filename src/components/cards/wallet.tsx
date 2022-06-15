import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Divider from '@material-ui/core/Divider'

const useStyles = makeStyles((theme) => ({
  card: {
    // backgroundColor: theme.palette.primary.main,
  },
}))

export default function WalletCard() {
  const classes = useStyles()
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant='h5' component='h2'>
            $65,100
          </Typography>
          <Typography gutterBottom variant='subtitle1' component='h2'>
            Your wallet
          </Typography>
        </CardContent>
        <Divider />
      </CardActionArea>
      <CardActions>
        <Button size='small' color='secondary'>
          Withdraw money
        </Button>
      </CardActions>
    </Card>
  )
}
