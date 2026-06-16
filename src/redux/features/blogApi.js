import { baseApi } from "../services/api";

export const blogApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getBlogs: builder.query({
      query: ({ page = 1, limit = 9, search = "", category = "" } = {}) => {
        const params = new URLSearchParams({ page, limit });
        if (search) params.set("search", search);
        if (category) params.set("category", category);
        return `/blogs?${params.toString()}`;
      },
      providesTags: ["Blog"],
    }),
    getBlogBySlug: builder.query({
      query: (slug) => `/blogs/${slug}`,
      providesTags: (result, error, slug) => [{ type: "Blog", id: slug }],
    }),
  }),
});

export const { useGetBlogsQuery, useGetBlogBySlugQuery } = blogApi;
