import { baseApi } from "../services/api";

export const pricingApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getPricing: builder.query({
      query: () => "/pricing",
      providesTags: ["Pricing"],
    }),
  }),
});

export const { useGetPricingQuery } = pricingApi;
