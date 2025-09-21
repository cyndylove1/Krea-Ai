import { MdLibraryBooks } from "react-icons/md";
import { SiMatomo } from "react-icons/si";
import { PiVideoFill } from "react-icons/pi";
import Logo from "./logo";
export default function Footer() {
  return (
    <>
      {/* gallery */}
      <div className="px-4 pt-8 flex justify-between items-center pb-4">
        <h2 className="text-[16px] font-bold">Gallery</h2>
        <div className="flex items-center gap-[10px]">
          <div className="flex items-center bg-[#efefef] text-black py-[5px] px-2 rounded-full gap-[3px]">
            <MdLibraryBooks size={12} />
            <h2 className="text-[10px]">Legal</h2>
          </div>
          <div className="flex items-center bg-[#efefef] text-black py-[5px] px-2 rounded-full gap-[3px]">
            <PiVideoFill size={12} />
            <h2 className="text-[10px]">Pricing</h2>
          </div>
        </div>
      </div>
      {/* footer logo */}
      <div className="h-[60px] bg-[#2f2f2f] flex justify-between items-center p-4">
        <div className="flex items-center gap-2">
          <svg
            aria-label="Krea Logo"
            viewBox="0 0 24 24"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
            className="md:w-[30px] md:h-[30px] w-[20px] h-[30px]"
          >
            <path
              d="M8.34 1.266c1.766-.124 3.324 1.105 3.551 2.802.216 1.612-.887 3.171-2.545 3.536-.415.092-.877.066-1.317.122a4.63 4.63 0 0 0-2.748 1.34l-.008.004-.01-.001-.006-.005-.003-.009q0-.009.005-.016a.04.04 0 0 0 .007-.022 438 438 0 0 1-.01-4.541c.003-1.68 1.33-3.086 3.085-3.21"
              className="svelte-19jj75f"
            ></path>
            <path
              d="M8.526 15.305c-2.247-.018-3.858-2.23-3.076-4.3a3.31 3.31 0 0 1 2.757-2.11c.384-.04.845-.03 1.215-.098 1.9-.353 3.368-1.806 3.665-3.657.066-.41.031-.9.128-1.335.449-2.016 2.759-3.147 4.699-2.236 1.011.476 1.69 1.374 1.857 2.447q.051.33.034.818c-.22 5.842-5.21 10.519-11.279 10.47m2.831.93a.04.04 0 0 1-.021-.02l-.001-.006.002-.006q0-.003.003-.004l.006-.003q3.458-.792 5.992-3.185.045-.042.083.007c.27.357.554.74.78 1.106a10.6 10.6 0 0 1 1.585 4.89q.037.53.023.819c-.084 1.705-1.51 3.08-3.31 3.09-1.592.01-2.992-1.077-3.294-2.597-.072-.36-.05-.858-.11-1.238q-.282-1.755-1.715-2.84zm-3.369 6.64c-1.353-.235-2.441-1.286-2.684-2.593a5 5 0 0 1-.05-.817V15.14q0-.021.016-.007c.884.786 1.814 1.266 3.028 1.346l.326.01c1.581.051 2.92 1.087 3.229 2.592.457 2.225-1.557 4.195-3.865 3.793"
              className="svelte-19jj75f"
            ></path>
          </svg>
          <h6 className="text-white md:text-[25px] text-[15px]">Krea AI</h6>
        </div>
        <div className="flex items-center gap-4">
          <h2 className="md:text-[20px] text-[12px] font-bold text-white">
            curated By
          </h2>
          <div className="flex items-center gap-2">
            <SiMatomo className="text-white md:text-[50px] text-[30px]" />
            <h2 className="md:text-[30px] text-[20px] text-white font-semibold">
              Mobbin
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}
