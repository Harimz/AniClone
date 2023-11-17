"use client";

import React, { useEffect, useState } from "react";
import { SearchBar } from "@/components/common";
import { DefaultAnimeView, DefaultMangaView } from "@/components/search";
import { useGetAnimeSearchResultsQuery } from "@/redux/features/animeApiSlice";
import { useSearchParams } from "next/navigation";
import CardDisplay from "@/components/common/CardDisplay";
import { useGetMangaSearchResultsQuery } from "@/redux/features/mangaApiSlice";
import Top100 from "@/components/common/Top100";
import Trending from "@/components/common/Trending";
import TopMovies from "@/components/common/TopMovies";
import TopManhwa from "@/components/common/TopManhwa";

const SearchPage = ({ params }: { params: { slug: string } }) => {
  const searchParams = useSearchParams();
  const queryString = `?${searchParams.toString()}`;
  const shouldFetch = searchParams.toString().length > 0;
  const type = params.slug[0];

  // Always call the hook, but conditionally skip its execution
  const {
    data: searchAnimeData,
    isLoading,
    error: animeError,
  } = useGetAnimeSearchResultsQuery(queryString, {
    skip: !shouldFetch || type !== "anime",
  });
  const {
    data: searchMangaData,
    isLoading: mangaIsLoading,
    error: mangaError,
  } = useGetMangaSearchResultsQuery(queryString, {
    skip: !shouldFetch || type !== "manga",
  });

  const loadDefault = !shouldFetch;

  console.log(params.slug[1]);

  if (params.slug[1] == "top-100") {
    return (
      <>
        <Top100 type={type} />
      </>
    );
  }
  if (params.slug[1] == "trending") {
    return (
      <>
        <Trending type={type} />;
      </>
    );
  }
  if (params.slug[1] == "top-movies" && type == "anime") {
    return (
      <>
        <TopMovies type={type} />;
      </>
    );
  }
  if (params.slug[1] == "top-manhwa" && type == "manga") {
    return (
      <>
        <TopManhwa type={type} />;
      </>
    );
  }

  if (animeError || mangaError) {
    return "No results found";
  }

  if (params.slug[0] == "anime" && loadDefault) {
    return (
      <div className="mt-[5rem]">
        <SearchBar type={params.slug[0]} />
        <DefaultAnimeView />
      </div>
    );
  }

  if (params.slug[0] == "manga" && loadDefault) {
    return (
      <div className="mt-[5rem]">
        <SearchBar type={params.slug[0]} />
        <DefaultMangaView />
      </div>
    );
  }

  if (searchMangaData && type == "manga") {
    return (
      <div className="mt-[5rem] max-w-[90rem] w-[90%] mx-auto">
        <SearchBar type={params.slug[0]} />

        <CardDisplay
          data={searchMangaData.data}
          isLoading={mangaIsLoading}
          type={params.slug[0]}
        />
      </div>
    );
  }

  return (
    <div className="mt-[5rem] max-w-[90rem] w-[90%] mx-auto">
      <SearchBar type={params.slug[0]} />

      <CardDisplay
        data={searchAnimeData.data}
        isLoading={isLoading}
        type={params.slug[0]}
      />
    </div>
  );
};

export default SearchPage;
