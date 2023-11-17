"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaBookOpen, FaPlay, FaStar, FaThumbsUp } from "react-icons/fa";
import { AiOutlineUser } from "react-icons/ai";
import { BsJoystick } from "react-icons/bs";

interface Props {
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MenuLink = ({ href, text }: { href: string; text: string }) => {
  return (
    <Link href={href} passHref>
      <p className="font-thin text-[0.6rem] text-gray-400 mt-[0.3rem] hover:text-gray-300">
        {text}
      </p>
    </Link>
  );
};

const SearchMenu = ({ setMenuOpen }: Props) => {
  const menuVariants = {
    open: {
      opacity: 1,
      y: 0,
    },
    closed: {
      opacity: 0,
      y: "-10",
    },
  };
  return (
    <motion.div
      className="bg-white dark:bg-blue-400 -left-10 absolute rounded-md w-[17rem]"
      onMouseOver={() => setMenuOpen(true)}
      onMouseOut={() => setMenuOpen(false)}
      initial="closed"
      animate="open"
      exit="closed"
      variants={menuVariants}
    >
      <div className="flex gap-[1rem] px-[1.5rem] pt-[1.5rem]">
        <div className="text-gray-400 flex items-center">
          <FaPlay />
        </div>

        <div>
          <Link href="/search/anime" passHref>
            <h2 className="text-normal text-gray-400 hover:text-gray-300">
              Anime
            </h2>
          </Link>
          <div className="flex gap-[1rem]">
            <MenuLink href="/search/anime/top-100" text="Top 100" />
            <MenuLink href="/search/anime/trending" text="Trending" />
            <MenuLink href="/search/anime/top-movies" text="Top Movies" />
          </div>
        </div>
      </div>

      <div className="flex gap-[1rem]  p-[1.5rem]">
        <div className="text-gray-400 flex items-center">
          <FaBookOpen />
        </div>

        <div>
          <Link href="/search/manga" passHref>
            <h2 className="text-normal text-gray-400 hover:text-gray-300">
              Manga
            </h2>
          </Link>
          <div className="flex gap-[1rem]">
            <MenuLink href="/search/manga/top-100" text="Top 100" />
            <MenuLink href="/search/manga/trending" text="Trending" />
            <MenuLink href="/search/manga/top-manhwa" text="Top Manhwa" />
          </div>
        </div>
      </div>

      <div className="bg-blue-600 p-[1rem] grid grid-cols-2 font-thin text-[0.7rem] text-gray-400">
        <div className="flex gap-[1rem] hover:text-gray-200">
          <BsJoystick />
          <Link href="/" passHref>
            <p>Staff</p>
          </Link>
        </div>
        <div className="flex gap-[1rem] hover:text-gray-200">
          <AiOutlineUser />
          <Link href="/" passHref>
            <p>Characters</p>
          </Link>
        </div>
        <div className="flex gap-[1rem] hover:text-gray-200">
          <FaStar />
          <Link href="/" passHref>
            <p>Reviews</p>
          </Link>
        </div>
        <div className="flex gap-[1rem] hover:text-gray-200">
          <FaThumbsUp />
          <Link href="/" passHref>
            <p>Recommendations</p>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default SearchMenu;
