import React from "react";
import { MobileNav } from ".";
import Image from "next/image";
import { PrimaryButton } from "../ui";

const Navbar = () => {
  return (
    <div>
      <nav className="hidden md:block bg-darkPurple p-[1.25rem]">
        <div className="container mx-auto flex justify-between items-center">
          <Image
            alt="Anilist Logo"
            src="/images/icon.svg"
            width={50}
            height={50}
            priority
            style={{ cursor: "pointer" }}
          />

          <div className="flex gap-[2rem]">
            <button className="text-gray-300">Login</button>
            <PrimaryButton customStyles="rounded-lg">Sign Up</PrimaryButton>
          </div>
        </div>
      </nav>

      <MobileNav />
    </div>
  );
};

export default Navbar;
