"use client";
import { FaEnvelope, FaPhone } from "react-icons/fa6";
import { PiMapPinFill } from "react-icons/pi";
const ContactInfo = () => {
  return (
    <div className="bg-whiteColor w-full pt-10 pb-6">
      <div className="container lg:max-w-280 xl:max-w-305 2xl:max-w-screen-2xl relative px-4 mx-auto">
        <div className="w-full bg-lightGreen p-5 rounded-xl border border-borderColor/30">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-3.5">
            <div className="w-full">
              <h3 className="text-textColor text-font25 leading-8.75 xl:text-font30 font-bold capitalize xl:leading-10 max-w-90 w-full mb-3">
                You have questions, we have answers
              </h3>
              <p className="text-textColor text-font17 font-normal text-start leading-6.75 w-full max-w-100">
                Connect with Neomanthan team for onboarding, services, or
                support. We're here to help you grow.
              </p>
            </div>
            <div className="w-full mt-5 md:mt-0">
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-green flex items-center justify-center shrink-0 group-hover:bg-textColor transition-all duration-500 ease-in-out">
                    <FaPhone className="text-whiteColor size-5" />
                  </div>
                  <div>
                    <p className="text-lightText text-font15 font-normal mb-1">
                      Contact Number
                    </p>
                    <h3 className="text-textColor text-font15 md:text-font17 font-semibold leading-6.75">
                      +91-812 816 8787
                    </h3>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-green flex items-center justify-center shrink-0 group-hover:bg-textColor transition-all duration-500 ease-in-out">
                    <FaEnvelope className="text-whiteColor size-5" />
                  </div>
                  <div>
                    <p className="text-lightText text-font15 font-normal mb-1">
                      Email Address
                    </p>
                    <h3 className="text-textColor text-font15 md:text-font17 font-semibold leading-6.75">
                      support@neomanthan.in
                    </h3>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4 mt-8 group">
                <div className="w-12 h-12 rounded-full bg-green flex items-center justify-center shrink-0 group-hover:bg-textColor transition-all duration-500 ease-in-out">
                  <PiMapPinFill className="text-whiteColor size-6" />
                </div>
                <div>
                  <p className="text-lightText text-font15 font-normal mb-1">
                    Location
                  </p>
                  <h3 className="text-textColor text-font15 md:text-font17 font-semibold leading-6.75">
                    Shop No - 13 Snehmudra Soc, Kapodra Varachha Road, Surat
                    Gujarat India 395006
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
