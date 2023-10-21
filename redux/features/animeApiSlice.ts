import {
  AnimeCharactersData,
  AnimeDetailsData,
  AnimeEpisodesData,
  AnimeRecommendationsData,
  AnimeStaffData,
  AnimeStatsData,
  TrendingAnimeData,
} from "@/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export type GetTrendingAnimeArgs = {};

export const animeApi = createApi({
  reducerPath: "animeApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.jikan.moe/v4/" }),
  endpoints: (builder) => ({
    getTopAnimeByFilter: builder.query<TrendingAnimeData, GetTrendingAnimeArgs>(
      {
        query: (filter) => `top/anime?filter=${filter}`,
      }
    ),
    getAnimeDetails: builder.query<AnimeDetailsData, any>({
      query: (id) => `/anime/${id}/full`,
    }),
    getAnimeCharacters: builder.query<AnimeCharactersData, any>({
      query: (id) => `/anime/${id}/characters`,
    }),
    getAnimeStaff: builder.query<AnimeStaffData, any>({
      query: (id) => `/anime/${id}/staff`,
    }),
    getAnimeStatistics: builder.query<AnimeStatsData, any>({
      query: (id) => `/anime/${id}/statistics`,
    }),
    getAnimeEpisodes: builder.query<AnimeEpisodesData, any>({
      query: (id) => `/anime/${id}/videos/episodes`,
    }),
    getAnimeRecommendations: builder.query<AnimeRecommendationsData, any>({
      query: (id) => `/anime/${id}/recommendations`,
    }),
    getAnimeReviews: builder.query({
      query: (id) => `/anime/${id}/reviews`,
    }),
  }),
});

export const {
  useGetTopAnimeByFilterQuery,
  useGetAnimeDetailsQuery,
  useGetAnimeCharactersQuery,
  useGetAnimeStaffQuery,
  useGetAnimeStatisticsQuery,
  useGetAnimeEpisodesQuery,
  useGetAnimeRecommendationsQuery,
  useGetAnimeReviewsQuery,
} = animeApi;
