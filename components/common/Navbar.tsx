"use client";

import React, { useState } from "react";
import { MobileNav } from ".";
import Image from "next/image";
import { PrimaryButton, SearchMenu } from "../ui";
import { useScrollDirection } from "@/hooks";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlay, FaBookOpen } from "react-icons/fa";

const Navbar = () => {
  const { scrollDirection, beyondNavbar } = useScrollDirection();
  const [menuOpen, setMenuOpen] = useState(false);

  let navStyles = "translate-y-0";

  if (beyondNavbar) {
    if (scrollDirection === "DOWN") {
      navStyles = "-translate-y-full"; // hides the navbar
    } else {
      navStyles = "translate-y-0"; // shows the navbar
    }
  }

  return (
    <>
      <nav
        className={`hidden md:block absolute bg-darkPurple p-[1.25rem] dark:bg-blue-300 md:sticky left-0 right-0 top-0 z-50 transition-transform duration-300 ease-out ${navStyles}`}
      >
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" passHref>
            <Image
              alt="Anilist Logo"
              src="/images/icon.svg"
              width={50}
              height={50}
              priority
              style={{ cursor: "pointer" }}
            />
          </Link>

          <div className="flex gap-[2rem]">
            <div
              className="mr-[10rem] my-auto relative"
              onMouseOver={() => setMenuOpen(true)}
              onMouseOut={() => setMenuOpen(false)}
            >
              <button className="text-gray-400 font-light">Search</button>

              <AnimatePresence>
                {menuOpen && <SearchMenu setMenuOpen={setMenuOpen} />}
              </AnimatePresence>
            </div>
            <button className="text-gray-400 font-light">Login</button>
            <PrimaryButton customStyles="rounded-lg transform transition-transform duration-200 hover:scale-105 focus:outline-none">
              Sign Up
            </PrimaryButton>
          </div>
        </div>
      </nav>

      <MobileNav />
    </>
  );
};

export default Navbar;
