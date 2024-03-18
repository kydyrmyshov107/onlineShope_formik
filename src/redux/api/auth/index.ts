import { api as index } from "..";
const api = index.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<AUTH.PostLoginResponse, AUTH.PostLoginRequest>({
      query: (newUser) => ({
        url: "/login",
        method: "POST",
        body: newUser,
      }),
      invalidatesTags: ["auth"],
    }),
    registration: builder.mutation<
      AUTH.PostRegistrationResponse,
      AUTH.PostRegistrationRequest
    >({
      query: (newData) => ({
        url: "/users",
        method: "POST",
        body: newData,
      }),
      invalidatesTags: ["auth"],
    }),
  }),
});

export const { useLoginMutation, useRegistrationMutation } = api;
