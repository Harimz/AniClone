"use client";

import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { GenreTag, PrimaryButton } from "../ui";
import genres from "@/json/genres.json";
import status from "@/json/status.json";
import ratings from "@/json/ratings.json";
import formats from "@/json/formats.json";
import mangaFormats from "@/json/mangaFormats.json";
import mangaStatus from "@/json/mangaStatus.json";
import { FaTag } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";

interface Props {
  type?: string;
}

const SearchBar = ({ type = "anime" }: Props) => {
  const params = useSearchParams();

  const [filters, setFilters] = useState<{
    searchQuery: string;
    genres: string[];
    status: string;
    rating: string;
    format: string;
  }>({
    searchQuery: params.get("q") || "",
    genres: params.get("genres")?.split(",") || [],
    status: params.get("status") || "any",
    rating: params.get("rating") || "any",
    format: params.get("format") || "any",
  });
  const router = useRouter();

  console.log(params.get("genres"));

  const colStyles = type == "anime" ? "md:grid-cols-6" : "md:grid-cols-5";

  const removeGenre = (genreName: string) => {
    const genreId = genres
      .find((genre) => genre.name === genreName)
      ?.mal_id.toString();
    if (genreId) {
      setFilters((state) => ({
        ...state,
        genres: state.genres.filter((id) => id !== genreId),
      }));
    }
  };

  const getGenreNames = (genreIds: string[]) => {
    return genreIds.map(
      (id) => genres.find((genre) => genre.mal_id.toString() === id)?.name
    );
  };

  const genreTags = getGenreNames(filters.genres);

  const statusOptions =
    type == "anime"
      ? status.map((stat) => (
          <option key={stat.statusId} value={stat.statusId}>
            {stat.statusName}
          </option>
        ))
      : mangaStatus.map((stat) => (
          <option key={stat.statusId} value={stat.statusId}>
            {stat.statusName}
          </option>
        ));

  const formatOptions =
    type == "anime"
      ? formats.map((format) => (
          <option value={format.formatId} key={format.formatId}>
            {format.formatName}
          </option>
        ))
      : mangaFormats.map((format) => (
          <option value={format.formatId} key={format.formatId}>
            {format.formatName}
          </option>
        ));

  const buildQueryString = () => {
    const queryParts = [];
    if (filters.searchQuery) {
      queryParts.push(`q=${encodeURIComponent(filters.searchQuery)}`);
    }
    if (filters.genres.length > 0) {
      queryParts.push(`genres=${filters.genres.join(",")}`);
    }
    if (
      filters.status &&
      filters.status.toLowerCase() !== "any" &&
      filters.status !== "0"
    ) {
      queryParts.push(`status=${filters.status}`);
    }
    if (
      type === "anime" &&
      filters.rating &&
      filters.rating.toLowerCase() !== "any"
    ) {
      queryParts.push(`rating=${filters.rating}`);
    } else {
      queryParts.push(`rating=pg13`);
    }
    if (filters.format && filters.format.toLowerCase() !== "any") {
      queryParts.push(`type=${filters.format}`);
    }

    return queryParts.join("&");
  };

  const handleSearch = () => {
    const queryString = buildQueryString();

    router.push(`/search/${type}?${queryString}`);
  };

  return (
    <div className="max-w-[90rem] w-[90%] mx-auto mb-[3rem]">
      <div className={`flex flex-col md:grid ${colStyles} gap-[1rem]`}>
        <div>
          <p className="font-light text-sm text-gray-400 mb-[0.5rem]">Search</p>
          <div className="relative">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 outline-none border-none" />
            <input
              value={filters.searchQuery}
              className="pl-10 pr-3 py-2 w-full rounded-md outline-none shadow-md transition duration-200 ease-in-out bg-white dark:bg-blue-400"
              onChange={({ target }) =>
                setFilters((state) => ({ ...state, searchQuery: target.value }))
              }
            />
          </div>
        </div>
        <div>
          <p className="font-light text-sm text-gray-400 mb-[0.5rem]">Genres</p>
          <select
            className="w-full l-10 pr-3 py-2 px-2 rounded-md outline-none shadow-md transition duration-200 ease-in-out bg-white dark:bg-blue-400"
            onChange={({ target }) =>
              setFilters((state) => {
                if (state.genres.includes(target.value)) {
                  return state;
                }

                return { ...state, genres: [...state.genres, target.value] };
              })
            }
          >
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
            value={filters.status}
            className="w-full l-10 pr-3 py-2 px-2 rounded-md outline-none shadow-md transition duration-200 ease-in-out bg-white dark:bg-blue-400"
            onChange={({ target }) =>
              setFilters((state) => ({ ...state, status: target.value }))
            }
          >
            {statusOptions}
          </select>
        </div>
        {type == "anime" && (
          <div>
            <p className="font-light text-sm text-gray-400 mb-[0.5rem]">
              Rating
            </p>
            <select
              value={filters.rating}
              className="w-full l-10 pr-3 py-2 px-2 rounded-md outline-none shadow-md transition duration-200 ease-in-out bg-white dark:bg-blue-400"
              onChange={({ target }) =>
                setFilters((state) => ({ ...state, rating: target.value }))
              }
            >
              {ratings.map((rating) => (
                <option value={rating.rating} key={rating.rating}>
                  {rating.rating}
                </option>
              ))}
            </select>
          </div>
        )}
        <div>
          <p className="font-light text-sm text-gray-400 mb-[0.5rem]">Format</p>
          <select
            value={filters.format}
            className="w-full l-10 pr-3 py-2 px-2 rounded-md outline-none shadow-md transition duration-200 ease-in-out bg-white dark:bg-blue-400"
            onChange={({ target }) =>
              setFilters((state) => ({ ...state, format: target.value }))
            }
          >
            {formatOptions}
          </select>
        </div>

        <div className="flex place-items-end">
          <PrimaryButton
            customStyles="w-full rounded-md h-[2.5rem]"
            handleClick={handleSearch}
          >
            Search
          </PrimaryButton>
        </div>
      </div>

      {filters.genres.length !== 0 && (
        <div className="flex flex-wrap gap-[1rem] mt-[1.5rem]">
          <div className="text-gray-500 flex place-items-center">
            <FaTag />
          </div>
          {genreTags.map((genreTag, index) =>
            genreTag ? (
              <GenreTag
                key={index}
                name={genreTag}
                onClick={() => removeGenre(genreTag)}
              />
            ) : null
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
