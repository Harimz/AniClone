"use client";

import {
  DetailsCharacters,
  DetailsEpisodes,
  DetailsEpisodesView,
  DetailsHero,
  DetailsRelations,
  DetailsSidebar,
  DetailsStaff,
  DetailsStats,
  DetailsTrailer,
} from "@/components/common";
import DetailsRecommendations from "@/components/common/DetailsRecommendations";
import { Spinner } from "@/components/ui";
import { useFetchAnimeData } from "@/hooks";
import React from "react";
import ReactPlayer from "react-player";

const AnimeDetailsPage = ({ params }: { params: { slug: string } }) => {
  const animeId = +params.slug[0];
  const [detailsData, detsLoading] = useFetchAnimeData(
    "animeDetails",
    0,
    animeId
  );
  const [charactersData, charsLoading] = useFetchAnimeData(
    "characters",
    0,
    animeId
  );
  const [recommendations, recLoading] = useFetchAnimeData(
    "recommendations",
    4000,
    animeId
  );
  const [staff, staffLoading] = useFetchAnimeData("staff", 4000, animeId);

  const isLoading =
    !detailsData || !charactersData || !staff || !recommendations;
  if (isLoading) {
    return (
      <div className="w-[100%] flex justify-center items-center h-[10vh] mt-[5rem] mb-[55rem]">
        <Spinner />
      </div>
    );
  }

  const displayType = params.slug[2];

  return (
    <div>
      <div className="relative h-[15rem] md:h-[20rem]">
        <div className="absolute  inset-0 bg-black opacity-20"></div>
      </div>

      <DetailsHero
        title={detailsData?.data.title}
        image={detailsData?.data.images.jpg.large_image_url}
        synopsis={detailsData?.data.synopsis}
      />

      <div className="max-w-[90rem] w-[90%] mx-auto md:flex gap-[2rem] ">
        <DetailsSidebar data={detailsData} />

        {displayType == undefined && (
          <div className="mt-[2rem] flex-1">
            <DetailsCharacters data={charactersData} max={6} />
            <DetailsStaff data={staff} max={3} />
            <DetailsRecommendations data={recommendations} />
            <DetailsTrailer url={detailsData?.data.trailer.url} />
            <div className="max-w-[40rem] w-[100%] m-auto h-[40rem] mt-[3rem] mb-[15rem]">
              <ReactPlayer
                controls
                url={detailsData?.data.trailer.embed_url}
                width="100%"
                h="100%"
              />
            </div>
          </div>
        )}
        {displayType == "watch" && <div></div>}
        {displayType == "characters" && <div>CHARACTERS</div>}
        {displayType == "staff" && <div>STAFF</div>}
        {displayType == "reviews" && <div>REVIEWS</div>}
      </div>
    </div>
  );
};

export default AnimeDetailsPage;
