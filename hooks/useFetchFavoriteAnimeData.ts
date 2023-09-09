import { useGetTopAnimeByFilterQuery } from "@/redux/features/animeApiSlice";
import { useState, useEffect } from "react";

const useFetchFavoriteAnimeData = (delay = 0) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const response = useGetTopAnimeByFilterQuery("favorite");

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setTimeout(() => {
        if (response && response.data) {
          setData(response.data);
        }
        setIsLoading(false);
      }, delay);
    };
    fetchData();
  }, [delay, response]);

  return { data, isLoading };
};

export default useFetchFavoriteAnimeData;
