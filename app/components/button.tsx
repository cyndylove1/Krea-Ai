import { ReactNode } from "react";
export interface ButtonProps {
  text?: ReactNode;
  type?: "button" | "submit" | "reset";
  className?: string;
}

export default function Button({ text, className, type }: ButtonProps) {
  return (
    <button type={type} className={`cursor-pointer rounded-full font-bold text-black ${className}`}>
      {text}
    </button>
  );
}
