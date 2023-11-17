"use client";

import React, { useState } from "react";

interface Props {
  name: string | undefined;
  onClick: any;
}

const GenreTag = ({ name, onClick }: Props) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="bg-blue-150 rounded-md text-[0.75rem] px-[0.5rem] flex cursor-pointer py-[0.1rem]"
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
      onClick={onClick}
    >
      <p>{name}</p>
      {hover && <p className="ml-[0.75rem]">x</p>}
    </div>
  );
};

export default GenreTag;
