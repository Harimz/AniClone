import React from "react";

interface Props {
  title: string;
  color: number;
}

const GenreCard = ({ title, color }: Props) => {
  const colorTable = {
    1: { text: "white", bg: "#EF5D5D" },
    2: { text: "#FFE0EC", bg: "#E34F85" },
    3: { text: "white", bg: "#3480EA" },
    4: { text: "#4D4023", bg: "#E0D59E" },
    5: { text: "#4D4023", bg: "#E0D59E" },
    6: { text: "#8A2C0F", bg: "#EBB62D" },
    7: { text: "#FEF4C3", bg: "#8A2C0F" },
    8: { text: "#AF4F18", bg: "#FFF280" },
    9: { text: "white", bg: "#E34F85" },
    10: { text: "#8A2C0F", bg: "#EBB62D" },
  };

  const { text, bg } = colorTable[color as keyof typeof colorTable];

  return (
    <div
      className={`py-[0.25rem] px-[0.5rem] h-[1rem] rounded-full flex`}
      style={{ backgroundColor: bg }}
    >
      <p className="text-[0.5rem] font-semibold" style={{ color: text }}>
        {title}
      </p>
    </div>
  );
};

export default GenreCard;
