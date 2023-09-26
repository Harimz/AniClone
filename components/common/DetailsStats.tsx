import { AnimeStaff } from "@/types/animeStaff";
import AnimeStatsData, { AnimeStats } from "@/types/animeStats";
import React from "react";

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
    <div className="grid grid-cols-2 auto-rows-min gap-[2rem]">
      <div className="">
        <h2>Status Distribution</h2>

        <div className="bg-white dark:bg-blue-400 p-[1rem] rounded-sm">
          <div className="grid grid-cols-5 auto-rows-min gap-[1rem]">
            <div>
              <div className="text-white bg-lightGreen-100 text-center font-thin text-sm rounded-md px-[1rem] py-[0.25rem]">
                Current
              </div>
              <div>{stats?.watching}</div>
            </div>
            <div>
              <div className="text-white bg-blue-175 text-center font-thin text-sm rounded-md px-[1rem] py-[0.25rem]">
                Planning
              </div>
              <div>{stats?.plan_to_watch}</div>
            </div>
            <div>
              <div className="text-white bg-purple-100 text-center font-thin text-sm rounded-md px-[1rem] py-[0.25rem]">
                Paused
              </div>
              <div>{stats?.on_hold}</div>
            </div>
            <div>
              <div className="text-white bg-pink-100 text-center font-thin text-sm rounded-md px-[1rem] py-[0.25rem]">
                Dropped
              </div>
              <div>{stats?.dropped}</div>
            </div>
            <div>
              <div className="text-white bg-pink-200 text-center font-thin text-sm rounded-md px-[1rem] py-[0.25rem]">
                Completed
              </div>
              <div>{stats?.completed}</div>
            </div>
          </div>

          <div className="relative h-6 mt-2">
            <div
              style={{ width: `${watchingPercentage}%` }}
              className="absolute top-0 h-full bg-lightGreen-100"
            ></div>
            <div
              style={{
                width: `${planToWatchPercentage}%`,
                left: `${watchingPercentage}%`,
              }}
              className="absolute top-0 h-full bg-blue-175"
            ></div>
            <div
              style={{
                width: `${onHoldPercentage}%`,
                left: `${watchingPercentage + planToWatchPercentage}%`,
              }}
              className="absolute top-0 h-full bg-purple-100"
            ></div>
            <div
              style={{
                width: `${droppedPercentage}%`,
                left: `${
                  watchingPercentage + planToWatchPercentage + onHoldPercentage
                }%`,
              }}
              className="absolute top-0 h-full bg-pink-100"
            ></div>
            <div
              style={{
                width: `${completedPercentage}%`,
                left: `${
                  watchingPercentage +
                  planToWatchPercentage +
                  onHoldPercentage +
                  droppedPercentage
                }%`,
              }}
              className="absolute top-0 h-full bg-pink-200"
            ></div>
          </div>
        </div>
      </div>

      <div className="">
        <h2>Score Distribution</h2>

        <div className="bg-white dark:bg-blue-400 p-[2rem]"></div>
      </div>
    </div>
  );
};

export default DetailsStats;
