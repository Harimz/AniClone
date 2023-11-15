"use client";

import { Hero, SearchBar, TopCardDisplay } from "@/components/common";
import CardDisplay from "@/components/common/CardDisplay";
import { DefaultAnimeView } from "@/components/search";
import { useFetchAnimeData, useFetchTopAnimeData } from "@/hooks";

export default function Home() {
  return (
    <main>
      <Hero />

      <SearchBar />

      <DefaultAnimeView />
    </main>
  );
}
