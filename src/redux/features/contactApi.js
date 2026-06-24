import { baseApi } from "../services/api";

export const contactApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    sendContact: builder.mutation({
      query: (data) => ({
        url: "/contact",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Inquiry"],
    }),
  }),
});

export const { useSendContactMutation } = contactApi;
