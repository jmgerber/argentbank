import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: 'auth',
  initialState: { user: null, token: null},
  reducers: {
    setCredentials: (state, action) => {
      const { body, email } = action.payload
      state.user = email
      state.token = body.token
    },
    logOut: (state, action) => {
      state.user = null
      state.token = null
    }
  },
})

// Exporting actions
export const { setCredentials, logOut } = authSlice.actions

export default authSlice.reducer

// Exporting selectors
export const selectCurrentUser = (state) => state.auth.user
export const selectCurrentToken = (state) => state.auth.token