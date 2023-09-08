import React from "react";
import Image from "next/image";
import { HeroItem, PrimaryButton } from "../ui";
import { FaAngleRight } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="bg-blue-500 max-w-[70rem] m-auto md:mt-[2rem] rounded-none md:rounded-2xl p-[3.5rem] text-center">
      <h1 className="text-white font-bold text-2xl">
        The next-generation anime platform
      </h1>

      <p className="text-blue-100 mt-[1rem] w-[50%] mx-auto font-light text-xl">
        Track, share, and discover your favorite anime and manga with AniList.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-[3rem] mt-[5rem] mb-[2rem]">
        <HeroItem
          title="Discover your obsessions"
          text="What are your highest rated genres or ost watched voice actors? Follow
          your watching habits over time with in-depth statistics"
          image="/images/stats.svg"
        />
        <HeroItem
          title="Bring AniList anywhere"
          text="Keep track of your progress on-the-go with one of many AniList apps cross IOS, Android, macOS, and Windows."
          image="/images/apps.svg"
        />
        <HeroItem
          title="Join the conversation"
          text="Share your thoughts with our thriving community, make friends, socialize, and recieve recommendations."
          image="/images/social.svg"
        />
        <HeroItem
          title="Tweak it to your liking"
          text="Customize your scoring system, title format, color scheme, and much more! Also, we have a dark mode."
          image="/images/custom.svg"
        />
      </div>

      <PrimaryButton customStyles="translate-y-[5rem] px-[4rem] text-xl h-[3.5rem] w-[15rem] rounded-full hover:scale-100 items-center">
        <div className="flex items-center">
          <h1>Join Now</h1>

          <div className="text-blue-200 bg-white absolute right-2 rounded-full h-[2.75rem] w-[2.75rem] flex items-center justify-center">
            <FaAngleRight size={32} />
          </div>
        </div>
      </PrimaryButton>
    </div>
  );
};

export default Hero;
