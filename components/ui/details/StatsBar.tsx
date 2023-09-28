import React from "react";

interface Props {
  watchingPercentage: number;
  planToWatchPercentage: number;
  onHoldPercentage: number;
  droppedPercentage: number;
  completedPercentage: number;
}

const StatsBar = ({
  watchingPercentage,
  planToWatchPercentage,
  onHoldPercentage,
  droppedPercentage,
  completedPercentage,
}: Props) => {
  return (
    <div className="relative h-4 -ml-[1rem] -mr-[1rem] -mb-[1rem] mt-[2rem] rounded-b-lg overflow-hidden">
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
  );
};

export default StatsBar;
