import { Fragment, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../src/app/hooks'
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
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Jumbotron from '../../src/components/ui/jumbotron'
import CommentTable from '../../src/components/redux/comment-table'
import { Button } from '@material-ui/core'
import EntityAdapterTutorial from '../../src/components/tutorials/entity-adapter'

export default function EntityAdapterExample() {
  const dispatch = useAppDispatch()
  const fetchedComments = useAppSelector((state: AppState) => state.comments)
  const commentSelector = commentsAdapter.getSelectors<AppState>(
    (state) => state.comments
  )
  const commentsArray = commentSelector.selectAll(store.getState())

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

  const setFirstComment = {
    postId: 1,
    id: 1,
    name: 'First Comment',
    email: 'myemail.io',
    body: 'First comment has been set.',
  }

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

  return (
    <Fragment>
      <Container maxWidth='md' component='main'>
        {/* @ts-ignore */}
        <Grid container align='center'>
          {/* @ts-ignore */}
          <Grid item xs={12} align='center'>
            <Jumbotron
              title='Entity Adapter'
              summary={`In this example, we will be using Redux Toolkit to create an entity adapter.
              This entity adapter will generate a set of prebuilt reducers and selectors for performing
              CRUD operations on a normalized state structure. This API was ported from the @ngrx/entity
              library created by the NgRx maintainers.`}
            />
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth='xl' component='main'>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Typography paragraph variant='body2'>
              The following CRUD functions are generated upon creating an entity
              adapter. These reducer functions can be used to add, update, and
              remove entity instances from an entity state object:
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Button
              variant='outlined'
              size='small'
              onClick={() => dispatch(commentsAdd(defaultComments))}
            >
              Add Comments
            </Button>
            <Button
              variant='outlined'
              size='small'
              onClick={() => dispatch(commentAdd(defaultComments[0]))}
            >
              Add Comment
            </Button>
            <Button
              variant='outlined'
              size='small'
              onClick={() => dispatch(commentsSet(setComments))}
            >
              Set Comments
            </Button>
            <Button
              variant='outlined'
              size='small'
              onClick={() => dispatch(commentSet(setFirstComment))}
            >
              Set First Comment
            </Button>
            <Button
              variant='outlined'
              size='small'
              onClick={() => dispatch(commentsUpsert(upsertComments))}
            >
              Upsert Comments
            </Button>
            <Button
              variant='outlined'
              size='small'
              onClick={() => dispatch(commentUpsert(upsertFirstComment))}
            >
              Upsert First Comment
            </Button>
            <Button
              variant='outlined'
              size='small'
              onClick={() => dispatch(commentRemove(2))}
            >
              Remove Second Comment
            </Button>
            <Button
              variant='outlined'
              size='small'
              onClick={() => dispatch(commentsRemoveAll())}
            >
              Remove All
            </Button>
          </Grid>
          <Grid item xs={12}>
            <CommentTable data={commentsArray} />
          </Grid>
        </Grid>
      </Container>
      <EntityAdapterTutorial />
    </Fragment>
  )
}
