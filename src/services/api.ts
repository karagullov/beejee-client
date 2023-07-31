import { createApi, fetchBaseQuery, retry } from "@reduxjs/toolkit/query/react";

const API_BASE_URL = "https://beejee-nk29.onrender.com";

const baseQuery = fetchBaseQuery({
  baseUrl: API_BASE_URL,
  credentials: "include",
});

const baseQueryWithRetry = retry(baseQuery, { maxRetries: 1 });

export const api = createApi({
  baseQuery: baseQueryWithRetry,
  tagTypes: ["Todo", "User"],
  endpoints: () => ({}),
});
