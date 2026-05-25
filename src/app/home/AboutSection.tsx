"use client";
import aboutImg from "@/img/about.jpg";
import Image from "next/image";

const AboutSection = () => {
  return (
    <div className="bg-whiteColor w-full py-10">
      <div className="container lg:max-w-280 xl:max-w-305 2xl:max-w-screen-2xl relative px-4 mx-auto">
        <div className="w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-3.5">
            <div className="w-full md:mb-5 lg:mb-0">
              <p className="text-textColor text-start uppercase text-font16 font-medium mb-2">
                about us
              </p>
              <h2 className="text-green font-bold capitalize text-font27 leading-9.25 md:text-font40 md:leading-12.5 lg:text-font45 lg:leading-13.75 mb-2 max-w-170 w-full">
                Built by people who got tired of waiting
              </h2>
              <p className="text-lightText text-font17 font-normal text-start leading-6.75 max-w-170 w-full mb-5">
                We started here because the old way of moving money felt broken.
                Banks moved slowly. Apps demanded too much from you. So we built
                something different, something that respects your time and works
                the way you think it should.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-x-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-green mt-2 shrink-0"></span>
                  <p className="text-textColor text-font16 font-normal leading-[1.6]">
                    Founded on frustration with broken systems
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-green mt-2 shrink-0"></span>
                  <p className="text-textColor text-font16 font-normal leading-[1.6]">
                    Designed for people who value their time
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-green mt-2 shrink-0"></span>
                  <p className="text-textColor text-font16 font-normal leading-[1.6]">
                    Built to work the way money should move
                  </p>
                </li>
              </ul>
              <div className="flex items-center gap-x-3 justify-start mt-7">
                <button
                  type="button"
                  className="bg-green border border-green text-center text-whiteColor text-font14 px-3 py-1.5 font-medium tracking-[1px] uppercase leading-6 rounded-[5px] cursor-pointer hover:bg-textColor hover:border-textColor transition-all duration-700 ease-in-out md:block hidden"
                >
                  discover
                </button>
                <button
                  type="button"
                  className="bg-whiteColor border border-green text-center text-green text-font14 px-3 py-1.5 font-medium tracking-[0.5px] uppercase leading-6 rounded-[5px] cursor-pointer hover:bg-textColor hover:text-whiteColor hover:border-textColor transition-all duration-700 ease-in-out md:block hidden"
                >
                  explore
                </button>
              </div>
            </div>
            <div className="w-full">
              <Image src={aboutImg} width={0} height={0} alt="about" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
