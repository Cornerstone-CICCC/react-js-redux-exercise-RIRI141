// src/features/user/UserSlice.ts
import { createSlice } from '@reduxjs/toolkit'

export type UserState = {
        firstname: string
        lastname: string
        age: number
}

const initialState: UserState = {
        firstname: 'John',
        lastname: 'Doe',
        age: 25
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    incrementAge: (state) => {
      state.age += 1
    },
    decrementAge: (state) => {
      state.age -= 1
    },
    setFirstname: (state, action) => {
      state.firstname = action.payload
    },
    setLastname: (state, action) => {
      state.lastname = action.payload
    }
  }
})

export const { incrementAge,decrementAge, setFirstname, setLastname } = userSlice.actions

export default userSlice.reducer