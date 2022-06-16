import { makeStyles } from '@material-ui/core/styles'
import {
  FormEvent,
  FormEventHandler,
  Fragment,
  useEffect,
  useState,
} from 'react'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Jumbotron from '../../src/components/ui/jumbotron'
import io, { Socket } from 'socket.io-client'
import TextField from '@material-ui/core/TextField'
import { Box, Button, Card, CardContent, Typography } from '@material-ui/core'
import { DefaultEventsMap } from 'socket.io/dist/typed-events'
import { Message } from '../../src/types'
import ChatTutorial from '../../src/components/tutorials/chat'
let socket: Socket<DefaultEventsMap, DefaultEventsMap>

const useStyles = makeStyles({
  cardLeft: {
    maxWidth: 200,
    float: 'left',
  },
  cardRight: {
    maxWidth: 200,
    float: 'right',
  },
  container: {
    border: '1px solid grey',
    height: '300px',
    overflowX: 'auto',
  },
  input: {
    marginRight: '1em',
  },
})

export default function ChatExample() {
  const classes = useStyles()
  const [text, setText] = useState('')
  const [messages, setMessages] = useState<Message[]>([])
  const [typing, setTyping] = useState(false)

  const socketInitializer = async () => {
    socket = io('https://botty.alexgurr.com', {
      transports: ['websocket', 'polling', 'flashsocket'],
    })

    socket.on('connect', () => {
      console.log('connected to botty')
    })

    socket.on('bot-typing', () => {
      setTyping(true)
    })

    socket.on('bot-message', (text: string) => {
      updateMessages('botty', text)
      setTyping(false)
    })
  }

  useEffect(() => {
    socketInitializer()
  }, [])

  const updateMessages = (username: string, text: string) => {
    const message: Message = {
      username: username,
      message: text,
      time: new Date(),
    }

    setMessages((messagesPrev) => {
      return [...messagesPrev, message]
    })
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    socket.emit('user-message', text)
    updateMessages('You', text)
    setText('')
  }

  return (
    <Fragment>
      <Container maxWidth='md' component='main'>
        {/*@ts-ignore*/}
        <Grid container align='center' spacing={3}>
          {/*@ts-ignore*/}
          <Grid item xs={12} align='center'>
            <Jumbotron
              title='Chat'
              summary={`In this example, we will connect to a chat bot using Socket.IO`}
            />
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth='xl' component='main'>
        {/*@ts-ignore*/}
        <Grid container spacing={3}>
          {/*@ts-ignore*/}
          <Grid item xs={12} align='center' className={classes.container}>
            <Grid container>
              {messages.map((message: Message) => (
                //@ts-ignore
                <Grid key={message.time.toDateString()} item xs={12}>
                  <Card
                    key={message.time.toDateString()}
                    className={
                      message.username === 'You'
                        ? classes.cardRight
                        : classes.cardLeft
                    }
                  >
                    <CardContent>
                      <Typography>{message.message}</Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
          {/*@ts-ignore*/}
          <Grid item xs={12} align='center'>
            <form onSubmit={handleSubmit} autoComplete='off'>
              <TextField
                id='standard-basic'
                className={classes.input}
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
              <Button
                type='submit'
                variant='outlined'
                size='small'
                disabled={text == ''}
              >
                Send
              </Button>
              {typing ? (
                <Typography>botty is typing...</Typography>
              ) : (
                <Typography>&nbsp;</Typography>
              )}
            </form>
          </Grid>
        </Grid>
      </Container>
      <ChatTutorial />
    </Fragment>
  )
}
