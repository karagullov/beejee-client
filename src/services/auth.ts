import { APIResponse, LoginRes } from "../types";
import { api } from "./api";

export const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<LoginRes, { username: string; password: string }>({
      query: (body) => ({
        url: "/auth/login",
        method: "POST",
        body,
      }),
      transformResponse: (response: APIResponse<LoginRes>) => response.result,
    }),
    logout: builder.mutation<null, void>({
      query: () => ({
        url: "/auth/logout",
        method: "GET",
      }),
    }),
  }),
});

export const { useLoginMutation, useLogoutMutation } = authApi;
