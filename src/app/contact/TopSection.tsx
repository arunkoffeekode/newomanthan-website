"use client";
import gPay from "@/img/g-pay.png";
import Image from "next/image";
import ContactForm from "./ContactForm";
const TopSection = () => {
  return (
    <>
      <div className="w-full bg-[url('/contactImg.jpg')] relative bg-cover bg-center bg-no-repeat py-10 md:py-14">
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="container lg:max-w-280 xl:max-w-305 2xl:max-w-350 relative px-4 mx-auto">
          <div className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-3">
              <div className="w-full order-2 md:order-1">
                <h1 className="text-font25 leading-8.75 md:text-font30 md:leading-10 lg:text-font40 lg:leading-12.5 xl:text-[50px] xl:leading-15 font-semibold text-whiteColor capitalize mb-4 w-full max-w-140">
                  One Platform for UPI Cash Withdrawal & Money Remittance
                </h1>
                <h4 className="text-whiteColor text-font16 leading-6.5 lg:text-font18 lg:leading-7 font-normal w-full max-w-160">
                  700,000+ retailers. 28 states. UPI cash withdrawal in rural
                  areas, instant money remittance in cities, and digital
                  payments.
                </h4>
                <div className="w-full max-w-160 mt-5">
                  <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
                    <div className="w-full rounded-md bg-whiteColor px-4 py-2">
                      <h6 className="text-textColor capitalize text-font15 font-semibold leading-6 mb-1">
                        Annual Transaction
                      </h6>
                      <span className="text-green text-font30 leading-10 font-bold">
                        100M+
                      </span>
                    </div>
                    <div className="w-full rounded-md bg-whiteColor px-4 py-2">
                      <h6 className="text-textColor capitalize text-font15 font-semibold leading-6 mb-1">
                        states covered
                      </h6>
                      <span className="text-green text-font30 leading-10 font-bold">
                        28
                      </span>
                    </div>
                    <div className="w-full rounded-md bg-whiteColor px-4 py-2">
                      <h6 className="text-textColor capitalize text-font15 font-semibold leading-6 mb-1">
                        support
                      </h6>
                      <span className="text-green text-font30 leading-10 font-bold">
                        24x7
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-x-3 justify-start w-full max-w-160 mt-5">
                  <button type="button" className="cursor-pointer">
                    <Image
                      src={gPay}
                      width={0}
                      height={0}
                      alt="google-pay"
                      className="max-w-35 w-full"
                    />
                  </button>
                  <button
                    type="button"
                    className="bg-transparent border border-whiteColor text-center text-whiteColor text-font12 md:text-font14 px-3 py-1.5 font-medium tracking-[1px] uppercase leading-6 rounded-[5px] cursor-pointer hover:bg-green hover:border-green transition-all duration-700 ease-in-out"
                  >
                    explore services
                  </button>
                </div>
              </div>
              <div className="w-full flex justify-end order-1 md:order-2 mb-5 md:mb-0">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopSection;
