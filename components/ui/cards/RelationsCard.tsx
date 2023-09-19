import Image from "next/image";
import React from "react";

interface Props {
  type: string;
  photo: string;
  id: number;
}

const RelationsCard = ({ type, photo, id }: Props) => {
  // console.log(photo);

  return (
    <div className="relative">
      {/* <Image layout="fill" alt={type} src={photo} /> */}
    </div>
  );
};

export default RelationsCard;
