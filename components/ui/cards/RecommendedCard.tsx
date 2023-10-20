import { AnimeEntry } from "@/types/AnimeRecommendations";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  animeEntry: AnimeEntry | null;
}

const RecommendedCard = ({ animeEntry }: Props) => {
  const title = animeEntry?.entry.title.replace(/\s+/g, "-");

  if (!animeEntry) {
    return;
  }

  return (
    <Link href={`/anime/${animeEntry?.entry.mal_id}/${title}`} passHref>
      <div className="w-full sm:max-w-[15rem] cursor-pointer">
        <div className="relative w-full h-[10rem] sm:h-[13rem]">
          <Image
            layout="fill"
            objectFit="cover"
            src={animeEntry?.entry.images.jpg.large_image_url || ""}
            alt={animeEntry?.entry.title}
          />
        </div>
        <p className="text-gray-600 mt-[1rem] text-xs sm:text-sm font-semibold truncate ">
          {animeEntry?.entry.title}
        </p>
      </div>
    </Link>
  );
};

export default RecommendedCard;
