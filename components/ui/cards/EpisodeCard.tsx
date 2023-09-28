import { AnimeEpisode } from "@/types/AnimeEpisodes";
import Image from "next/image";
import React from "react";

interface Props {
  episode: AnimeEpisode | null;
}

const EpisodeCard = ({ episode }: Props) => {
  if (!episode) {
    return;
  }

  return (
    <div className="relative h-[6.5rem]">
      <Image src={episode?.images.jpg.image_url} alt={episode.title} fill />

      <div className="absolute bg-[rgba(0,0,0,0.5)] p-[0.5rem] left-0 right-0 bottom-0">
        <p className="truncate font-thin text-sm text-white">{episode.title}</p>
      </div>
    </div>
  );
};

export default EpisodeCard;
