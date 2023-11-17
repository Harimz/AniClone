"use client";

import React, { useState } from "react";
import {
  DetailsCharacters,
  DetailsEpisodes,
  DetailsHero,
  DetailsReviews,
  DetailsSidebar,
  DetailsStaff,
  DetailsTrailer,
} from "@/components/common";
import DetailsRecommendations from "@/components/common/DetailsRecommendations";
import { Spinner } from "@/components/ui";
import { useFetchAnimeData } from "@/hooks";
import ReactPlayer from "react-player";

const AnimeDetailsPage = ({ params }: { params: { slug: string } }) => {
  const animeId = +params.slug[0];
  const [displayType, setDisplayType] = useState("");
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
    0,
    animeId
  );

  const isLoading = !detailsData || !charactersData || !recommendations;
  if (isLoading) {
    return (
      <div className="w-[100%] flex justify-center items-center h-[10vh] mt-[5rem] mb-[55rem]">
        <Spinner />
      </div>
    );
  }

  return (
    <div>
      <div className="relative h-[15rem] md:h-[20rem]">
        <div className="absolute  inset-0 bg-black opacity-20"></div>
      </div>

      <DetailsHero
        title={detailsData?.data.title}
        image={detailsData?.data.images.jpg.large_image_url}
        synopsis={detailsData?.data.synopsis}
        setDisplayType={setDisplayType}
        type="anime"
      />

      <div className="max-w-[90rem] w-[90%] mx-auto md:flex gap-[2rem] ">
        <DetailsSidebar data={detailsData} />

        {displayType == "" && (
          <div className="mt-[2rem] flex-1">
            <DetailsCharacters data={charactersData} max={6} />
            <DetailsRecommendations data={recommendations} type="anime" />
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
        {displayType == "watch" && (
          <div>
            <DetailsEpisodes id={animeId} />
          </div>
        )}
        {displayType == "characters" && (
          <div className="mt-[2rem]">
            <DetailsCharacters data={charactersData} />
          </div>
        )}
        {displayType == "staff" && (
          <div className="mt-[2rem]">
            <DetailsStaff id={animeId} />
          </div>
        )}
        {displayType == "reviews" && (
          <div className="mt-[2rem]">
            <DetailsReviews id={animeId} type="anime" />
          </div>
        )}
      </div>
    </div>
  );
};

export default AnimeDetailsPage;
