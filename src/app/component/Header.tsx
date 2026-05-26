"use client";
import logo from "@/img/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { HiBars3CenterLeft } from "react-icons/hi2";
import Sidebar from "./Sidebar";

const Header = () => {
  const [close, setClose] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <div
        className={`w-full px-4  fixed top-0 z-50 border-b border-borderColor bg-whiteColor py-3 shadow-sm transition-all duration-500 ease-in-out
      `}
      >
        <div className="flex items-center justify-between">
          <div className="relative">
            <Image
              src={logo}
              width={180}
              height={43}
              alt="logo"
              className="max-w-30 md:max-w-40 xl:max-w-45 w-full cursor-pointer"
              onClick={() => router.push("/")}
            />
          </div>
          <div className="relative hidden lg:block">
            <ul className="m-0 p-0 gap-x-8.5 flex items-center">
              <li className="text-font17 font-normal capitalize cursor-pointer">
                <Link
                  href="/"
                  className={`${
                    pathname === "/"
                      ? " text-green hover:text-green font-medium"
                      : "text-textColor hover:text-green transition-all duration-500 ease-in-out"
                  }`}
                >
                  Home
                </Link>
              </li>
              <li className="text-font17 font-normal capitalize cursor-pointer">
                <Link
                  href="/about"
                  className={`${
                    pathname === "/about"
                      ? "text-green hover:text-green font-medium"
                      : "text-textColor hover:text-green transition-all duration-500 ease-in-out"
                  }`}
                >
                  About us
                </Link>
              </li>
              <li className="text-font17 font-normal capitalize cursor-pointer">
                <Link
                  href="/services"
                  className={`${
                    pathname === "/services"
                      ? "text-green hover:text-green font-medium"
                      : "text-textColor hover:text-green transition-all duration-500 ease-in-out"
                  }`}
                >
                  Services
                </Link>
              </li>
              <li className="text-font17 font-normal capitalize cursor-pointer">
                <Link
                  href="/contact"
                  className={`${
                    pathname === "/contact"
                      ? "text-green hover:text-green font-medium"
                      : "text-textColor hover:text-green transition-all duration-500 ease-in-out"
                  }`}
                >
                  contact us
                </Link>
              </li>
            </ul>
          </div>
          <div className="relative flex items-center gap-x-2 md:gap-x-3.5">
            <button
              type="button"
              className="bg-green border border-green text-center text-whiteColor text-font14 px-3 py-1.5 font-medium tracking-[1px] uppercase leading-6 rounded-[5px] cursor-pointer hover:bg-textColor hover:border-textColor transition-all duration-700 ease-in-out md:block hidden"
            >
              login
            </button>
            <button
              type="button"
              className="bg-whiteColor border border-green text-center text-green text-font14 px-3 py-1.5 font-medium tracking-[0.5px] uppercase leading-6 rounded-[5px] cursor-pointer hover:bg-textColor hover:text-whiteColor hover:border-textColor transition-all duration-700 ease-in-out md:block hidden"
            >
              Download App
            </button>
            <button
              type="button"
              aria-label="Open menu"
              className="border border-green min-w-8 cursor-pointer  h-8 flex items-center justify-center lg:hidden"
              onClick={() => setClose(true)}
            >
              <HiBars3CenterLeft className="text-green size-6" />
            </button>
          </div>
        </div>
      </div>
      {close && (
        <div className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-start items-center w-full md:inset-0 h-[calc(100%-0rem)] max-h-full flex bg-black/50 transition-opacity duration-700 ease-in-out lg:hidden">
          <div className="fixed top-0 bottom-0 right-0 z-50 lg:hidden bg-lightWhite max-w-68.75 w-full border border-borderColor border-t-0 border-s-0 border-b-0 lg:border-e-0">
            <Sidebar setClose={setClose} close={close} />
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
