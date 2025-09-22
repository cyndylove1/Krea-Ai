"use client";
import { useState } from "react";
import { useTheme } from "next-themes";
import { IoIosArrowDown, IoMdMenu, IoMdClose } from "react-icons/io";
import { TbBellFilled } from "react-icons/tb";
import { FiMoon } from "react-icons/fi";
import { MdLightMode } from "react-icons/md";
import Icons from "../components/icons";
import Logo from "../components/logo";
import Support from "../components/support";
import Radius from "./radius";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <>
      {/* Navbar */}
      <div className="flex items-center justify-between mx-4 my-4">
        <div className="flex items-center gap-[1rem]">
          <Logo />
          <div className="relative hidden lg:block">
            <button className="flex items-center space-x-1 focus:outline-none">
              <div className="flex items-center gap-[5px]">
                <span>
                  <Radius />
                </span>
                <h2 className="text-[12px]">nwekecynthiachinenye</h2>
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
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="bg-[#f6f6f6] p-[6px] rounded-[5px]"
            >
              {theme === "dark" ? (
                <FiMoon className="text-black" />
              ) : (
                <MdLightMode />
              )}
            </button>

            <div>
              <Radius />
            </div>
          </div>
          <button
            className="lg:hidden text-2xl"
            onClick={() => setMenuOpen(true)}
          >
            <IoMdMenu />
          </button>
        </div>
      </div>

      {/* mobile Menu */}
      <div className="lg:hidden flex">
        <div
          className={`fixed top-0 right-0 h-full w-[250px] bg-[#f6f6f6] transform transition-transform duration-500 z-50 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          } overflow-y-auto`}
        >
          {/* Close button */}
          <div className="flex justify-between items-center px-2 py-4 text-black">
            <div className="flex items-center space-x-1 focus:outline-none text-black">
              <div className="flex items-center gap-[5px]">
                <span>
                  <Radius />
                </span>
                <h2 className="text-[12px] ">nwekecynthiachinenye</h2>
              </div>
              <span>
                <IoIosArrowDown />
              </span>
            </div>
            <button onClick={() => setMenuOpen(false)} className="text-2xl">
              <IoMdClose />
            </button>
          </div>

          {/* Menu content */}
          <div className="flex flex-col items-start gap-6 p-4">
            <div>
              <Icons />
            </div>
            <div>
              <Support hideIcon={true} />
            </div>
          </div>
        </div>
        {/* Overlay*/}
        {menuOpen && (
          <div
            className="fixed inset-0 bg-black/40 z-40"
            onClick={() => setMenuOpen(false)}
          ></div>
        )}
      </div>
    </>
  );
}
