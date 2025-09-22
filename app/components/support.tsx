"use client";
import { useTheme } from "next-themes";
import { FiMoon } from "react-icons/fi";
import { BiSupport } from "react-icons/bi";
import { BsImage } from "react-icons/bs";
import { TbBellFilled } from "react-icons/tb";
import { MdLightMode } from "react-icons/md";
import Radius from "./radius";

interface SupportProps {
  hideIcon?: Boolean;
}

export default function Support({ hideIcon }: SupportProps) {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex items-center flex-col lg:flex-row gap-[7px]">
      <div className="flex items-center gap-[5px] bg-white dark:bg-[#1e1e1e] px-2 py-[5px] rounded-[6px] text-[12px] text-black dark:text-white">
        <span>
          <BsImage />
        </span>
        <h2>Gallery</h2>
      </div>

      <div className="flex items-center gap-[5px] bg-white dark:bg-[#1e1e1e] text-black dark:text-white px-2 py-[5px] rounded-[6px] text-[12px]">
        <span>
          <BiSupport />
        </span>
        <h2>Support</h2>
      </div>

      {!hideIcon && (
        <div className="flex items-center gap-[5px]">
          <div className="bg-[#f6f6f6] dark:bg-[#1e1e1e] text-black dark:text-white p-[6px] rounded-[5px]">
            <TbBellFilled />
          </div>

          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="bg-[#f6f6f6] dark:bg-[#1e1e1e] p-[6px] rounded-[5px]"
          >
            {theme === "dark" ? (
              <FiMoon className="text-white" />
            ) : (
              <MdLightMode className="text-black" />
            )}
          </button>

          <div>
            <Radius />
          </div>
        </div>
      )}
    </div>
  );
}
