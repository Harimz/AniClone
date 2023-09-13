"use client";

import { DetailsHero } from "@/components/common";
import {
  useGetAnimeDetailsQuery,
  useGetAnimePicturesQuery,
} from "@/redux/features/animeApiSlice";
import { Anime } from "@/types";
import Image from "next/image";
import React from "react";

const AnimeDetailsPage = ({ params }: { params: { slug: string } }) => {
  const animeId = params.slug[0];
  const { data, isLoading, error } = useGetAnimeDetailsQuery(animeId);
  const {
    data: picturesData,
    isLoading: picturesIsLoading,
    error: picturesError,
  } = useGetAnimePicturesQuery(animeId);

  if (isLoading || picturesIsLoading) {
    return "Loading...";
  }

  return (
    <div>
      <div className="relative h-[15rem] md:h-[20rem]">
        <div className="absolute  inset-0 bg-black opacity-20"></div>
      </div>

      <div className="">
        <DetailsHero
          title={data?.data.title}
          image={data?.data.images.jpg.large_image_url}
          synopsis={data?.data.synopsis}
        />
      </div>
    </div>
  );
};

export default AnimeDetailsPage;
