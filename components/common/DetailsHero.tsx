"use client";

import Image from "next/image";
import React from "react";
import { IconButton, SecondaryButton } from "../ui";
import { FaHeart } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

interface Props {
  title: string | any;
  synopsis: string | any;
  image: string | any;
  setDisplayType: (value: string) => void;
}

const DetailsHero = ({ title, synopsis, image, setDisplayType }: Props) => {
  const router = useRouter();
  const pathname = usePathname();

  const updateUrl = (value: string) => {
    const currentPathParts = pathname.split("/");
    const predefinedPaths = [
      "watch",
      "characters",
      "staff",
      "reviews",
      "stats",
    ];

    if (
      predefinedPaths.includes(currentPathParts[currentPathParts.length - 1])
    ) {
      currentPathParts[currentPathParts.length - 1] = value;
    } else {
      currentPathParts.push(value);
    }

    const newPath = currentPathParts.join("/");
    router.push(newPath, { scroll: false });
  };

  return (
    <div className="bg-white dark:bg-blue-400">
      <div className="max-w-[90rem] w-[90%] mx-auto md:flex  lg:max-h-[20rem]">
        <div className="lg:w-[19rem] -translate-y-[5rem] md:-translate-y-[10rem] flex sm:block gap-[1rem] ">
          <div className="relative w-[8rem] sm:w-[12rem] lg:w-[100%] h-[12rem] sm:h-[18rem] lg:h-[23rem] ">
            <Image layout="fill" src={image} alt={title} />
          </div>

          <div className="flex gap-[1rem] md:mt-[1rem] h-[2.5rem] lg:h-auto flex-1 self-end">
            <button
              className={` relative flex items-center justify-center bg-blue-150 rounded-[0.20rem] text-white font-light cursor-pointer w-[100%]`}
            >
              Add to List
              <div className="absolute hidden right-0 bg-white/20  h-[100%] w-[2.5rem] md:flex items-center justify-center">
                <FiChevronDown />
              </div>
            </button>

            <IconButton customStyles="bg-red-300">
              <FaHeart />
            </IconButton>
          </div>
        </div>

        <div className="sm:p-[1.5rem] lg:p-[2rem] w-[100%]">
          <div className="flex h-[100%] flex-col justify-between">
            <div>
              <h2 className="text-gray-400 mb-[1rem] text-2xl">
                {title.toUpperCase()}
              </h2>
              <p className="text-gray-400 font-thin hidden md:block text-sm leading-6">
                {synopsis}
              </p>
            </div>

            <ul className="flex font-thin justify-center gap-[1rem] lg:gap-[4rem] overflow-scroll md:overflow-hidden mt-[2rem] text-gray-400 ">
              <li
                className="cursor-pointer hover:text-blue-150"
                onClick={() => setDisplayType("")}
              >
                Overview
              </li>
              <li
                className="cursor-pointer hover:text-blue-150"
                onClick={() => setDisplayType("watch")}
              >
                Watch
              </li>
              <li
                className="cursor-pointer hover:text-blue-150"
                onClick={() => setDisplayType("characters")}
              >
                Characters
              </li>
              <li
                className="cursor-pointer hover:text-blue-150"
                onClick={() => setDisplayType("staff")}
              >
                Staff
              </li>
              <li
                className="cursor-pointer hover:text-blue-150"
                onClick={() => setDisplayType("reviews")}
              >
                Reviews
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsHero;
