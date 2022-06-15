import { createSlice } from '@reduxjs/toolkit'
import { AppState } from '../app/store'

const initialState = 'English'

export const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    setLanguage: (state, action) => {
      return action.payload
    },
  },
})

export const { setLanguage } = languageSlice.actions

export const language = (state: AppState) => state.language

export default languageSlice.reducer
