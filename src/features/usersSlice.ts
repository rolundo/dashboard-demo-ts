import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import axios, { AxiosError } from 'axios'
import { AppState } from '../app/store'
import { User, UserState } from '../types'

const initialState: UserState = {
  list: [],
  status: undefined,
  error: undefined,
}

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
      `https://jsonplaceholder.typicode.com/users?_limit=${limit}`
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

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUsers.pending, (state) => {
      state.list = []
      state.status = 'pending'
    })
    builder.addCase(getUsers.fulfilled, (state, { payload }) => {
      state.list = payload
      state.status = 'fulfilled'
    })
    builder.addCase(getUsers.rejected, (state, { payload }) => {
      state.list = []
      state.status = 'rejected'
      state.error = payload
    })
  },
})

export const users = (state: AppState) => state.users

export default usersSlice.reducer
