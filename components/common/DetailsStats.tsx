import { AnimeStaff } from "@/types/animeStaff";
import AnimeStatsData, { AnimeStats } from "@/types/animeStats";
import React from "react";
import { ScoreBarGraph, StatsBar } from "../ui";

interface Props {
  data: AnimeStatsData | null;
}

const DetailsStats = ({ data }: Props) => {
  const stats = data?.data;

  if (!stats) {
    return "Loading...";
  }

  const total =
    stats?.watching +
    stats?.completed +
    stats?.on_hold +
    stats?.dropped +
    stats?.plan_to_watch;

  const watchingPercentage = (stats?.watching / total) * 100;
  const completedPercentage = (stats?.completed / total) * 100;
  const onHoldPercentage = (stats?.on_hold / total) * 100;
  const droppedPercentage = (stats?.dropped / total) * 100;
  const planToWatchPercentage = (stats?.plan_to_watch / total) * 100;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-[2rem] mb-[3rem]">
      <div>
        <h2 className="mb-[1rem]">Status Distribution</h2>

        <div className="bg-white dark:bg-blue-400 p-[1rem] rounded-sm">
          <div className="grid grid-cols-4 md:grid-cols-5 auto-rows-min md:gap-[1rem]">
            <div>
              <div className="text-white mb-[0.5rem] bg-lightGreen-100 text-center font-thin text-sm rounded-md px-[1rem] py-[0.25rem]">
                Current
              </div>
              <div className="text-lightGreen-100 font-thin text-sm">
                {stats?.watching}
                <span className="text-gray-400 ml-[0.25rem]">Users</span>
              </div>
            </div>
            <div>
              <div className="text-white mb-[0.5rem] bg-blue-175 text-center font-thin text-sm rounded-md px-[1rem] py-[0.25rem]">
                Planning
              </div>
              <div className="text-blue-175 font-thin text-sm">
                {stats?.plan_to_watch}{" "}
                <span className="text-gray-400 ml-[0.25rem]">Users</span>
              </div>
            </div>
            <div>
              <div className="text-white mb-[0.5rem] bg-purple-100 text-center font-thin text-sm rounded-md px-[1rem] py-[0.25rem]">
                Paused
              </div>
              <div className="text-purple-100 font-thin text-sm">
                {stats?.on_hold}{" "}
                <span className="text-gray-400 ml-[0.25rem]">Users</span>
              </div>
            </div>
            <div>
              <div className="text-white mb-[0.5rem] bg-pink-100 text-center font-thin text-sm rounded-md px-[1rem] py-[0.25rem]">
                Dropped
              </div>
              <div className="text-pink-100 font-thin text-sm">
                {stats?.dropped}{" "}
                <span className="text-gray-400 ml-[0.25rem]">Users</span>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="text-white mb-[0.5rem] bg-pink-200 text-center font-thin text-sm rounded-md px-[1rem] py-[0.25rem]">
                Completed
              </div>
              <div className="text-pink-200 font-thin text-sm">
                {stats?.completed}{" "}
                <span className="text-gray-400 ml-[0.25rem]">Users</span>
              </div>
            </div>
          </div>

          <StatsBar
            watchingPercentage={watchingPercentage}
            planToWatchPercentage={planToWatchPercentage}
            droppedPercentage={droppedPercentage}
            completedPercentage={completedPercentage}
            onHoldPercentage={onHoldPercentage}
          />
        </div>
      </div>

      <div className="h-full">
        <h2 className="mb-[1rem]">Score Distribution</h2>

        <div className="bg-white dark:bg-blue-400 p-[1rem] rounded-sm"></div>
      </div>
    </div>
  );
};

export default DetailsStats;
