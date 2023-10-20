import { AnimeStaffData } from "@/types";
import React from "react";
import { CharacterCard, StaffCard } from "../ui";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";

interface Props {
  data: AnimeStaffData | null;
  max?: number;
}

const DetailsStaff = ({ data, max }: Props) => {
  const staff = max ? data?.data.slice(0, max) : data?.data;
  const router = useParams();

  return (
    <>
      {max && <h2 className="font-semibold text-gray-400 mb-[1rem]">Staff</h2>}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-[2rem] auto-rows-min mb-[3rem]">
        {staff?.map((staffMember) => (
          <StaffCard
            key={staffMember.person.mal_id}
            staffMember={staffMember}
          />
        ))}
      </div>
    </>
  );
};

export default DetailsStaff;
