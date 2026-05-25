"use client";
import serviceImg1 from "@/img/servicesIcon/services-1.png";
import serviceImg2 from "@/img/servicesIcon/services-2.png";
import serviceImg3 from "@/img/servicesIcon/services-3.png";
import serviceImg4 from "@/img/servicesIcon/services-4.png";
import serviceImg5 from "@/img/servicesIcon/services-5.png";
import serviceImg6 from "@/img/servicesIcon/services-6.png";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const ServicesMultiple = [
  { img: serviceImg1, label: "Top Up" },
  { img: serviceImg2, label: "Electricity" },
  { img: serviceImg3, label: "Bill Payment" },
  { img: serviceImg4, label: "Loan" },
  { img: serviceImg5, label: "Recharge" },
  { img: serviceImg6, label: "DTH" },
  { img: serviceImg1, label: "Top Up" },
  { img: serviceImg2, label: "Electricity" },
  { img: serviceImg3, label: "Bill Payment" },
  { img: serviceImg4, label: "Loan" },
  { img: serviceImg5, label: "Recharge" },
];
const ServicesSection = () => {
  return (
    <div className="bg-lightGray w-full py-8 border-y border-borderColor">
      <div className="container lg:max-w-280 xl:max-w-305 2xl:max-w-screen-2xl relative px-4 mx-auto overflow-x-hidden">
        <div className="w-full text-center mb-8">
          <p className="text-textColor text-center uppercase text-font16 font-medium mb-2">
            SERVICES
          </p>
          <h2 className="text-green font-bold text-font27 leading-9.25 md:text-font40 md:leading-12.5 lg:text-font45 lg:leading-13.75 mb-2">
            What sets us apart
          </h2>
          <p className="text-textColor text-font17 font-normal text-center leading-6.75">
            Three core strengths that make payments effortless. Each one
            designed with you in mind.
          </p>
        </div>
      </div>
      <div className="w-full  overflow-hidden">
        <Swiper
          modules={[Autoplay]}
          loop={true}
          speed={4000}
          spaceBetween={18}
          slidesPerView={2}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          breakpoints={{
            480: {
              slidesPerView: 2,
            },
            640: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 4,
            },
            1024: {
              slidesPerView: 5,
            },
            1280: {
              slidesPerView: 6,
            },
            1440: {
              slidesPerView: 7,
            },
          }}
          className="overflow-visible!"
        >
          {ServicesMultiple.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="group bg-whiteColor rounded-[22px] border border-borderColor mb-2 h-45 flex flex-col items-center justify-center transition-all duration-300 hover:bg-[#F6F8EB] cursor-pointer">
                <div className="w-23 h-23 flex items-center justify-center mb-3">
                  <Image
                    src={item.img}
                    alt={item.label}
                    width={92}
                    height={92}
                    className="object-contain"
                  />
                </div>
              </div>
              <p className="text-textColor text-font15 text-center font-semibold">
                {item.label}
              </p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ServicesSection;
