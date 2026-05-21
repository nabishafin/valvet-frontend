import { baseApi } from "../services/api";

export const trackApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    trackPage: builder.mutation({
      query: (data) => ({
        url: "/track",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useTrackPageMutation } = trackApi;
