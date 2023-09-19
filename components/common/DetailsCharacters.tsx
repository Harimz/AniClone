import { AnimeCharacterData } from "@/types";
import React from "react";

interface Props {
  data: AnimeCharacterData | null;
}

const DetailsCharacters = ({ data }: Props) => {
  console.log(data?.data);

  return <div></div>;
};

export default DetailsCharacters;
