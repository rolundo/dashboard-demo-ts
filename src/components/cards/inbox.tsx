import { Fragment } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import Divider from '@material-ui/core/Divider'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Badge from '@material-ui/core/Badge'
import CardActions from '@material-ui/core/CardActions'

const useStyles = makeStyles((theme) => ({
  card: {
    // backgroundColor: theme.palette.primary.main,
  },
  paper: {
    marginTop: theme.spacing(2),
    height: '300px',
  },
}))

const truncate = (input: string) =>
  input.length > 30 ? `${input.substring(0, 30)}...` : input

const inbox = [
  {
    id: 0,
    sender: 'Jim Walters',
    body: 'Hello I am reaching out to you because',
  },
  {
    id: 1,
    sender: 'Charles Mills',
    body: 'Just wanted to let you know that there ',
  },
  {
    id: 2,
    sender: 'Sonya Michaels',
    body: 'For the next few weeks, I will be unable',
  },
  {
    id: 3,
    sender: 'Jorge Perez',
    body: 'I just wanted to thank you again for letting',
  },
  {
    id: 4,
    sender: 'Doug Williams',
    body: 'Hey, do you have some time this afternooon to',
  },
  {
    id: 5,
    sender: 'Jeff Clark',
    body: 'Hey, just letting you know that there is some',
  },
]

export default function InboxCard() {
  const classes = useStyles()
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardContent>
          <Typography variant='h6' component='h2'>
            Inbox
          </Typography>
          <List>
            {inbox.map((message) => (
              <Fragment key={message.id}>
                <Box>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar />
                    </ListItemAvatar>
                    <ListItemText>
                      <Badge>{message.sender}</Badge>
                      <div>
                        <Typography variant='body2' component='h2'>
                          {truncate(message.body)}
                        </Typography>
                        {
                          <Typography variant='body2' component='h2'>
                            {'2 hours ago'}
                          </Typography>
                        }
                      </div>
                    </ListItemText>
                  </ListItem>
                </Box>
                <Divider />
              </Fragment>
            ))}
          </List>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size='small' color='secondary'>
          Go to chat
        </Button>
      </CardActions>
    </Card>
  )
}
