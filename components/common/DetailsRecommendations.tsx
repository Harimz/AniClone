"use client";

import React, { useState } from "react";
import { AnimeRecommendationsData } from "@/types";
import { RecommendedCard } from "../ui";

interface Props {
  data: AnimeRecommendationsData | null;
}

const DetailsRecommendations = ({ data }: Props) => {
  const [viewAll, setViewAll] = useState(false);
  const recommended = viewAll ? data?.data : data?.data.slice(0, 14);

  return (
    <>
      <div className="flex justify-between font-semibold text-gray-400 mb-[1rem]">
        <h2>Recommendations</h2>

        <h2
          className="cursor-pointer"
          onClick={() => setViewAll((state) => !state)}
        >
          {viewAll ? "View Less" : "View All"}
        </h2>
      </div>

      <div className="grid grid-cols-3 md:grid-cols-7 gap-[1.5rem]">
        {recommended?.map((entry) => (
          <RecommendedCard animeEntry={entry} />
        ))}
      </div>
    </>
  );
};

export default DetailsRecommendations;
