import { AnimeEpisode } from "@/types/AnimeEpisodes";
import Image from "next/image";
import React from "react";

interface Props {
  episode: AnimeEpisode | null;
}

const EpisodeCard = ({ episode }: Props) => {
  console.log(episode);

  if (!episode) {
    return;
  }

  return (
    <div className="relative h-[6.5rem]">
      <Image src={episode?.images.jpg.image_url} alt={episode.title} fill />
    </div>
  );
};

export default EpisodeCard;
