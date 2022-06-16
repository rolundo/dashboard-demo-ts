import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'

import languageReducer from '../features/languageSlice'
import usersReducer from '../features/usersSlice'
import commentsReducer from '../features/commentsSlice'

export function makeStore() {
  return configureStore({
    reducer: {
      language: languageReducer,
      users: usersReducer,
      comments: commentsReducer,
    },
  })
}

const store = makeStore()

export type AppState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>

export default store
