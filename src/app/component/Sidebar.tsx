"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef } from "react";
import { IoClose } from "react-icons/io5";

const Sidebar = ({ setClose, close }: { setClose: any; close: any }) => {
  const outsideSidebar = useRef(null);
  const pathname = usePathname();
  return (
    <div>
      {close && (
        <div
          className="bg-whiteColor px-3 py-3 w-full max-w-68.75 fixed h-full top-0 overflow-y-scroll z-10 "
          ref={outsideSidebar}
        >
          <button
            type="button"
            className="w-7.5 h-7.5 flex justify-center items-center p-1 bg-green rounded-full"
            onClick={() => {
              setClose(!close);
            }}
          >
            <IoClose className="text-whiteColor text-font18 font-normal" />
          </button>
          <div className="relative pt-5">
            <ul className="ps-0">
              <li className="block mb-4">
                <Link
                  href="/"
                  className={`text-font16 font-normal capitalize cursor-pointer transition-all duration-300 ease-in hover:text-green ${
                    pathname === "/"
                      ? "text-green"
                      : " text-textColor hover:text-green"
                  }`}
                  onClick={() => setClose(false)}
                >
                  Home
                </Link>
              </li>
              <li className="block mb-4">
                <Link
                  href="/about"
                  className={`text-font16 font-normal capitalize cursor-pointer transition-all duration-300 ease-in hover:text-green ${
                    pathname === "/about"
                      ? "text-green"
                      : " text-textColor hover:text-green"
                  }`}
                  onClick={() => setClose(false)}
                >
                  About us
                </Link>
              </li>
              <li className="block mb-4">
                <Link
                  href="/services"
                  className={`text-font16 font-normal capitalize cursor-pointer transition-all duration-300 ease-in hover:text-green ${
                    pathname === "/services"
                      ? "text-green"
                      : " text-textColor hover:text-green"
                  }`}
                  onClick={() => setClose(false)}
                >
                  Services
                </Link>
              </li>
              <li className="block mb-4">
                <Link
                  href="/contact"
                  className={`text-font16 font-normal capitalize cursor-pointer transition-all duration-300 ease-in hover:text-green ${
                    pathname === "/contact"
                      ? "text-green"
                      : " text-textColor hover:text-green"
                  }`}
                  onClick={() => setClose(false)}
                >
                  contact us
                </Link>
              </li>
              <li className="block mb-4 w-full md:hidden">
                <Link
                  href="/"
                  className="bg-green border w-full flex border-green text-start text-whiteColor text-font14 px-3 py-1.5 font-medium tracking-[1px] uppercase leading-6 rounded-[5px] cursor-pointer hover:bg-textColor hover:border-textColor transition-all duration-700 ease-in-out"
                  onClick={() => setClose(false)}
                >
                  login
                </Link>
              </li>
              <li className="block mb-4 w-full md:hidden">
                <Link
                  href="/"
                  className="bg-green border w-full flex border-green text-start text-whiteColor text-font14 px-3 py-1.5 font-medium tracking-[1px] uppercase leading-6 rounded-[5px] cursor-pointer hover:bg-textColor hover:border-textColor transition-all duration-700 ease-in-out"
                  onClick={() => setClose(false)}
                >
                  Download App
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
