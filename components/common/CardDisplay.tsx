import React from "react";
import { Anime } from "@/types/AnimeTypes";
import { ContentCard, Spinner } from "../ui";
import { motion, AnimatePresence } from "framer-motion";
import { Manga } from "@/types/MangaTypes";
import TrendingAnimeResponseData from "@/types/AnimeTrending";
import { TrendingMangaResponseData } from "@/types";

interface Props {
  data: Anime[] | Manga[] | undefined;
  max?: number;
  isLoading: boolean;
  type: string;
}

const CardDisplay = ({ data, max, isLoading, type }: Props) => {
  if (isLoading || data === undefined) {
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

  let displayData = [];

  if (max) {
    displayData = data.slice(0, max);
  } else {
    displayData = data;
  }

  return (
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
  );
};

export default CardDisplay;
