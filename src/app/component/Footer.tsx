"use client";
import logo from "@/img/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { BiLogoFacebookSquare } from "react-icons/bi";
import { FaEnvelope, FaPhone } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { PiInstagramLogoFill, PiMapPinFill } from "react-icons/pi";

const Footer = () => {
  const router = useRouter();
  return (
    <div className="bg-lightGreen w-full">
      <div className="container lg:max-w-280 xl:max-w-305 2xl:max-w-screen-2xl py-8 relative px-4 mx-auto overflow-x-hidden">
        <div className="w-full">
          <div className="grid grid-cols-12 gap-x-4">
            <div className="col-span-full lg:col-span-5">
              <div className="w-full">
                <div className="relative mb-3">
                  <Image
                    src={logo}
                    width={0}
                    height={0}
                    alt="logo"
                    className="max-w-60 w-full"
                  />
                </div>
                <p className="text-textColor text-font17 leading-6.75 mb-4 text-start lg:max-w-108 2xl:max-w-125 w-full">
                  We are an India-based utility service provider offering bill
                  payments for electricity, gas, water, broadband, insurance,
                  FASTag, and more, with a rapidly growing presence in the
                  market.
                </p>

                <div className="flex items-center gap-x-2 lg:mb-0 md:mb-5 mb-2">
                  <h6 className="text-textColor capitalize text-font17 leading-6.75 font-semibold">
                    Social Media
                  </h6>
                  <Link
                    href="#"
                    target="_blank"
                    className="max-w-9 h-9 border border-lightGreen w-full bg-green rounded-full flex items-center justify-center cursor-pointer hover:bg-textColor hover:border-textColor group transition-all duration-500 ease-in-out"
                  >
                    <BiLogoFacebookSquare className="text-white size-5.5" />
                  </Link>
                  <Link
                    href="#"
                    target="_blank"
                    className="max-w-9 h-9 border border-lightGreen w-full bg-green rounded-full flex items-center justify-center cursor-pointer hover:bg-textColor hover:border-textColor group transition-all duration-500 ease-in-out"
                  >
                    <PiInstagramLogoFill className="text-white size-5.5" />
                  </Link>
                  <Link
                    href="#"
                    target="_blank"
                    className="max-w-9 h-9 border border-lightGreen w-full bg-green rounded-full flex items-center justify-center cursor-pointer hover:bg-textColor hover:border-textColor group transition-all duration-500 ease-in-out"
                  >
                    <IoLogoWhatsapp className="text-white size-5.5" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-span-full md:col-span-4 lg:col-span-2">
              <div className="w-full relative">
                <h4 className="text-green text-font17 font-semibold mb-3 uppercase">
                  services
                </h4>
                <ul className="m-0 p-0">
                  <li className="text-textColor hover:pl-2 text-font16 font-normal capitalize mb-2 cursor-pointer hover:text-green transition-all duration-300 ease-in">
                    <Link href="#">AEPS</Link>
                  </li>
                  <li className="text-textColor hover:pl-2 text-font16 font-normal capitalize mb-2 cursor-pointer hover:text-green transition-all duration-300 ease-in">
                    <Link href="#">M-ATM</Link>
                  </li>
                  <li className="text-textColor hover:pl-2 text-font16 font-normal capitalize mb-2 cursor-pointer hover:text-green transition-all duration-300 ease-in">
                    <Link href="#">BBPS</Link>
                  </li>
                  <li className="text-textColor hover:pl-2 text-font16 font-normal capitalize mb-2 cursor-pointer hover:text-green transition-all duration-300 ease-in">
                    <Link href="#">Mobile & DTH Recharge</Link>
                  </li>
                  <li className="text-textColor hover:pl-2 text-font16 font-normal capitalize mb-2 cursor-pointer hover:text-green transition-all duration-300 ease-in">
                    <Link href="#">EMI Collection</Link>
                  </li>
                  <li className="text-textColor hover:pl-2 text-font16 font-normal capitalize mb-2 cursor-pointer hover:text-green transition-all duration-300 ease-in">
                    <Link href="#">CMS</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-span-full md:col-span-2 lg:col-span-2">
              <div className="w-full relative">
                <h4 className="text-green text-font17 font-semibold mb-3 uppercase">
                  CORPORATE
                </h4>
                <ul className="m-0 p-0">
                  <li className="text-textColor hover:pl-2 text-font16 font-normal capitalize mb-2 cursor-pointer hover:text-green transition-all duration-300 ease-in">
                    <Link href="/contact">Contact Us</Link>
                  </li>
                  <li className="text-textColor hover:pl-2 text-font16 font-normal capitalize mb-2 cursor-pointer hover:text-green transition-all duration-300 ease-in">
                    <Link href="/about">About Us</Link>
                  </li>
                  <li className="text-textColor hover:pl-2 text-font16 font-normal capitalize mb-2 cursor-pointer hover:text-green transition-all duration-300 ease-in">
                    <Link href="/faq">FAQ</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-span-full md:col-span-6 lg:col-span-3">
              <div className="w-full relative">
                <h4 className="text-green text-font17 font-semibold mb-3 uppercase">
                  contact
                </h4>
                <div className="flex items-center gap-x-4 mb-3.5">
                  <FaPhone className="text-green size-5" />
                  <Link
                    href={"tel:+918128168787"}
                    className="text-textColor text-font16 font-normal hover:text-green transition-all duration-400 ease-in-out"
                  >
                    +91-812 816 8787
                  </Link>
                </div>
                <div className="flex items-center gap-x-4 mb-3.5">
                  <FaEnvelope className="text-green size-5 shrink-0" />
                  <Link
                    href={"mailto:support@neomanthan.in"}
                    className="text-textColor text-font16 font-normal hover:text-green transition-all duration-400 ease-in-out"
                  >
                    support@neomanthan.in
                  </Link>
                </div>
                <div className="flex items-start gap-3 max-w-125">
                  <div className="mt-1">
                    <PiMapPinFill className="text-green size-6 shrink-0" />
                  </div>

                  <p className="text-textColor text-font16 leading-6.5 font-normal">
                    Shop No - 13 Snehmudra Soc, Kapodra Varachha Road, Surat
                    Gujarat India 395006
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full pt-3 border-t border-borderColor mt-2 md:mt-4">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-x-1">
            <div className="w-full flex flex-wrap items-center justify-center xl:justify-start gap-3 text-textColor font-medium uppercase text-font14 tracking-wide">
              <span
                className="cursor-pointer hover:text-green transition-colors"
                onClick={() => router.push("/privacy-policy")}
              >
                Privacy Policy
              </span>
              <span className="text-green">|</span>
              <span
                className="cursor-pointer hover:text-green transition-colors"
                onClick={() => router.push("/terms-conditions")}
              >
                Terms & Conditions
              </span>
              <span className="text-green">|</span>
              <span
                className="cursor-pointer hover:text-green transition-colors"
                onClick={() => router.push("/refund-cancellation")}
              >
                Refund & Cancellation Policy
              </span>
            </div>
            <p className="text-textColor text-font16 leading-6 font-normal text-center mt-2 xl:text-end w-full">
              © Copyright Neomanthan Systems Private Limited All Rights
              Reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
