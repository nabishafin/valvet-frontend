import { baseApi } from "../services/api";

export const configApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getSiteSettings: builder.query({
      query: () => "/settings",
      providesTags: ["SiteSettings"],
    }),
  }),
});

export const { useGetSiteSettingsQuery } = configApi;
