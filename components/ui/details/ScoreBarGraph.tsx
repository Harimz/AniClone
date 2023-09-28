// ScoreBarGraph.tsx
import React from "react";

interface ScoreData {
  score: number;
  votes: number;
  percentage: number;
}

interface ScoreBarGraphProps {
  scores: ScoreData[];
}

const ScoreBarGraph = ({ scores }: ScoreBarGraphProps) => {
  const maxVotes = Math.max(...scores.map((s) => s.votes));

  // Helper function to calculate color based on vote percentage
  const getColor = (votes: number) => {
    const percentage = votes / maxVotes;
    const red = 255 * (1 - percentage);
    const green = 255 * percentage;
    return `rgb(${Math.round(red)}, ${Math.round(green)}, 0)`;
  };

  return (
    <div className="h-full bg-white dark:bg-blue-400 p-[1rem] rounded-sm flex justify-between items-end">
      {scores.map((scoreData) => (
        <div key={scoreData.score} className="flex flex-col items-center">
          <div
            style={{
              height: `${(scoreData.votes / maxVotes) * 100}%`,
              backgroundColor: getColor(scoreData.votes),
            }}
            className="w-4 mb-2"
          ></div>
          <span>{scoreData.score}</span>
        </div>
      ))}
    </div>
  );
};

export default ScoreBarGraph;
