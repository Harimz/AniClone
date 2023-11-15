"use client";
import { useFetchTopMangaData } from "@/hooks";
import React from "react";
import CardDisplay from "../common/CardDisplay";
import { TopCardDisplay } from "../common";

const DefaultMangaView = () => {
  const { data: airingData, isLoading: airingIsLoading } = useFetchTopMangaData(
    0,
    "publishing"
  );
  const { data: popData, isLoading: popIsLoading } = useFetchTopMangaData(
    1000,
    "bypopularity"
  );
  const { data: favoriteData } = useFetchTopMangaData(2000, "favorite");

  return (
    <div className="max-w-[90rem] w-[90%] mx-auto">
      <div className="mb-[4rem]">
        <div className="flex justify-between mb-[1rem]">
          <h2 className="text-gray-450 font-semibold text-lg">
            POPULAR THIS SEASON
          </h2>
          <p className="text-gray-450 text-sm">View All</p>
        </div>
        <CardDisplay
          data={popData?.data}
          max={6}
          isLoading={popIsLoading}
          type="manga"
        />
      </div>

      <div className="mb-[4rem]">
        <div className="flex justify-between mb-[1rem]">
          <h2 className="text-gray-450 font-semibold text-lg">Trending Now</h2>
          <p className="text-gray-450 text-sm">View All</p>
        </div>
        <CardDisplay
          data={airingData?.data}
          max={6}
          isLoading={airingIsLoading}
          type="manga"
        />
      </div>

      <div className="mb-[4rem]">
        <div className="flex justify-between mb-[1rem]">
          <h2 className="text-gray-450 font-semibold text-lg">
            ALL TIME POPULAR
          </h2>
          <p className="text-gray-450 text-sm">View All</p>
        </div>
        <TopCardDisplay data={favoriteData?.data} />
      </div>
    </div>
  );
};

export default DefaultMangaView;
