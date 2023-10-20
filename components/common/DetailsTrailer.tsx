import React from "react";
// import ReactPlayer from "react-player";

interface Props {
  url: string | undefined;
}

const DetailsTrailer = ({ url }: Props) => {
  return (
    <div className="w-[100%]">
      {/* <ReactPlayer url={url} controls width="100%" height="25rem" /> */}
    </div>
  );
};

export default DetailsTrailer;
