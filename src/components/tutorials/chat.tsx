import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Highlighter from '../ui/highlighter'
import { Typography } from '@material-ui/core'
import Divider from '@material-ui/core/Divider'

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(5),
  },
}))

export default function ChatTutorial() {
  const classes = useStyles()

  return (
    <Container maxWidth='xl' component='main' className={classes.container}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Typography variant='h5'>Tutorial</Typography>
          <Divider />
        </Grid>
        <Grid item xs={12}>
          <Typography paragraph>
            To begin a chat with the chat bot, first we need to initialize the
            socket when the chat component mounts:
          </Typography>
          <Highlighter
            codeString={`
              let socket: Socket<DefaultEventsMap, DefaultEventsMap>

              const socketInitializer = async () => {
                socket = io('https://botty.alexgurr.com', {
                  transports: ['websocket', 'polling', 'flashsocket'],
                })
            
                socket.on('connect', () => {
                  console.log('connected to botty')
                })
                
                // When the bot is typing, we will set typing status to true
                socket.on('bot-typing', () => {
                  setTyping(true)
                })
            
                // When the bot sends a message, we will update the array of messages
                // And then set the typing value to false
                socket.on('bot-message', (text: string) => {
                  updateLog('botty', text)
                  setTyping(false)
                })
              }

              // updates the messages array whenever a new message is sent
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
            `}
          />
          <Typography paragraph>
            We will be initializing this socket when the component mounts:
          </Typography>
          <Highlighter
            codeString={`
              useEffect(() => {
                socketInitializer()
              }, [])
            `}
          />
          <Typography paragraph>
            We will then create a form that lets the user type and send a
            message:
          </Typography>
          <Highlighter
            codeString={`
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
              </form>
            `}
          />
          <Typography paragraph>
            When the form is submitted, we will emit the user-message event
            which sends our message to botty which will prompt a response. After
            emitting the event, we will update the messages array with our new
            message and reset the text input:
          </Typography>
          <Highlighter
            codeString={`
              const handleSubmit = (e: FormEvent) => {
                e.preventDefault()

                socket.emit('user-message', text)
                updateMessages('You', text)
                setText('')
              }
            `}
          />
          <Typography paragraph>
            After sending our message, the botty server will emit a bot-typing
            event which will update our typing state. When typing is true, we
            will render the typing status on the page:
          </Typography>
          <Highlighter
            codeString={`
              {typing ? (
                <Typography>botty is typing...</Typography>
              ) : (
                <Typography>&nbsp;</Typography>
              )})
              }
            `}
          />

          <Typography paragraph>
            {`To display our messages on screen, we will loop through each message
            in the messages array, and we will render a card for each message.
            Our messages will float to the right and botty's messages will be on the left:`}
          </Typography>
          <Highlighter
            codeString={`
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
            `}
          />
        </Grid>
      </Grid>
    </Container>
  )
}
