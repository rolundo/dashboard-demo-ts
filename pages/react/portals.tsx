import { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import { Fragment } from 'react'
import Jumbotron from '../../src/components/ui/jumbotron'
import Notification from '../../src/components/ui/notification'
import PortalTutorial from '../../src/components/tutorials/portal'
import { NotificationType } from '../../src/types'

const useStyles = makeStyles((theme) => ({}))

export default function PortalExample() {
  const [notification, setNotification] = useState<NotificationType>()

  const handleClick = () => {
    setNotification({
      status: 'success',
      title: 'Success!',
      message: `This notification exists outside this component's DOM`,
    })

    setTimeout(() => {
      setNotification(undefined)
    }, 2000)
  }

  return (
    <Fragment>
      <Container maxWidth='md' component='main'>
        {/*@ts-ignore*/}
        <Grid container align='center'>
          {/*@ts-ignore*/}
          <Grid item xs={12} align='center'>
            <Jumbotron
              title='Portals'
              summary={`In this example, we will use React Portals to render a notification
              component outside of this component's DOM. This feature is useful for displaying
              a child component when its parent component is hidden or has a small z-index.`}
            />
          </Grid>
        </Grid>
      </Container>
      {/*@ts-ignore*/}
      <Container maxWidth='xl' component='main' align='center'>
        <Button variant='contained' color='secondary' onClick={handleClick}>
          Display a notification inside a DOM node outside of this component
        </Button>
      </Container>
      <PortalTutorial />
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
    </Fragment>
  )
}
