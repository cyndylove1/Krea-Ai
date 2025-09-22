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
    { href: "", icon: <TbVideoFilled /> },
    { href: "", icon: <GiChisel /> },
    { href: "", icon: <TbPencilDiscount /> },
    { href: "", icon: <DiAppstore /> },
    { href: "", icon: <MdFolder /> },
  ];

  return (
    <div>
      <ul className="flex items-center flex-col lg:flex-row justify-center bg-[#f6f6f6] lg:h-[40px] rounded-[10px]">
        {links.map((link, i) => {
          const isActive = pathname === link.href;

          return (
            <li key={i} className="">
              <Link
                href={link.href}
                className={`flex items-center justify-start lg:justify-center rounded-[10px] py-2 px-4 lg:mx-[5px] my-[10px] hover:bg-white transition
                  ${
                    isActive
                      ? "bg-white text-black"
                      : "text-black"
                  }`}
              >
                {link.icon}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
