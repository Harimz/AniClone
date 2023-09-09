import { Anime } from "@/types/animeTypes";
import React from "react";
import { ContentCard, Spinner } from "../ui";

interface Props {
  data: Anime[] | undefined;
  max?: number;
  isLoading: boolean;
}

const CardDisplay = ({ data, max, isLoading }: Props) => {
  if (isLoading || data === undefined) {
    return (
      <div className="flex items-center justify-center w-[100%]">
        <Spinner />
      </div>
    );
  }

  let displayData = [];

  if (max) {
    displayData = data.slice(0, max);
  } else {
    displayData = data;
  }

  return (
    <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-2 sm:gap-x-4 gap-y-8">
      {displayData.map((item) => (
        <ContentCard key={item.mal_id} data={item} />
      ))}
    </div>
  );
};

export default CardDisplay;
