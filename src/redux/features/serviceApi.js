import { baseApi } from "../services/api";

export const serviceApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getServices: builder.query({
      query: () => "/services",
      providesTags: ["Service"],
    }),
    getStudios: builder.query({
      query: () => "/studios",
      providesTags: ["Studio"],
    }),
    getStudioBySlug: builder.query({
      query: (slug) => `/studios/${slug}`,
      providesTags: (result, error, slug) => [{ type: "Studio", id: slug }],
    }),
  }),
});

export const { 
  useGetServicesQuery, 
  useGetStudiosQuery, 
  useGetStudioBySlugQuery 
} = serviceApi;
