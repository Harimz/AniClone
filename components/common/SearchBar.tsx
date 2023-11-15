"use client";

import React from "react";
import { FaSearch } from "react-icons/fa";
import { PrimaryButton } from "../ui";
import genres from "@/json/genres.json";
import status from "@/json/status.json";
import ratings from "@/json/ratings.json";
import formats from "@/json/formats.json";

interface Props {
  type?: string;
}

const SearchBar = ({ type = "anime" }: Props) => {
  return (
    <div className="max-w-[90rem] w-[90%] mx-auto flex flex-col md:grid md:grid-cols-6 gap-[1rem] mb-[3rem]">
      <div>
        <p className="font-light text-sm text-gray-400 mb-[0.5rem]">Search</p>
        <div className="relative">
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 outline-none border-none" />
          <input className="pl-10 pr-3 py-2 w-full rounded-md outline-none shadow-md transition duration-200 ease-in-out bg-white dark:bg-blue-400" />
        </div>
      </div>
      <div>
        <p className="font-light text-sm text-gray-400 mb-[0.5rem]">Genres</p>
        <select className="w-full l-10 pr-3 py-2 px-2 rounded-md outline-none shadow-md transition duration-200 ease-in-out bg-white dark:bg-blue-400">
          {genres.map((genre) => (
            <option key={genre.mal_id} value={genre.mal_id}>
              {genre.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <p className="font-light text-sm text-gray-400 mb-[0.5rem]">Status</p>
        <select
          defaultValue="any"
          className="w-full l-10 pr-3 py-2 px-2 rounded-md outline-none shadow-md transition duration-200 ease-in-out bg-white dark:bg-blue-400"
        >
          {status.map((stat) => (
            <option key={stat.statusId} value={stat.statusId}>
              {stat.statusName}
            </option>
          ))}
        </select>
      </div>
      <div>
        <p className="font-light text-sm text-gray-400 mb-[0.5rem]">Rating</p>
        <select className="w-full l-10 pr-3 py-2 px-2 rounded-md outline-none shadow-md transition duration-200 ease-in-out bg-white dark:bg-blue-400">
          {ratings.map((rating) => (
            <option value={rating.rating} key={rating.rating}>
              {rating.rating}
            </option>
          ))}
        </select>
      </div>
      <div>
        <p className="font-light text-sm text-gray-400 mb-[0.5rem]">Format</p>
        <select className="w-full l-10 pr-3 py-2 px-2 rounded-md outline-none shadow-md transition duration-200 ease-in-out bg-white dark:bg-blue-400">
          {formats.map((format) => (
            <option value={format.formatId} key={format.formatId}>
              {format.formatName}
            </option>
          ))}
        </select>
      </div>

      <div className="flex place-items-end">
        <PrimaryButton customStyles="w-full rounded-md h-[2.5rem]">
          Search
        </PrimaryButton>
      </div>
    </div>
  );
};

export default SearchBar;
