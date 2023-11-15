"use client";

import {
  DetailsCharacters,
  DetailsHero,
  DetailsRecommendations,
  DetailsReviews,
  DetailsSidebar,
  DetailsStaff,
  DetailsTrailer,
} from "@/components/common";
import { Spinner } from "@/components/ui";
import { useFetchMangaData } from "@/hooks";
import React, { useState } from "react";

const MangaDetailsPage = ({ params }: { params: { slug: string } }) => {
  const mangaId = +params.slug[0];
  const [displayType, setDisplayType] = useState("");

  const [detailsData, detailsIsLoading] = useFetchMangaData(
    "mangaDetails",
    0,
    mangaId
  );
  const [charactersData, charactersIsLoading] = useFetchMangaData(
    "characters",
    0,
    mangaId
  );
  const [recommendations, recommendationsIsLoading] = useFetchMangaData(
    "recommendations",
    0,
    mangaId
  );

  const isLoading = !detailsData || !charactersData || !recommendations;
  if (isLoading) {
    return (
      <div className="w-[100%] flex justify-center items-center h-[10vh] mt-[5rem] mb-[55rem]">
        <Spinner />
      </div>
    );
  }

  console.log(detailsData.data.images);

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
      />

      {/* <div className="max-w-[90rem] w-[90%] mx-auto md:flex gap-[2rem] ">
        <DetailsSidebar data={detailsData} />

        {displayType == "" && (
          <div className="mt-[2rem] flex-1">
            <DetailsCharacters data={charactersData} max={6} />
            <DetailsRecommendations data={recommendations} />
          </div>
        )}
        {displayType == "watch" && <div></div>}
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
            <DetailsReviews id={animeId} />
          </div>
        )}
      </div> */}
    </div>
  );
};

export default MangaDetailsPage;
