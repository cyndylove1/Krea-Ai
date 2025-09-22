import { IoIosArrowDown, IoMdClose } from "react-icons/io";
import Radius from "./radius";
import Icons from "./icons";
import Support from "./support";

interface MobileNavbarProps {
  menuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function MobileNavbar({
  menuOpen,
  setMenuOpen,
}: MobileNavbarProps) {
  return (
    <>
      <div className="lg:hidden flex">
        <div
          className={`fixed top-0 right-0 h-full w-[250px] bg-[#f6f6f6] dark:bg-[#0f172a] transform transition-transform duration-500 z-50 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          } overflow-y-auto`}
        >
          {/* Close button */}
          <div className="flex justify-between items-center px-2 py-4 text-black dark:text-white">
            <div className="flex items-center space-x-1 focus:outline-none text-black dark:text-white">
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

        {/* Overlay */}
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
