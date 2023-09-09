"use client";

import { Hero } from "@/components/common";
import CardDisplay from "@/components/common/CardDisplay";
import { Spinner } from "@/components/ui";
import {
  useFetchAiringAnimeData,
  useFetchFavoriteAnimeData,
  useFetchPopAnimeData,
  useFetchUpcomingAnimeData,
} from "@/hooks";
import {
  GetTrendingAnimeArgs,
  useGetTopAnimeByFilterQuery,
} from "@/redux/features/animeApiSlice";
import { TrendingAnimeResponse } from "@/types";

export default function Home() {
  const { data: airingData, isLoading: airingIsLoading } =
    useFetchAiringAnimeData();
  const { data: popData, isLoading: popIsLoading } = useFetchPopAnimeData(400);
  const { data: upcomingData, isLoading: upcomingIsLoading } =
    useFetchUpcomingAnimeData(800);
  const { data: favoriteData, isLoading: favoriteIsLoading } =
    useFetchFavoriteAnimeData(1200);

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
          />
        </div>

        <div className="mb-[4rem]">
          <div className="flex justify-between mb-[1rem]">
            <h2 className="text-gray-450 font-semibold text-lg">
              POPULAR THIS SEASON
            </h2>
            <p className="text-gray-450 text-sm">View All</p>
          </div>
          <CardDisplay data={popData?.data} max={6} isLoading={popIsLoading} />
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
          />
        </div>

        <div className="mb-[4rem]">
          <div className="flex justify-between mb-[1rem]">
            <h2 className="text-gray-450 font-semibold text-lg">
              FAN FAVORITES
            </h2>
            <p className="text-gray-450 text-sm">View All</p>
          </div>
          <CardDisplay
            data={favoriteData?.data}
            max={6}
            isLoading={favoriteIsLoading}
          />
        </div>
      </div>
    </main>
  );
}
