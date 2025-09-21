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
    { href: "/", icon: <GoHomeFill /> },
    { href: "/gallery", icon: <BsImage /> },
    { href: "/videos", icon: <TbVideoFilled /> },
    { href: "/skills", icon: <GiChisel /> },
    { href: "/discounts", icon: <TbPencilDiscount /> },
    { href: "/apps", icon: <DiAppstore /> },
    { href: "/projects", icon: <MdFolder /> },
  ];

  return (
    <div className="w-full">
      <ul className="flex flex-col lg:flex-row w-full lg:bg-[#f6f6f6] lg:h-[40px] rounded-[10px]">
        {links.map((link, i) => {
          const isActive = pathname === link.href;

          return (
            <li key={i} className="w-full">
              <Link
                href={link.href}
                className={`flex items-center justify-start lg:justify-center h-[50px] px-4 transition
                  w-full lg:w-[30px]
                  ${
                    isActive
                      ? "bg-white text-black dark:bg-black dark:text-white"
                      : "text-black"
                  }`}
              >
                <span className="text-lg">{link.icon}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
