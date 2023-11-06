"use client";

import React, { useState } from "react";
import { FaBars, FaSearch, FaUserPlus, FaTimes } from "react-icons/fa";
import { MdLogin } from "react-icons/md";

import { motion, AnimatePresence } from "framer-motion";

const MobileNav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="md:hidden fixed right-6 bottom-6 z-10">
      {!menuOpen && (
        <div
          className="p-[0.45rem] rounded-md bg-white dark:bg-blue-400 cursor-pointer"
          onClick={() => setMenuOpen(true)}
        >
          <FaBars size={32} style={{ color: "#02A9FF" }} />
        </div>
      )}

      {menuOpen && (
        <div className="grid grid-cols-3 gap-[1.5rem] p-[1rem] dark:bg-blue-400 bg-white rounded-md">
          <div className="flex flex-col items-center">
            <FaSearch size={22} style={{ color: "gray" }} />
            <p className="text-[.5rem] mt-[.25rem] text-gray-400 font-light">
              Search
            </p>
          </div>
          <div className="flex flex-col items-center">
            <FaUserPlus size={22} style={{ color: "gray" }} />
            <p className="text-[.5rem] mt-[.25rem] text-gray-400 font-light">
              Sign Up
            </p>
          </div>
          <div className="flex flex-col items-center">
            <MdLogin size={22} style={{ color: "gray" }} />
            <p className="text-[.5rem] mt-[.25rem] text-gray-400 font-light">
              Login
            </p>
          </div>
          <div
            onClick={() => setMenuOpen(false)}
            className="flex flex-col items-center"
          >
            <FaTimes size={22} style={{ color: "gray" }} />
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileNav;
