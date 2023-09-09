import React from "react";
import { Anime } from "@/types/animeTypes";
import Image from "next/image";

interface Props {
  data: Anime;
}

const ContentCard = ({ data }: Props) => {
  return (
    <div className="w-full sm:max-w-[15rem] cursor-pointer">
      <div className="relative w-full h-[10rem] sm:h-[20rem]">
        <Image
          layout="fill"
          objectFit="cover"
          src={data.images.jpg.large_image_url || ""}
          alt={data.title}
        />
      </div>
      <p className="text-gray-600 mt-[1rem] text-xs sm:text-sm font-semibold truncate ">
        {data.title}
      </p>
    </div>
  );
};

export default ContentCard;
