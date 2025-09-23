"use client";
import { ReactNode } from "react";
import { BsImage, BsPersonArmsUp } from "react-icons/bs";
import { TbVideoFilled, TbPencilDiscount } from "react-icons/tb";
import { GiChisel } from "react-icons/gi";
import { DiAppstore } from "react-icons/di";
import { PiMicrophoneStageFill } from "react-icons/pi";
import { FcProcess } from "react-icons/fc";
import Button from "./button";

interface ToolCardProps {
  icon: ReactNode;
  title: string;
  desc: string;
  isNew?: boolean;
  bgColor: string;
}

const ToolCard = ({ icon, title, desc, isNew, bgColor }: ToolCardProps) => {
  return (
    <div
      className="flex items-center justify-between 
    "
    >
      <div className="flex items-start gap-3">
        {/* Icon */}
        <div className={`p-2 rounded-lg text-white ${bgColor}`}>{icon}</div>
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-[13px] font-semibold dark:text-[#c9cbd0] text-black">{title}</h3>
            {isNew && (
              <span className="text-[10px] bg-[#0060f2] text-white rounded-full px-2 py-[1px]">
                New
              </span>
            )}
          </div>
          <p className="text-[8px] text-gray-500 max-w-[200px]">{desc}</p>
        </div>
      </div>

      {/* open button */}
      <Button
        className="ml-4 py-[5px] px-4 text-[10px] bg-[#efefef]"
        text="Open"
        type="button"
      />
    </div>
  );
};

export default function ToolsGrid() {
  const tools = [
    {
      icon: <BsImage size={20} />,
      title: "Image",
      desc: "Generate images with custom styles in Flux and Ideogram.",
      isNew: true,
      bgColor: "bg-[#8c9eab]",
    },
    {
      icon: <TbVideoFilled size={18} />,
      title: "Video",
      desc: "Generate videos with Hailuo, Pika, Runway, Luma, and more.",
      bgColor: "bg-[#f5ac03]",
    },
    {
      icon: <TbPencilDiscount size={18} />,
      title: "Realtime",
      desc: "Realtime AI rendering on a camera. Instant feedback loops.",
      bgColor: "bg-[#61bfed]",
    },
    {
      icon: <GiChisel size={18} />,
      title: "Enhancer",
      desc: "Upscale and enhance images and videos up to 22K.",
      isNew: true,
      bgColor: "bg-[#434343]",
    },
    {
      icon: <DiAppstore size={18} />,
      title: "Edit",
      desc: "Add objects, change style, or expand photos and generations.",
      isNew: true,
      bgColor: "bg-[#361b56]",
    },
    {
      icon: <PiMicrophoneStageFill size={18} />,
      title: "Video Lipsync",
      desc: "Lip sync any video to any audio.",
      isNew: true,
      bgColor: "bg-[#2e5b53]",
    },
    {
      icon: <BsPersonArmsUp size={18} />,
      title: "Motion Transfer",
      desc: "Transfer motion to images and animate characters.",
      isNew: true,
      bgColor: "bg-[#1a1c1e]",
    },

    {
      icon: <FcProcess size={18} />,
      title: "Train",
      desc: "Teach Krea to replicate your style, products, or characters.",
      bgColor: "bg-[#d6cec9]",
    },
  ];

  return (
    <div className="grid grid-cols-1 items-center md:grid-cols-2 lg:grid-cols-4 gap-6 px-4 mt-6">
      {tools.map((tool, i) => (
        <ToolCard key={i} {...tool} />
      ))}
    </div>
  );
}
