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

  console.log(episode);

  return (
    <div className="relative h-[6.5rem]">
      <Image
        src={episode?.images.jpg.image_url || "/images/NoPhotoAvailable.png"}
        alt={episode.title}
        fill
      />
      <div></div>
    </div>
  );
};

export default EpisodeCard;
