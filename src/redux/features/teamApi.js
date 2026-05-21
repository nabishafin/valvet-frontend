import { baseApi } from "../services/api";

export const teamApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getTeams: builder.query({
      query: () => "/team",
      providesTags: ["Team"],
    }),
  }),
});

export const { useGetTeamsQuery } = teamApi;
