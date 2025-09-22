"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { GoHomeFill } from "react-icons/go";
import { BsImage } from "react-icons/bs";
import { TbVideoFilled, TbPencilDiscount } from "react-icons/tb";
import { MdFolder } from "react-icons/md";
import { GiChisel } from "react-icons/gi";
import { DiAppstore } from "react-icons/di";

export default function Icons() {
  const pathname = usePathname();

  const links = [
    { href: "/", icon: <GoHomeFill />, label: "Home" },
    { href: "/gallery", icon: <BsImage />, label: "Image" },
    { href: "/videos", icon: <TbVideoFilled />, label: "Videos" },
    { href: "/tools", icon: <GiChisel />, label: "Enhancer" },
    { href: "/discounts", icon: <TbPencilDiscount />, label: "Realtime" },
    { href: "/apps", icon: <DiAppstore />, label: "Edit" },
    { href: "/files", icon: <MdFolder />, label: "Assets" },
  ];

  return (
    <div>
      <ul className="flex items-center flex-col lg:flex-row justify-center lg:bg-[#f6f6f6] lg:h-[40px] rounded-[10px]">
        {links.map((link, i) => {
          const isActive = pathname === link.href;

          return (
            <li key={i} className="relative group">
              <Link
                href={link.href}
                className={`flex items-center justify-start lg:justify-center rounded-[10px] py-2 px-4 lg:mx-[5px] my-[10px] hover:bg-white hover:text-black transition 
                  ${
                    isActive
                      ? "bg-white text-black"
                      : "text-black dark:text-[#c9cbd0] lg:dark:text-black"
                  }`}
              >
                {link.icon}
              </Link>

              {/* Tooltip */}
              <span className="absolute left-1/2 -translate-x-1/2 mt-[5px] text-[10px] bg-black dark:bg-[#c9cbd0] text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition pointer-events-none whitespace-nowrap">
                {link.label}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
