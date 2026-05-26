"use client";
import aboutImg from "@/img/aboutLarge.jpg";
import Image from "next/image";
import Forward from "../component/Forward";
import SubscribeSection from "../component/SubscribeSection";
import WhyNeo from "./WhyNeo";

const AboutPage = () => {
  return (
    <>
      <section className="relative w-full bg-[url('/mainBanner.jpg')] bg-cover bg-center bg-no-repeat h-[75px] md:h-[170px] lg:h-[214px] xl:h-[298px] 2xl:h-[382px]"></section>
      <div className="bg-lightGray w-full py-6 md:py-10">
        <div className="container lg:max-w-280 xl:max-w-305 2xl:max-w-screen-2xl relative px-4 mx-auto">
          <div className="w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-3.5">
              <div className="w-full md:mb-5 lg:mb-0">
                <p className="text-textColor text-start uppercase text-font16 font-medium mb-2">
                  WHO WE ARE
                </p>
                <h2 className="text-green font-bold capitalize text-font27 leading-9.25 md:text-font40 md:leading-12.5 lg:text-font45 lg:leading-13.75 mb-2 max-w-170 w-full">
                  About us
                </h2>
                <p className="text-textColor text-font17 font-normal text-start leading-6.75 max-w-170 w-full mb-3">
                  At NeoManthan Systems, we believe technology should inspire
                  growth, simplify operations, and create meaningful impact. We
                  are a forward-thinking company dedicated to delivering
                  innovative digital and technology solutions that empower
                  businesses, entrepreneurs, and communities across India.
                </p>
                <p className="5text-textColor text-font17 font-normal text-start leading-6.75 max-w-170 w-full mb-3">
                  With a strong commitment to quality, reliability, and customer
                  satisfaction, we combine modern technology with strategic
                  thinking to help organizations adapt, grow, and succeed in an
                  ever-evolving digital world. Our focus is not only on building
                  solutions, but also on building long-term relationships based
                  on trust, innovation, and excellence.
                </p>
                <div className="w-full md:mb-5 lg:mb-0">
                  <h2 className="text-green font-bold capitalize text-font27 leading-9.25 md:text-font40 md:leading-12.5 lg:text-font45 lg:leading-13.75 mb-2 max-w-170 w-full">
                    Our Vision
                  </h2>
                  <p className="text-textColor text-font17 font-normal text-start leading-6.75 max-w-170 w-full mb-3">
                    Our vision is to become a trusted leader in technology and
                    digital innovation by creating impactful solutions that
                    shape the future of businesses and communities.
                  </p>
                  <p className="text-textColor text-font17 font-normal text-start leading-6.75 max-w-170 w-full mb-3">
                    NeoManthan Systems envisions a digitally empowered ecosystem
                    where technology bridges opportunities, accelerates growth,
                    and enables organizations to thrive with confidence in a
                    connected world.
                  </p>
                </div>
              </div>
              <div className="w-full mb-4 lg:mb-0">
                <Image
                  src={aboutImg}
                  width={0}
                  height={0}
                  alt="about"
                  className="w-full"
                />
              </div>
            </div>
            <div className="w-full md:mb-5 lg:mb-0">
              <h2 className="text-green font-bold capitalize text-font27 leading-9.25 md:text-font40 md:leading-12.5 lg:text-font45 lg:leading-13.75 mb-2 w-full">
                Our Mission
              </h2>
              <p className="text-textColor text-font17 font-normal text-start leading-6.75 w-full mb-3">
                Our mission is to empower businesses with smart, scalable, and
                efficient technology solutions that drive productivity and
                digital transformation.
              </p>
              <p className="text-textColor text-font17 font-normal text-start leading-6.75 w-full">
                NeoManthan Systems strives to create value through innovation,
                seamless connectivity, and customer-centric services that help
                organizations achieve sustainable growth. We are committed to
                delivering solutions that are reliable, future-ready, and
                accessible to businesses of every scale.
              </p>
            </div>
          </div>
        </div>
      </div>
      <WhyNeo />
      <Forward />
      <SubscribeSection />
    </>
  );
};

export default AboutPage;
