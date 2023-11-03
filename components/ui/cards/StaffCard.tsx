import React from "react";

import Image from "next/image";
import type { AnimeStaff } from "@/types/AnimeStaff";

interface Props {
  staffMember: AnimeStaff | null;
}

const StaffCard = ({ staffMember }: Props) => {
  if (!staffMember) {
    return "Loading...";
  }

  return (
    <div className="relative flex justify-between bg-white dark:bg-blue-400 text-gray-500 dark:text-gray-400 max-w-[20rem]">
      <div className="flex justify-between">
        <div className="relative w-[3.75rem] h-[5rem]">
          <Image
            fill
            alt={staffMember.person.name}
            src={staffMember.person.images.jpg.image_url}
          />
        </div>

        <div className="p-[0.5rem] flex flex-col justify-between text-sm font-thin">
          <h2>{staffMember.person.name}</h2>
          <p>{staffMember.positions}</p>
        </div>
      </div>
    </div>
  );
};

export default StaffCard;
