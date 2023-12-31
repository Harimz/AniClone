import Image from "next/image";
import React from "react";
import type { AnimeCharacter } from "@/types/AnimeTypes";
import { MangaCharacterData } from "@/types/MangaTypes";

interface Props {
  character: AnimeCharacter | MangaCharacterData | null;
}

function isAnimeCharacter(character: any): character is AnimeCharacter {
  return (character as AnimeCharacter).voice_actors !== undefined;
}

const CharacterCard = ({ character }: Props) => {
  if (!character) {
    return "Loading...";
  }

  const isAnime = isAnimeCharacter(character);

  return (
    <div className="relative flex justify-between bg-white dark:bg-blue-400 text-gray-500 dark:text-gray-400">
      <div className="flex justify-between">
        <div className="relative w-[3.75rem] h-[5rem]">
          <Image
            fill
            alt={character.character.name || "Character Name"}
            src={
              character.character.images.jpg.image_url ||
              "/images/defaultperson.jpg"
            }
          />
        </div>

        <div className="p-[0.5rem] flex flex-col justify-between text-sm font-thin">
          <h2>{character.character.name}</h2>
          <p>{character.role}</p>
        </div>
      </div>

      {isAnime && (
        <div className="flex">
          <div className="p-[0.5rem] flex flex-col justify-between text-sm font-thin text-end">
            <h2>{character.voice_actors[0]?.person.name}</h2>
            <p>{character.voice_actors[0]?.language}</p>
          </div>

          <div className="relative w-[3.75rem] h-[5rem]">
            <Image
              fill
              alt={character.voice_actors[0]?.person.name || "Voice Actor"}
              src={
                character.voice_actors[0]?.person.images.jpg.image_url ||
                "/images/defaultperson.jpeg"
              }
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default CharacterCard;
