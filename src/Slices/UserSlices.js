import { createSlice } from '@reduxjs/toolkit'

export const UserSlices = createSlice({
  name: 'counter',
  initialState: {
    value: null,
  },
  reducers: {
  
   userData: (state, action) => {
      state.value = action.payload
    },
  },
})

export const {userData} = UserSlices.actions

export default UserSlices.reducer