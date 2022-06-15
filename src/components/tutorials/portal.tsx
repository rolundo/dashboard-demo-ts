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

export default function PortalTutorial() {
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
            {`To implement the notification portal, first we add a div to the body
            element within NextJS's _document.js file:`}
          </Typography>
          <Highlighter
            codeString={`
            //_document.js
            <body>
              <Main />
              <NextScript />
              <div id='notifications'></div>
            </body>
            `}
          />
          <Typography paragraph>
            Then we render the notification component into the target DOM Node:
          </Typography>
          <Highlighter
            codeString={`
              // Notification.js
              return ReactDOM.createPortal(
                <div className={cssClasses}>
                  <h2>{title}</h2>
                  <p>{message}</p>
                </div>,
                document.getElementById('notifications')
              )
            `}
          />
          <Typography paragraph>
            After that, we conditionally render the notification upon clicking
            the button:
          </Typography>
          <Highlighter
            codeString={`
              {notification && (
                <Notification
                  status={notification.status}
                  title={notification.title}
                  message={notification.message}
                />
              )}
            `}
          />
        </Grid>
      </Grid>
    </Container>
  )
}
