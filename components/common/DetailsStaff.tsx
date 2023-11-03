"use client";

import React from "react";
import { Spinner, StaffCard } from "../ui";
import { useParams } from "next/navigation";
import { useFetchAnimeData } from "@/hooks";

interface Props {
  id: number;
  max?: number;
}

type AnimeStaff = {
  person: {
    mal_id: number;
    url: string;
    images: {
      jpg: {
        image_url: string;
      };
    };
    name: string;
  };
  positions: string[];
};

const DetailsStaff = ({ id, max }: Props) => {
  const [staff, staffLoading] = useFetchAnimeData("staff", 0, id);
  const router = useParams();

  if (!staff) {
    return (
      <div className="w-[100%] flex justify-center items-center h-[10vh] mt-[5rem] mb-[55rem]">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-[2rem] auto-rows-min mb-[3rem]">
      {staff.data?.map((staffMember: AnimeStaff) => (
        <StaffCard key={staffMember.person.mal_id} staffMember={staffMember} />
      ))}
    </div>
  );
};

export default DetailsStaff;
