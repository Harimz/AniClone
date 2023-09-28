import { AnimeEpisodes } from "@/types";
import React from "react";
import { EpisodeCard } from "../ui";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";

interface Props {
  data: AnimeEpisodes | null;
  max?: number;
}

const DetailsEpisodes = ({ data, max }: Props) => {
  const episodes = max ? data?.data.slice(0, max) : data?.data;
  const router = useParams();

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
