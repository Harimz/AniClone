"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";

const Footer = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="bg-blue-600 p-[2rem] md:p-[5rem]">
      <div className="max-w-[90rem] mx-auto text-gray-400 md:flex md:justify-between">
        <div className="mb-[3rem]">
          <p className="text-blue-150 font-bold text-lg mb-[1.5rem]">
            Site Theme
          </p>

          <div className="flex gap-[1rem]">
            <div
              className="bg-white h-[1.75rem] w-[1.75rem] relative border-2 border-gray-400 cursor-pointer"
              onClick={() => setTheme("light")}
            >
              <p className="absolute top-1 left-0 font-normal text-lg text-gray-500">
                A
              </p>
            </div>

            <div
              className="h-[1.75rem] w-[1.75rem] relative border-2 border-gray-400 cursor-pointer"
              onClick={() => setTheme("dark")}
            >
              <p className="absolute top-1 left-0 font-normal text-lg text-gray-400">
                A
              </p>
            </div>
          </div>
        </div>

        <div className="grid-cols-1 md:grid-cols-4 grid gap-[4rem]">
          <ul className="flex flex-col gap-4">
            <li>Donate</li>
            <li>AniList.co</li>
            <li>AniChart.net</li>
          </ul>
          <ul className="flex flex-col gap-4">
            <li>Apps</li>
            <li>Site Stats</li>
            <li>Recommendations</li>
            <li>API</li>
          </ul>
          <ul className="flex flex-col gap-4">
            <li>Discord</li>
            <li>Twitter</li>
            <li>Facebook</li>
            <li>Github</li>
          </ul>
          <ul className="flex flex-col gap-4">
            <li>App Data</li>
            <li>Moderators</li>
            <li>Contact</li>
            <li>Terms & Privacy</li>
            <li>Site Map</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
