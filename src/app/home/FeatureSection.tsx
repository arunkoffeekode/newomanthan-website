"use client";
import feature1 from "@/img/feature/feature-1.jpg";
import feature3 from "@/img/feature/feature-3.jpg";
import feature2 from "@/img/feature/feature-2.jpg";
import Image from "next/image";

const features = [
  {
    img: feature1,
    title: "Become An OGC\nPrivate Limited\nAgent",
  },
  {
    img: feature2,
    title: "Start Your Fintech\nBusiness",
  },
  {
    img: feature3,
    title: "Powerful Features\nThat Empower Your\nBusiness",
  },
];
const FeatureSection = () => {
  return (
    <>
      <div className="bg-lightGray w-full py-10">
        <div className="container lg:max-w-280 xl:max-w-305 2xl:max-w-screen-2xl relative px-4 mx-auto">
          <div className="w-full text-center mb-10 max-w-212.5 mx-auto">
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-3">
              {features.map((item, index) => (
                <div
                  className="w-full relative group mb-16 lg:mb-10"
                  key={index}
                >
                  <div className="relative md:h-85 md:max-w-80 lg:h-75 lg:max-w-70 xl:h-88 xl:max-w-83 2xl:h-107.5 2xl:max-w-md float-end w-full overflow-hidden rounded-xl md:rounded-[28px]">
                    <Image
                      src={item.img}
                      width={0}
                      height={0}
                      alt=""
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute -bottom-9 2xl:-bottom-12 left-3 bg-green rounded-[15px] px-5 py-3 max-w-75 w-full md:h-28 lg:h-31 group-hover:bg-lightText transition-all duration-500 ease-in-out">
                    <h3 className="text-whiteColor text-font20 leading-7.5 lg:text-font23 lg:leading-8 font-semibold whitespace-pre-line">
                      {item.title}
                    </h3>
                  </div>
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
