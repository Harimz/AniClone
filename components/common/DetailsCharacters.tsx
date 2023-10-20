import { AnimeCharactersData } from "@/types";
import React from "react";
import { CharacterCard } from "../ui";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";

interface Props {
  data: AnimeCharactersData | null;
  max?: number;
}

const DetailsCharacters = ({ data, max }: Props) => {
  const characters = max ? data?.data.slice(0, max) : data?.data;
  const router = useParams();

  return (
    <>
      {max && (
        <h2 className="font-semibold text-gray-400 mb-[1rem]">Characters</h2>
      )}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-[2rem] auto-rows-min mb-[3rem]">
        {characters?.map((character) => (
          <CharacterCard
            key={character.character.mal_id}
            character={character}
          />
        ))}
      </div>
    </>
  );
};

export default DetailsCharacters;
