import React, { MouseEventHandler, ReactNode } from "react";

interface Props {
  type?: "button" | "submit";
  customStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  children: ReactNode;
}

const PrimaryButton = ({
  customStyles,
  handleClick,
  disabled,
  type,
  children,
}: Props) => {
  return (
    <button
      type={type || "button"}
      onClick={handleClick}
      disabled={disabled}
      className={`bg-gradient-to-br from-blue-200 to-blue-200 text-white px-6 py-3 h-[2.75rem] font-bold hover:shadow-blue-lg ${customStyles}`}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
