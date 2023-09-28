"use client";

import {
  DetailsCharacters,
  DetailsEpisodes,
  DetailsHero,
  DetailsRelations,
  DetailsSidebar,
  DetailsStaff,
  DetailsStats,
} from "@/components/common";
import DetailsRecommendations from "@/components/common/DetailsRecommendations";
import {
  useFetchAnimeCharacters,
  useFetchAnimeEpisodes,
  useFetchAnimeRecommendations,
  useFetchAnimeStaff,
  useFetchAnimeStats,
} from "@/hooks";
import { useGetAnimeDetailsQuery } from "@/redux/features/animeApiSlice";
import React from "react";

const AnimeDetailsPage = ({ params }: { params: { slug: string } }) => {
  const animeId = params.slug[0];
  const { data, isLoading, error } = useGetAnimeDetailsQuery(animeId);
  const { data: charactersData, isLoading: charactersLoading } =
    useFetchAnimeCharacters(2000, +animeId);
  const { data: staffData, isLoading: staffLoading } = useFetchAnimeStaff(
    2000,
    +animeId
  );
  const { data: statsData, isLoading: statsLoading } = useFetchAnimeStats(
    2000,
    +animeId
  );
  const { data: episodesData, isLoading: episodesLoading } =
    useFetchAnimeEpisodes(2600, +animeId);

  const { data: recData, isLoading: recLoading } = useFetchAnimeRecommendations(
    3200,
    +animeId
  );

  if (
    isLoading ||
    charactersLoading ||
    staffLoading ||
    statsLoading ||
    episodesLoading ||
    recLoading
  ) {
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
            <DetailsStaff data={staffData} max={3} />
            <DetailsStats data={statsData} />
            <DetailsEpisodes data={episodesData} max={4} />
            <DetailsRecommendations data={recData} />
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
