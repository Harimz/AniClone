import {
  MangaCharactersData,
  MangaDetailsData,
  MangaRecommendationsData,
  MangaReviewsData,
  TrendingMangaResponseData,
} from "@/types";
import { Manga } from "@/types/MangaTypes";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export type GetTrendingAnimeArgs = {};

export const mangaApi = createApi({
  reducerPath: "mangaApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.jikan.moe/v4/" }),
  endpoints: (builder) => ({
    useGetTopManga: builder.query<TrendingMangaResponseData, any>({
      query: (filter) => `top/manga?filter=${filter}`,
    }),
    getMangaDetails: builder.query<MangaDetailsData, any>({
      query: (id) => `/manga/${id}/full`,
    }),
    getMangaCharacters: builder.query<MangaCharactersData, any>({
      query: (id) => `/manga/${id}/characters`,
    }),
    getMangaRecommendations: builder.query<MangaRecommendationsData, any>({
      query: (id) => `/manga/${id}/recommendations`,
    }),
    getMangaReviews: builder.query<MangaReviewsData, any>({
      query: (id) => `/manga/${id}/reviews`,
    }),
    getMangaSearchResults: builder.query({
      query: (queryString) => `/manga${queryString}`,
    }),
    getTopManhwa: builder.query<TrendingMangaResponseData, any>({
      query: (queryString) => `/top/manga?type=manhwa`,
    }),
  }),
});

export const {
  useUseGetTopMangaQuery,
  useGetMangaDetailsQuery,
  useGetMangaRecommendationsQuery,
  useGetMangaCharactersQuery,
  useGetMangaReviewsQuery,
  useGetMangaSearchResultsQuery,
  useGetTopManhwaQuery,
} = mangaApi;
