import { AnimeEpisodesData } from "@/types";
import React from "react";
import { EpisodeCard } from "../ui";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";

interface Props {
  data: AnimeEpisodesData | undefined;
  max?: number;
}

const DetailsEpisodes = ({ data, max }: Props) => {
  const episodes = data?.data;

  if (!episodes) {
    return "Loading...";
  }

  return (
    <>
      {max && <h2 className="font-semibold text-gray-400 mb-[1rem]">Watch</h2>}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-[2rem] auto-rows-min mb-[3rem]">
        {episodes?.map((episode) => (
          <EpisodeCard key={episode.mal_id} episode={episode} />
        ))}
      </div>
    </>
  );
};

export default DetailsEpisodes;
