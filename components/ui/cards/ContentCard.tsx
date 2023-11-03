import React from "react";
import { Anime } from "@/types/AnimeTrending";
import Image from "next/image";
import Link from "next/link";

interface Props {
  data: Anime;
  type: string;
}

const ContentCard = ({ data, type }: Props) => {
  const title = data.title.replace(/\s+/g, "-");

  return (
    <Link href={`/${type}/${data.mal_id}/${title}`} passHref>
      <div className="w-full sm:max-w-[13rem] cursor-pointer rounded-md overflow-hidden">
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
    </Link>
  );
};

export default ContentCard;
