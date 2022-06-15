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

export default function AsyncThunkTutorial() {
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
            First, we will create the async thunk:
          </Typography>
          <Highlighter
            codeString={`
              export const getUsers = createAsyncThunk<
                // Specify type of fetched data
                User[],
                // Specify type of first argument, this argument will be used to limit user data
                number,
                {
                  // Specify type of reject value
                  rejectValue: string | undefined
                }
              >('users/getUsers', async (limit, { rejectWithValue }) => {
                try {
                  // Create a request
                  const response = await axios.get(
                    \`https://jsonplaceholder.typicode.com/users?_limit=\${limit}\`
                  )

                  // return users array
                  return response.data
                } catch (error) {
                  if (axios.isAxiosError(error)) {
                    return rejectWithValue(error.message)
                  } else {
                    const err = error as Error
                    return rejectWithValue(err.message)
                  }
                }
              })
            `}
          />
          <Typography paragraph>
            Then we will create a slice containing reducers for handling the
            loading state:
          </Typography>
          <Highlighter
            codeString={`
              // Create initial state
              const initialState: UserState = {
                // holds user data
                list: [],
                // holds status of request (pending, fulfilled, rejected)
                status: undefined,
                // holds error message
                error: undefined,
              }

              const usersSlice = createSlice({
                name: 'users',
                initialState,
                // we do not use the reducers property for async thunks
                reducers: {},
                // async thunks handlers should be placed in the extraReducers property
                extraReducers: (builder) => {
                  // when the request is pending, set status to pending
                  builder.addCase(getUsers.pending, (state) => {
                    state.list = []
                    state.status = 'pending'
                  })
                  // when the request has been fulfilled, updated status and set list to equal the payload
                  builder.addCase(getUsers.fulfilled, (state, { payload }) => {
                    state.list = payload
                    state.status = 'fulfilled'
                  })
                  // when the request has been rejected, update status and include error message
                  builder.addCase(getUsers.rejected, (state, { payload }) => {
                    state.list = []
                    state.status = 'rejected'
                    state.error = payload
                  })
                },
              })
            `}
          />
          <Typography paragraph>
            Now we can export the users value and the reducer itself:
          </Typography>
          <Highlighter
            codeString={`
              export const users = (state: AppState) => state.users
              export default usersSlice.reducer
            `}
          />
          <Typography paragraph>
            And then add the reducer to the store:
          </Typography>
          <Highlighter
            codeString={`
              import usersReducer from '../features/usersSlice'

              export function makeStore() {
                return configureStore({
                  reducer: { users: usersReducer },
                })
              }
            `}
          />
          <Typography paragraph>
            We can now use this store value from within our component:
          </Typography>
          <Highlighter
            codeString={`
              import { Fragment, useEffect } from 'react'
              import { getUsers, users } from '../../src/features/usersSlice'
              import { useAppDispatch, useAppSelector } from '../../src/app/hooks'

              export default function AsyncThunkExample() {
                const dispatch = useAppDispatch()
                const { list, status, error } = useAppSelector(users)

                useEffect(() => {
                  // limit results to 5 records
                  dispatch(getUsers(5))
                }, [])
              }
            `}
          />
          <Typography paragraph>
            We can then use the status of the request to conditionally render
            JSX. Here we are rendering a loading spinner while the request is
            pending:
          </Typography>
          <Highlighter
            codeString={`
              {status === 'pending' && (
                <Grid container align='center'>
                  <Grid item xs={12} align='center'>
                    {<CircularProgress />}
                  </Grid>
                </Grid>
              )}
            `}
          />
          <Typography paragraph>
            Here, we are rendering a table if the request status is fulfilled,
            or rendering an error message if the request has been rejected:
          </Typography>
          <Highlighter
            codeString={`
              <Container maxWidth='md' component='main'>
              <Grid container align='center'>
                <Grid item xs={12} align='center'>
                  {status === 'fulfilled' && <UserTable data={list} />}
                </Grid>
                <Grid item>{error && <div>{error}</div>}</Grid>
              </Grid>
              </Container>
            `}
          />
        </Grid>
      </Grid>
    </Container>
  )
}
