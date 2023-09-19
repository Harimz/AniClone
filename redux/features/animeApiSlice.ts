import {
  TrendingAnimeResponse,
  Anime,
  AnimePicturesResponse,
  AnimeCharacterData,
  AnimeStaffData,
} from "@/types";
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
    getAnimeDetails: builder.query<Anime, any>({
      query: (id) => `/anime/${id}/full`,
    }),
    getAnimeCharacters: builder.query<AnimeCharacterData, any>({
      query: (id) => `/anime/${id}/characters`,
    }),
    getAnimeStaff: builder.query<AnimeStaffData, any>({
      query: (id) => `/anime/${id}/staff`,
    }),
    getAnimeStatistics: builder.query<Anime, any>({
      query: (id) => `/anime/${id}/full`,
    }),
    getAnimeReviews: builder.query<Anime, any>({
      query: (id) => `/anime/${id}/full`,
    }),
    getAnimeEpisodes: builder.query<Anime, any>({
      query: (id) => `/anime/${id}/full`,
    }),
  }),
});

export const {
  useGetTopAnimeByFilterQuery,
  useGetAnimeDetailsQuery,
  useGetAnimeCharactersQuery,
  useGetAnimeStaffQuery,
} = animeApi;
