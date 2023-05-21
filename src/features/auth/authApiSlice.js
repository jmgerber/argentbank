import { apiSlice } from '../../utils/api/apiSlice'

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    login: builder.mutation({
      query: credentials => ({
        url: '/user/login',
        method: 'POST',
        body: { ...credentials }
      })
    }),
  })
})

// Hook is automatically generated
export const { useLoginMutation } = authApiSlice