import { SearchBar } from "@/components/common";
import { DefaultAnimeView, DefaultMangaView } from "@/components/search";
import React from "react";

const SearchPage = ({ params }: { params: { slug: string } }) => {
  console.log(params);

  if (params.slug[0] == "anime") {
    return (
      <div className="mt-[5rem]">
        <SearchBar type={params.slug[0]} />

        <DefaultAnimeView />
      </div>
    );
  }

  if (params.slug[0] == "manga") {
    return (
      <div className="mt-[5rem]">
        <SearchBar type={params.slug[0]} />

        <DefaultMangaView />
      </div>
    );
  }

  return (
    <div className="mt-[5rem]">
      <SearchBar type={params.slug[0]} />
    </div>
  );
};

export default SearchPage;
