import { MangaDetailsData } from "@/types";
import React from "react";
import { AiFillStar } from "react-icons/ai";

interface Props {
  data: MangaDetailsData | undefined;
}

const DetailsMangaSidebar = ({ data }: Props) => {
  const details = data?.data;

  return (
    <div className="mt-[2rem] w-[15rem] mb-[15rem]">
      <div className="hidden md:block">
        <div className="bg-white dark:bg-blue-400 flex px-[1rem] py-[0.75rem] mb-[1.5rem]">
          <div className="text-yellow-300 mr-[1rem]">
            <AiFillStar />
          </div>

          <p className="text-sm font-light text-gray-400">
            #{details?.popularity} Highest Rated All Time
          </p>
        </div>

        <div className="bg-white dark:bg-blue-400 flex px-[1rem] py-[0.75rem] mb-[1.5rem]">
          <div className="text-yellow-300 mr-[1rem]">
            <AiFillStar />
          </div>

          <p className="text-sm font-light text-gray-400">
            #{details?.rank} Most Popular All Time
          </p>
        </div>
      </div>

      <div className="bg-white dark:bg-blue-400 text-gray-400 p-[1rem] grid grid-flow-col gap-[3rem] auto-cols-max md:block overflow-scroll md:overflow-auto">
        <div className="md:mb-[1rem]">
          <h2>Publishing</h2>
          <p className="text-sm font-thin">
            {details?.publishing ? "Yes" : "No"}
          </p>
        </div>
        <div className="md:mb-[1rem]">
          <h2>Format</h2>
          <p className="text-sm font-thin">{details?.type}</p>
        </div>
        <div className="md:mb-[1rem]">
          <h2>Status</h2>
          <p className="text-sm font-thin">{details?.status}</p>
        </div>
        <div className="md:mb-[1rem]">
          <h2>Start Date</h2>
          <p className="text-sm font-thin">{details?.published.from}</p>
        </div>
        <div className="md:mb-[1rem]">
          <h2>Average Score</h2>
          <p className="text-sm font-thin">
            {details?.score && +details?.score * 10}%
          </p>
        </div>
        <div className="md:mb-[1rem]">
          <h2>Popularity</h2>
          <p className="text-sm font-thin">{details?.favorites}</p>
        </div>
        <div className="md:mb-[1rem]">
          <h2>Volumes</h2>
          <p className="text-sm font-thin">{details?.volumes}</p>
        </div>
        <div className="md:mb-[1rem]">
          <h2>Genres</h2>
          <div className="text-sm font-thin flex md:block gap-[.5rem]">
            {details?.genres.map((item) => (
              <p key={item.mal_id}>{item.name}</p>
            ))}
          </div>
        </div>
        <div className="md:mb-[1rem]">
          <h2>Japanese</h2>
          <p className="text-sm font-thin">{details?.title_japanese}</p>
        </div>
        <div className="md:mb-[1rem]">
          <h2>English</h2>
          <p className="text-sm font-thin">{details?.title_english}</p>
        </div>
        <div className="md:mb-[1rem]">
          <h2>Synonyms</h2>
          <div className="text-sm font-thin flex md:block gap-[.5rem]">
            {details?.title_synonyms.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsMangaSidebar;
