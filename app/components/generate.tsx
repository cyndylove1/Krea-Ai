import { IoIosArrowDown } from "react-icons/io";
export default function Generate() {
  return (
    <>
      <div className="px-4 pt-10 flex justify-between">
        <h2 className="text-[16px] font-bold text-black dark:text-[#c9cbd0]">
          Generate
        </h2>
        <div className="flex items-center text-[#689fe8]">
          <IoIosArrowDown className="text-[20px]" />
          <p className="text-[13px] font-bold">Show all</p>
        </div>
      </div>
    </>
  );
}
