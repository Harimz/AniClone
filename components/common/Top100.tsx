import React from "react";
import { SearchBar } from ".";
import CardDisplay from "./CardDisplay";
import { useFetchTopAnimeData, useFetchTopMangaData } from "@/hooks";
import { useGetTopAnimeByFilterQuery } from "@/redux/features/animeApiSlice";
import { useUseGetTopMangaQuery } from "@/redux/features/mangaApiSlice";
import { AnimatePresence, motion } from "framer-motion";
import { ContentCard, Spinner } from "../ui";

interface Props {
  type: string;
}

const Top100 = ({ type }: Props) => {
  const { data, isLoading } = useGetTopAnimeByFilterQuery("favorite", {
    skip: type !== "anime",
  });
  const { data: mangaData, isLoading: mangaIsLoading } = useUseGetTopMangaQuery(
    "favorite",
    { skip: type !== "manga" }
  );

  if (isLoading || mangaIsLoading) {
    return (
      <div className="flex items-center justify-center w-[100%]">
        <Spinner />
      </div>
    );
  }

  const fadeInUp = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  };

  const displayData = data?.data || mangaData?.data || [];

  return (
    <div className="mt-[5rem] max-w-[90rem] w-[90%] mx-auto">
      <SearchBar type={type} />

      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-2 sm:gap-x-4 gap-y-8">
        <AnimatePresence>
          {displayData.map((item, index) => (
            <motion.div
              key={item.mal_id}
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              exit="hidden"
              transition={{ delay: index * 0.1, duration: 0.2 }}
            >
              <ContentCard data={item} type={type} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Top100;
