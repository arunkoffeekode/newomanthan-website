"use client";
import logo from "@/img/logo.svg";
import Image from "next/image";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const ServicesMultiple = [
  { img: logo },
  { img: logo },
  { img: logo },
  { img: logo },
  { img: logo },
  { img: logo },
  { img: logo },
  { img: logo },
];

const PartnerSection = () => {
  return (
    <section className="bg-lightGreen w-full overflow-hidden">
      <div className="container lg:max-w-280 xl:max-w-305 2xl:max-w-screen-2xl py-10 relative px-4 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="col-span-full lg:col-span-4">
            <div className="w-full">
              <h2 className="text-textColor text-font25 leading-8.75 xl:text-font30 font-bold capitalize xl:leading-10">
                Trusted by companies everywhere
              </h2>
              <div className="flex items-center gap-x-3 justify-start mt-7">
                <button
                  type="button"
                  className="bg-green border border-green text-center text-whiteColor text-font14 px-3 py-1.5 font-medium tracking-[1px] uppercase leading-6 rounded-[5px] cursor-pointer hover:bg-textColor hover:border-textColor transition-all duration-700 ease-in-out"
                >
                  PARTNERS
                </button>
                <button
                  type="button"
                  className="bg-transparent border border-green text-center text-green text-font14 px-3 py-1.5 font-medium tracking-[0.5px] uppercase leading-6 rounded-[5px] cursor-pointer hover:bg-textColor hover:text-whiteColor hover:border-textColor transition-all duration-700 ease-in-out"
                >
                  EXPLORE
                </button>
              </div>
            </div>
          </div>

          <div className="col-span-full lg:col-span-8 relative lg:-mr-47">
            <Swiper
              modules={[Autoplay]}
              loop={true}
              speed={4000}
              spaceBetween={20}
              slidesPerView={"auto"}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
              }}
              className="partnerSwiper"
            >
              {ServicesMultiple.map((item, index) => (
                <SwiperSlide key={index} className="w-60!">
                  <div className="bg-whiteColor rounded-[18px] border border-borderColor/50 h-30 flex items-center justify-center px-8">
                    <Image
                      src={item.img}
                      width={160}
                      height={50}
                      alt="Partner Logo"
                      className="object-contain"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerSection;
