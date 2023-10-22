import { AnimeEpisode } from "@/types/AnimeEpisodes";
import Image from "next/image";
import React from "react";

interface Props {
  episode: AnimeEpisode | null;
}

const EpisodeCard = ({ episode }: Props) => {
  console.log(episode);

  return (
    <div className="relative h-[6.5rem]">
      <div className="relative h-[6.5rem] w-[100%] md:w-[15rem] lg:w-[23rem]">
        <Image
          src={episode?.images.jpg.image_url || "/images/NoPhotoAvailable.png"}
          alt={episode?.title || ""}
          fill
        />
      </div>
      <div className="absolute bottom-0 left-0 right-0 top-15 bg-[rgba(0,0,0,0.5)] p-[.75rem]">
        <p className="text-sm font-thin text-white">{episode?.title}</p>
      </div>
    </div>
  );
};

export default EpisodeCard;
