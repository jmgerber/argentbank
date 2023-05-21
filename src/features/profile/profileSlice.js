import { createSlice } from "@reduxjs/toolkit";

const profileSlice = createSlice({
  name: 'profile',
  initialState: { firstName: null, lastName: null},
  reducers: {
    setUserName: (state, action) => {
      const data = action.payload
      state.firstName = data?.body.firstName
      state.lastName = data?.body.lastName
    },
  },
})

// Exporting actions
export const { setUserName } = profileSlice.actions

export default profileSlice.reducer

// Exporting selectors
export const selectUserFirstname = (state) => state.profile.firstName
export const selectUserLastname = (state) => state.profile.lastName