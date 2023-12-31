"use client";

import { TrendingAnimeData } from "@/types";
import { Anime } from "@/types/AnimeTypes";
import React from "react";
import { TopContentCard } from "../ui";
import { AnimatePresence, motion } from "framer-motion";
import CardDisplay from "./CardDisplay";

interface Props {
  data: Anime[] | any;
}

const TopCardDisplay = ({ data }: Props) => {
  if (!data) {
    return "Loading...";
  }

  const fadeInUp = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <>
      <div className="hidden md:grid grid-flow-row gap-[1rem]">
        <AnimatePresence>
          {data.slice(0, 10).map((content: (typeof data)[0], index: number) => (
            <motion.div
              key={content.mal_id}
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              exit="hidden"
              transition={{ delay: index * 0.1, duration: 0.2 }}
            >
              <div className="flex gap-[1rem]">
                <div className="w-[2rem] flex justify-center items-center">
                  <h1>#{index + 1}</h1>
                </div>
                <TopContentCard data={content} index={index + 1} />
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      <div className="block md:hidden">
        <CardDisplay data={data} type="anime" isLoading={false} max={6} />
      </div>
    </>
  );
};

export default TopCardDisplay;
