"use client";

import feature1 from "@/img/feature/feature-1.jpg";
import {
  default as feature2,
  default as feature3,
} from "@/img/feature/feature-2.jpg";
import Image from "next/image";

const features = [{ img: feature1 }, { img: feature2 }, { img: feature3 }];
const FeatureSection = () => {
  return (
    <>
      <div className="bg-lightGray w-full py-10">
        <div className="container lg:max-w-280 xl:max-w-305 2xl:max-w-screen-2xl relative px-4 mx-auto overflow-x-hidden">
          <div className="w-full text-center mb-8 max-w-212.5 mx-auto">
            <h2 className="text-green font-bold text-font27 leading-9.25 md:text-font40 md:leading-12.5 lg:text-font45 lg:leading-13.75 mb-2 ">
              Powerful Features with That Empower Your Business.
            </h2>
            <p className="text-textColor text-font17 font-normal text-center leading-6.75">
              OGC Private Limited empowers shopkeepers, students, and
              entrepreneurs to launch a digital B2B fintech business with
              minimal investment offering recharges, bill payments, money
              transfers, and loans.
            </p>
          </div>
          <div className="w-full">
            <div className="grid grid-cols-3 gap-x-3">
              {features.map((item, index) => (
                <div className="w-full" key={index}>
                  <Image src={item.img} width={0} height={0} alt="" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeatureSection;
