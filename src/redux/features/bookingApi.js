import { baseApi } from "../services/api";

export const bookingApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    instantBooking: builder.mutation({
      query: (bookingData) => ({
        url: "/instant-booking",
        method: "POST",
        body: bookingData,
      }),
      invalidatesTags: ["Booking"],
    }),
  }),
});

export const { useInstantBookingMutation } = bookingApi;
