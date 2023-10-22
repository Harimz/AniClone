"use client";

import { Hero } from "@/components/common";
import CardDisplay from "@/components/common/CardDisplay";
import { useFetchAnimeData, useFetchTopAnimeData } from "@/hooks";

export default function Home() {
  const { data: airingData, isLoading: airingIsLoading } = useFetchTopAnimeData(
    0,
    "upcoming"
  );
  const { data: popData, isLoading: popIsLoading } = useFetchTopAnimeData(
    800,
    "bypopularity"
  );
  const { data: upcomingData, isLoading: upcomingIsLoading } =
    useFetchTopAnimeData(1200, "upcoming");
  const { data: favoriteData, isLoading: favoriteIsLoading } =
    useFetchTopAnimeData(1800, "favorite");

  return (
    <main>
      <Hero />

      <div className="max-w-[90rem] w-[90%] mx-auto">
        <div className="mb-[4rem]">
          <div className="flex justify-between mb-[1rem]">
            <h2 className="text-gray-450 font-semibold text-lg">
              TRENDING NOW
            </h2>
            <p className="text-gray-450 text-sm">View All</p>
          </div>
          <CardDisplay
            data={airingData?.data}
            max={6}
            isLoading={airingIsLoading}
            type="anime"
          />
        </div>

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
            type="anime"
          />
        </div>

        <div className="mb-[4rem]">
          <div className="flex justify-between mb-[1rem]">
            <h2 className="text-gray-450 font-semibold text-lg">
              UPCOMING NEXT SEASON
            </h2>
            <p className="text-gray-450 text-sm">View All</p>
          </div>
          <CardDisplay
            data={upcomingData?.data}
            max={6}
            isLoading={upcomingIsLoading}
            type="anime"
          />
        </div>

        <div className="mb-[4rem]">
          <div className="flex justify-between mb-[1rem]">
            <h2 className="text-gray-450 font-semibold text-lg">
              ALL TIME POPULAR
            </h2>
            <p className="text-gray-450 text-sm">View All</p>
          </div>
          <CardDisplay
            data={favoriteData?.data}
            max={6}
            isLoading={favoriteIsLoading}
            type="anime"
          />
        </div>

        <div className=""></div>
      </div>
    </main>
  );
}
