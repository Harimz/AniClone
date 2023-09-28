import { useGetAnimeRecommendationsQuery } from "@/redux/features/animeApiSlice";
import { AnimeRecommendations } from "@/types";
import { useState, useEffect } from "react";

const useFetchAnimeRecommendations = (delay = 0, id: number) => {
  const [data, setData] = useState<AnimeRecommendations | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [retryCount, setRetryCount] = useState(0);

  const maxRetries = 3;

  const response = useGetAnimeRecommendationsQuery(id);

  const checkForRateLimitError = (error: any) => {
    return error && error.message === "Rate Limited";
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setTimeout(async () => {
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

  return { data, isLoading };
};

export default useFetchAnimeRecommendations;
