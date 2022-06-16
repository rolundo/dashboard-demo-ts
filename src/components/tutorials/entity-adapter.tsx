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

export default function EntityAdapterTutorial() {
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
            {`We will begin by building our entity adapter: `}
          </Typography>
          <Highlighter
            codeString={`
              import {
                createEntityAdapter,
                createSlice,
                PayloadAction,
              } from '@reduxjs/toolkit'
              import { AppState } from '../app/store'
              
              type Comment = {
                postId: number
                id: number
                name: string
                email: string
                body: string
              }
              
              export const commentsAdapter = createEntityAdapter<Comment>({
                selectId: (comment) => comment.id,
                sortComparer: (a, b) => a.name.localeCompare(b.name),
              })
            `}
          />
          <Typography paragraph>
            After creating our entity adapter, we can use createSlice to build a
            reducer the same way we would build any reducer. The only difference
            now is that our entity adapter gives us access to prebuild reducer
            and selector functions (addOne, addMany, setOne, setMany, setAll,
            removeOne, removeMany, removeAll, updateOne, updateMany, upsertOne,
            upsertMany):
          </Typography>
          <Highlighter
            codeString={`
              const commentsSlice = createSlice({
                name: 'comments',
                initialState: commentsAdapter.getInitialState(),
                reducers: {
                  commentAdd: commentsAdapter.addOne,
                  commentsAdd: commentsAdapter.addMany,
                  commentSet: commentsAdapter.setOne,
                  commentsSet: commentsAdapter.setAll,
                  commentUpsert: commentsAdapter.upsertOne,
                  commentsUpsert: commentsAdapter.upsertMany,
                  commentRemove: commentsAdapter.removeOne,
                  commentsRemoveAll: commentsAdapter.removeAll,
                },
              })
            `}
          />
          <Typography paragraph>
            We can now export all of these actions along with the state and the
            reducer itself:
          </Typography>
          <Highlighter
            codeString={`
              export const comments = (state: AppState) => state.comments
              export const {
                commentAdd,
                commentsAdd,
                commentSet,
                commentsSet,
                commentUpsert,
                commentsUpsert,
                commentRemove,
                commentsRemoveAll,
              } = commentsSlice.actions
              export default commentsSlice.reducer
            `}
          />
          <Typography paragraph>
            We can now add this reducer to our store:
          </Typography>
          <Highlighter
            codeString={`
              import commentsReducer from '../features/commentsSlice'

              export function makeStore() {
                return configureStore({
                  reducer: {
                    comments: commentsReducer,
                  },
                })
              }
            `}
          />
          <Typography paragraph>
            We can now access these store values and prebuilt actions/selectors
            from within our other components:
          </Typography>
          <Highlighter
            codeString={`
              import { useAppDispatch } from '../../src/app/hooks'
              import store, { AppState } from '../../src/app/store'
              import {
                commentsAdapter,
                commentAdd,
                commentsSet,
                commentRemove,
                commentsRemoveAll,
                commentSet,
                commentsAdd,
                commentsUpsert,
                commentUpsert,
              } from '../../src/features/commentsSlice'

              export default function EntityAdapterExample() {
                const dispatch = useAppDispatch()
                // Used to select the comments value from the store
                const commentSelector = commentsAdapter.getSelectors<AppState>(
                  (state) => state.comments
                )
                // stores the current comments
                const commentsArray = commentSelector.selectAll(store.getState())
              }
            `}
          />
          <Typography paragraph>
            The following actions will add one or multiple comments to the
            store. If a comment containing the same ID already exists, then
            these actions will do nothing:
          </Typography>
          <Highlighter
            codeString={`
              const defaultComments = [
                {
                  postId: 1,
                  id: 1,
                  name: 'First Comment',
                  email: 'myemail.io',
                  body: 'First comment has been added.',
                },
            
                {
                  postId: 1,
                  id: 2,
                  name: 'Second Comment',
                  email: 'youremail.io',
                  body: 'Second comment has been added.',
                },
              ]

              dispatch(commentsAdd(defaultComments))

              dispatch(commentAdd(defaultComments[0]))
            `}
          />
          <Typography paragraph>
            The following actions will set one or multiple comments in the
            store. These actions will completely replace the old entities with
            new ones. These actions will also get rid of any properties on the
            entities that are not present in the new version of said entities:
          </Typography>
          <Highlighter
            codeString={`
              const setComments = [
                {
                  postId: 1,
                  id: 1,
                  name: 'First Comment',
                  email: 'myemail.io',
                  body: 'First comment has been set.',
                },
            
                {
                  postId: 1,
                  id: 2,
                  name: 'Second Comment',
                  email: 'youremail.io',
                  body: 'Second comment has been set.',
                },
              ]

              dispatch(commentsSet(setComments))

              dispatch(commentSet(setFirstComment))
            `}
          />
          <Typography paragraph>
            The following actions will upsert one or multiple comments in the
            store. These actions will do a shallow copy to merge the old and new
            entities overwriting existing values, adding any that were not there
            and not touching properties not provided in the new entity.
          </Typography>
          <Highlighter
            codeString={`
              const upsertComments = [
                {
                  postId: 1,
                  id: 1,
                  name: 'First Comment',
                  email: 'myemail.io',
                  body: 'First comment has been upserted.',
                },
            
                {
                  postId: 1,
                  id: 2,
                  name: 'Second Comment',
                  email: 'youremail.io',
                  body: 'Second comment has been upserted.',
                },
              ]
            
              const upsertFirstComment = {
                postId: 1,
                id: 1,
                name: 'First Comment',
                email: 'myemail.io',
                body: 'First comment has been upserted.',
              }

              dispatch(commentsUpsert(upsertComments))

              dispatch(commentUpsert(upsertFirstComment))
            `}
          />
          <Typography paragraph>
            The following functions will remove one or multiple comments in the
            store:
          </Typography>
          <Highlighter
            codeString={`
              dispatch(commentRemove(2))

              dispatch(commentsRemoveAll())
            `}
          />
        </Grid>
      </Grid>
    </Container>
  )
}
