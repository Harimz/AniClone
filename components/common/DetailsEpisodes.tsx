"use client";

import React from "react";
import { EpisodeCard } from "../ui";
import { useFetchAnimeData } from "@/hooks";

interface Props {
  id: number;
}

const DetailsEpisodes = ({ id }: Props) => {
  const [episodes] = useFetchAnimeData("episodes", 0, id);

  if (!episodes) {
    return "Loading...";
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem] auto-rows-min mb-[3rem] mt-[2rem] ">
      {episodes.data.length != 0 ? (
        episodes?.data.map((episode) => (
          <EpisodeCard key={episode.mal_id} episode={episode} />
        ))
      ) : (
        <div>
          <h1>No Episodes Found</h1>
        </div>
      )}
    </div>
  );
};

export default DetailsEpisodes;
