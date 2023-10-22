"use client";

import React from "react";
import { useFetchAnimeData } from "@/hooks";
import { ReviewsCard, Spinner } from "../ui";

interface Props {
  id: number;
}

const DetailsReviews = ({ id }: Props) => {
  const [reviews] = useFetchAnimeData("reviews", 0, id);

  if (!reviews) {
    return (
      <div className="w-[100%] flex justify-center items-center h-[10vh] mt-[5rem] mb-[55rem]">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-[2rem] mb-[15rem]">
      {reviews.data.map((review) => (
        <ReviewsCard review={review} key={review.mal_id} />
      ))}
    </div>
  );
};

export default DetailsReviews;
