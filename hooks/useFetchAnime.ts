import React, { useEffect, useState } from "react";
import {
  useGetAnimeDetailsQuery,
  useGetAnimeRecommendationsQuery,
  useGetAnimeStaffQuery,
  useGetAnimeEpisodesQuery,
  useGetAnimeStatisticsQuery,
  useGetAnimeCharactersQuery,
  useGetAnimeReviewsQuery,
} from "@/redux/features/animeApiSlice";
import {
  AnimeDetailsData,
  AnimeCharactersData,
  AnimeStaffData,
  AnimeStatsData,
  AnimeRecommendationsData,
  AnimeEpisodesData,
  AnimeReviewsData,
} from "@/types";

type QueryTypeMap = {
  animeDetails: AnimeDetailsData;
  characters: AnimeCharactersData;
  staff: AnimeStaffData;
  stats: AnimeStatsData;
  recommendations: AnimeRecommendationsData;
  episodes: AnimeEpisodesData;
  reviews: AnimeReviewsData;
};

const queryHooksMap = {
  animeDetails: useGetAnimeDetailsQuery,
  characters: useGetAnimeCharactersQuery,
  staff: useGetAnimeStaffQuery,
  stats: useGetAnimeStatisticsQuery,
  recommendations: useGetAnimeRecommendationsQuery,
  episodes: useGetAnimeEpisodesQuery,
  reviews: useGetAnimeReviewsQuery,
};

const useFetchAnimeData = <T extends keyof QueryTypeMap>(
  type: T,
  delay = 0,
  id: number
): [data: QueryTypeMap[T] | null, isLoading: boolean] => {
  const [data, setData] = useState<QueryTypeMap[T] | any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [retryCount, setRetryCount] = useState(0);

  const maxRetries = 6;
  const response = queryHooksMap[type](id);

  const checkForRateLimitError = (error: any) => {
    return error && error.message === "Rate Limited";
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setTimeout(() => {
        if (response && response.data) {
          setData(response.data);
          setRetryCount(0);
        } else if (
          checkForRateLimitError(response.error) &&
          retryCount < maxRetries
        ) {
          setRetryCount((prevCount) => prevCount + 1);
          fetchData();
        } else {
          setRetryCount(0);
        }
        setIsLoading(false);
      }, delay + retryCount * 1000);
    };
    fetchData();
  }, [delay, response, retryCount]);

  return [data, isLoading];
};

export default useFetchAnimeData;
