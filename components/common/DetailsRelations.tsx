import { AnimeDetailsData } from "@/types";
import React from "react";
import { RelationsCard } from "../ui";

interface Props {
  data: AnimeDetailsData | undefined;
}

const DetailsRelations = ({ data }: Props) => {
  const relations = data?.data.relations.map((item) => ({
    type: item.relation,
    items: item.entry,
  }));

  return (
    <div className="">
      {relations?.map((item) => {
        const type = item.type;
        const data = item.items;

        return data.map((relation) => (
          <RelationsCard
            key={relation.mal_id}
            type={type}
            photo={relation.url}
            id={relation.mal_id}
          />
        ));
      })}
    </div>
  );
};

export default DetailsRelations;
