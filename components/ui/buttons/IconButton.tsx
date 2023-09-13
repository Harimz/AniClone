import React, { MouseEventHandler } from "react";

interface Props {
  children: React.ReactNode;
  customStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  type?: "button" | "submit";
}

const IconButton = ({
  children,
  customStyles,
  handleClick,
  disabled,
  type,
}: Props) => {
  return (
    <button
      type={type || "button"}
      disabled={disabled}
      onClick={handleClick}
      className={`p-[0.75rem] rounded-[0.20rem] text-white font-thin ${customStyles} cursor-pointer`}
    >
      {children}
    </button>
  );
};

export default IconButton;
