import { TrendingAnimeResponse } from "@/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export type GetTrendingAnimeArgs = {};

export const animeApi = createApi({
  reducerPath: "animeApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.jikan.moe/v4/" }),
  endpoints: (builder) => ({
    getTopAnimeByFilter: builder.query<
      TrendingAnimeResponse,
      GetTrendingAnimeArgs
    >({
      query: (filter) => `top/anime?filter=${filter}`,
    }),
  }),
});

export const { useGetTopAnimeByFilterQuery } = animeApi;
