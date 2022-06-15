import { Fragment, useEffect } from 'react'
import { getUsers, users } from '../../src/features/usersSlice'
import { useAppDispatch, useAppSelector } from '../../src/app/hooks'
import Container from '@material-ui/core/Container'
import UserTable from '../../src/components/redux/user-table'
import { CircularProgress, Grid } from '@material-ui/core'
import Jumbotron from '../../src/components/ui/jumbotron'
import AsyncThunkTutorial from '../../src/components/tutorials/async-thunk'

export default function AsyncThunkExample() {
  const dispatch = useAppDispatch()
  const { list, status, error } = useAppSelector(users)

  useEffect(() => {
    dispatch(getUsers(5))
  }, [])

  // useEffect(() => {
  //   if (status === 'fulfilled') {
  //     console.log('we here?')
  //     console.log(list)
  //   }

  //   if (error) {
  //     console.log(list)
  //     console.log(error)
  //   }
  // }, [status])

  return (
    <Fragment>
      <Container maxWidth='md' component='main'>
        {/* @ts-ignore */}
        <Grid container align='center'>
          {/* @ts-ignore */}
          <Grid item xs={12} align='center'>
            <Jumbotron
              title='Redux Async Thunk'
              summary={`In this example, we will be using redux async thunks to dispatch thunk actions. These thunk actions will make a call to 
              our getUsers() API and the thunk will call the pending, fulfilled, and rejected statuses based on the result of the API call. We will render 
              a loading status while the request is pending, render a user table if the request is fulfilled, and render an error message if the request is rejected.`}
            />
          </Grid>
        </Grid>
      </Container>
      {status === 'pending' && (
        //@ts-ignore
        <Grid container align='center'>
          {/* @ts-ignore */}
          <Grid item xs={12} align='center'>
            {<CircularProgress />}
          </Grid>
        </Grid>
      )}
      <Container maxWidth='md' component='main'>
        {/* @ts-ignore */}
        <Grid container align='center'>
          {/* @ts-ignore */}
          <Grid item xs={12} align='center'>
            {status === 'fulfilled' && <UserTable data={list} />}
          </Grid>
          <Grid item>{error && <div>{error}</div>}</Grid>
        </Grid>
      </Container>
      <AsyncThunkTutorial />
    </Fragment>
  )
}
