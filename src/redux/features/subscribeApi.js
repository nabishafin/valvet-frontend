import { baseApi } from "../services/api";

export const subscribeApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    subscribe: builder.mutation({
      query: (email) => ({
        url: "/subscribe",
        method: "POST",
        body: { email },
      }),
    }),
  }),
});

export const { useSubscribeMutation } = subscribeApi;
