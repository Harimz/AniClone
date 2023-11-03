import type { Anime } from "@/types/AnimeTrending";
import Image from "next/image";
import React from "react";
import { GenreCard } from "..";

interface Props {
  data: Anime;
  index: number;
}

const TopAnimeCard = ({ data, index }: Props) => {
  const title = data.title.replace(/\s+/g, "-");

  console.log(data.members);
  console.log(data.score);

  return (
    <div className="bg-white dark:bg-blue-400 text-gray-500 dark:text-gray-400 flex flex-1 p-[0.75rem] justify-between">
      <div className="flex gap-[1rem]">
        <div className="relative w-[2.5rem] h-[3.5rem]">
          <Image
            src={data?.images.jpg.large_image_url || ""}
            alt={data?.title}
            fill
          />
        </div>

        <div className="flex flex-col justify-center">
          <h2 className="text-sm mb-[0.5rem]">{data.title}</h2>
          <div className="flex gap-[0.5rem]">
            {data.genres.map((genre) => (
              <GenreCard title={genre.name} key={genre.mal_id} color={index} />
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-[repeat(3,85px)] gap-[3rem] text-[0.75rem]">
        <div className="">
          <h2>{data.score}%</h2>
          <p className="font-thin">{data.members}</p>
        </div>
        <div className="">
          <h2>{data.type}</h2>
          <p className="font-thin">{data.duration}</p>
        </div>
        <div className="">
          <h2>{data.season}</h2>
          <p className="font-thin">{data.status}</p>
        </div>
      </div>
    </div>
  );
};

export default TopAnimeCard;
