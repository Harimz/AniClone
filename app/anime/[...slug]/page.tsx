"use client";

import {
  DetailsCharacters,
  DetailsHero,
  DetailsRelations,
  DetailsSidebar,
} from "@/components/common";
import { useFetchAnimeCharacters, useFetchAnimeStaff } from "@/hooks";
import { useGetAnimeDetailsQuery } from "@/redux/features/animeApiSlice";
import { Anime } from "@/types";
import Image from "next/image";
import React from "react";

const AnimeDetailsPage = ({ params }: { params: { slug: string } }) => {
  const animeId = params.slug[0];
  const { data, isLoading, error } = useGetAnimeDetailsQuery(animeId);
  const { data: charactersData, isLoading: charactersLoading } =
    useFetchAnimeCharacters(0, +animeId);
  const { data: staffData, isLoading: staffLoading } = useFetchAnimeStaff(
    0,
    +animeId
  );

  if (isLoading || charactersLoading || staffLoading) {
    return "Loading...";
  }

  const displayType = params.slug[2];

  return (
    <div>
      <div className="relative h-[15rem] md:h-[20rem]">
        <div className="absolute  inset-0 bg-black opacity-20"></div>
      </div>

      <DetailsHero
        title={data?.data.title}
        image={data?.data.images.jpg.large_image_url}
        synopsis={data?.data.synopsis}
      />

      <div className="max-w-[90rem] w-[90%] mx-auto md:flex gap-[2rem] ">
        <DetailsSidebar data={data} />

        {displayType == undefined && (
          <div className="mt-[2rem] flex-1">
            <DetailsRelations data={data} />
            <DetailsCharacters data={charactersData} max={6} />
          </div>
        )}
        {displayType == "watch" && <div>WATCH</div>}
        {displayType == "characters" && <div>CHARACTERS</div>}
        {displayType == "staff" && <div>STAFF</div>}
        {displayType == "reviews" && <div>REVIEWS</div>}
      </div>
    </div>
  );
};

export default AnimeDetailsPage;
