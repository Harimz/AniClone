"use client";

import React, { useState } from "react";
import { ReviewItem } from "@/types/AnimeReviews";
import Image from "next/image";
import { FaThumbsUp } from "react-icons/fa";

interface Props {
  review: ReviewItem;
}

const ReviewsCard = ({ review }: Props) => {
  const [clamp, setClamp] = useState(false);
  const clampStyles = clamp ? "line-clamp-0" : "line-clamp-2";
  const heightStyles = clamp ? "max-h-[5rem]" : "max-h-[345rem]";

  return (
    <div
      className="flex gap-[1rem] cursor-pointer"
      onClick={() => setClamp((state) => !state)}
    >
      <div className="relative w-[3rem] h-[2.75rem] rounded-md overflow-hidden">
        <Image
          fill
          alt={review.review}
          src={review.user.images.jpg.image_url}
        />
      </div>

      <div
        className={`relative z-20 bg-white dark:bg-blue-400 text-gray-500 dark:text-gray-400 p-[1rem] max-w-[16rem] md:max-w-[26rem] ${
          clamp ? "h-full" : "h-[5rem]"
        }`}
      >
        <p className={`${clampStyles} text-sm font-thin`}>{review.review}</p>
        <div className="flex gap-[0.25rem] justify-end">
          <FaThumbsUp size={10} />
          <p className="text-[10px] select-none">{review.reactions.overall}</p>
        </div>
        <div className="absolute -left-2 top-5 z-10 h-[1rem] w-[1rem] bg-white dark:bg-blue-400 rotate-45"></div>
      </div>
    </div>
  );
};

export default ReviewsCard;
