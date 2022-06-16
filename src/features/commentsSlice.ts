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

const commentsSlice = createSlice({
  name: 'comments',
  initialState: commentsAdapter.getInitialState(),
  reducers: {
    commentAdd: commentsAdapter.addOne,
    commentsAdd: commentsAdapter.addMany,
    commentSet: commentsAdapter.setOne,
    commentsSet(state, action: PayloadAction<Comment[]>) {
      commentsAdapter.setAll(state, action.payload)
    },
    commentUpsert: commentsAdapter.upsertOne,
    commentsUpsert: commentsAdapter.upsertMany,
    commentRemove: commentsAdapter.removeOne,
    commentsRemoveAll: commentsAdapter.removeAll,
  },
})

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
