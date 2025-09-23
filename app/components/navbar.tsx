"use client";
import { useState } from "react";
import { useTheme } from "next-themes";
import { IoIosArrowDown, IoMdMenu } from "react-icons/io";
import { TbBellFilled } from "react-icons/tb";
import { FiMoon } from "react-icons/fi";
import { MdLightMode } from "react-icons/md";
import Icons from "../components/icons";
import Logo from "../components/logo";
import Support from "../components/support";
import Radius from "./radius";
import MobileNavbar from "./mobileNavbar";

export default function Navbar() {
  
  const { theme, setTheme } = useTheme();
    const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <div className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-[#0f172a] flex items-center justify-between px-4 py-4">
        <div className="flex items-center gap-[1rem]">
          <Logo />
          <div className="relative hidden lg:block">
            <button className="flex items-center space-x-1 focus:outline-none">
              <div className="flex items-center gap-[5px]">
                <span>
                  <Radius />
                </span>
                <h2 className="text-[12px] text-black dark:text-[#c9cbd0]">nwekecynthiachinenye</h2>
              </div>
              <span>
                <IoIosArrowDown />
              </span>
            </button>
          </div>
        </div>
        <div className="hidden lg:flex">
          <Icons />
        </div>
        <div className="hidden lg:flex">
          <Support />
        </div>

        {/* Hamburger and mobile icons */}
        <div className="flex items-center gap-6 lg:hidden flex">
          <div className="lg:hidden flex items-center gap-2">
            <div className="bg-[#f6f6f6] text-black p-[6px] rounded-[5px]">
              <TbBellFilled />
            </div>

            <button
              onClick={() => setTheme(theme === "night" ? "winter" : "night")}
              className="bg-[#f6f6f6] p-[6px] rounded-[5px]"
            >
              {theme === "night" ? (
                <FiMoon className="text-black" />
              ) : (
                <MdLightMode className="text-black" />
              )}
            </button>

            <div>
              <Radius />
            </div>
          </div>
          <button
            className="lg:hidden text-2xl text-black dark:text-[#c9cbd0]"
            onClick={() => setMenuOpen(true)}
          >
            <IoMdMenu />
          </button>
        </div>
      </div>

      {/* mobile Menu */}
      <MobileNavbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </>
  );
}
