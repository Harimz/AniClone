import Image from "next/image";
import React from "react";

interface Props {
  title: string;
  text: string;
  image: string;
}

const HeroItem = ({ title, text, image }: Props) => {
  return (
    <div className="flex gap-[2rem]">
      <Image alt="Hero Svg" width={95} height={75} src={image} />

      <div className="text-left">
        <h2 className="text-gray-125 mb-[1rem]">{title}</h2>
        <p className="text-blue-100 font-light">{text}</p>
      </div>
    </div>
  );
};

export default HeroItem;
