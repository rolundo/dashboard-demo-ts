import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import Divider from '@material-ui/core/Divider'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import { ListItemText } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  card: {
    // backgroundColor: theme.palette.primary.main,
  },
  divider: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
  amount: {
    display: 'flex',
    justifyContent: 'right',
  },
}))

export default function BalanceCard() {
  const classes = useStyles()
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography gutterBottom variant='subtitle1' component='h1'>
          Total Balance
        </Typography>
        <Typography variant='h4' component='h1'>
          $110,725.09
        </Typography>
        <Divider className={classes.divider} />
        <Typography component='h1'>Available Currency</Typography>
        <List>
          <ListItem>
            <ListItemText>US Dollars</ListItemText>
            <Typography variant='subtitle2' className={classes.amount}>
              $17,422
            </Typography>
          </ListItem>
          <ListItem>
            <ListItemText>Bitcoin</ListItemText>
            <Typography variant='subtitle2' className={classes.amount}>
              $2,586
            </Typography>
          </ListItem>
          <ListItem>
            <ListItemText>Other</ListItemText>
            <Typography variant='subtitle2' className={classes.amount}>
              $1,392
            </Typography>
          </ListItem>
        </List>
      </CardContent>
      <CardActions>
        <Box>
          <Box>
            <Button size='small' color='secondary'>
              Add Money
            </Button>
          </Box>
          <Box>
            <Button size='small' color='secondary'>
              Withdraw funds
            </Button>
          </Box>
        </Box>
      </CardActions>
    </Card>
  )
}
