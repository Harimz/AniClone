import {
  useGetMangaCharactersQuery,
  useGetMangaDetailsQuery,
  useGetMangaRecommendationsQuery,
  useGetMangaReviewsQuery,
} from "@/redux/features/mangaApiSlice";
import {
  MangaCharactersData,
  MangaDetailsData,
  MangaRecommendationsData,
  MangaReviewsData,
} from "@/types";
import React, { useEffect, useState } from "react";

type QueryTypeMap = {
  mangaDetails: MangaDetailsData;
  recommendations: MangaRecommendationsData;
  characters: MangaCharactersData;
  reviews: MangaReviewsData;
};

const queryHooksMap = {
  mangaDetails: useGetMangaDetailsQuery,
  recommendations: useGetMangaRecommendationsQuery,
  characters: useGetMangaCharactersQuery,
  reviews: useGetMangaReviewsQuery,
};

const useFetchMangaData = <T extends keyof QueryTypeMap>(
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

export default useFetchMangaData;
