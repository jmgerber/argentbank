import { apiSlice } from "../../utils/api/apiSlice";

export const profileApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getUser: builder.query({
      query: () => ({
        url: 'user/profile',
        method: 'POST'
      }),
      invalidatesTags: ['User'],
    }),
    updateUser: builder.mutation({
      query: username => ({
        url: 'user/profile',
        method: 'PUT',
        body: { ...username }
      }),
      providesTags: ['User'],
    })
  })
})

export const { useGetUserQuery, useUpdateUserMutation } = profileApiSlice