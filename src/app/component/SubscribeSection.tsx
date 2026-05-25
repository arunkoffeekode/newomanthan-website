// "use client";
// import subscribeImg from "@/img/subscribeImg.jpg";
// import Image from "next/image";
// import InputField from "./InputField";
// const SubscribeSection = () => {
//   return (
//     <div className="bg-whiteColor w-full py-10">
//       <div className="container lg:max-w-280 xl:max-w-305 2xl:max-w-screen-2xl relative px-4 mx-auto">
//         <div className="border border-borderColor w-full rounded-[20px] overflow-hidden">
//           <div className="grid grid-cols-1 md:grid-cols-2 items-center">
//             <div className="w-full p-6">
//               <h2 className="text-green font-bold capitalize text-font27 leading-9.25 md:text-font40 md:leading-12.5 lg:text-font45 lg:leading-13.75 mb-2 max-w-170 w-full">
//                 Ready to move <br /> faster
//               </h2>
//               <p className="text-textColor text-font17 font-normal text-start leading-6.75 max-w-120 w-full mb-5">
//                 Join thousands of people who've simplified how they send money.
//               </p>
//               <div className="block md:flex items-center gap-x-3 w-full relative mb-4">
//                 <InputField
//                   placeholder="Enter your email"
//                   type="text"
//                   ClassName="max-w-100 mb-0!"
//                 />
//                 <button
//                   type="button"
//                   className="bg-green border border-green text-center text-whiteColor text-font14 px-3 py-1.5 font-medium tracking-[1px] uppercase leading-6 rounded-[5px] cursor-pointer hover:bg-textColor hover:border-textColor transition-all duration-700 ease-in-out md:block hidden"
//                 >
//                   get started
//                 </button>
//               </div>
//               <p className="text-textColor text-font17 font-normal text-start leading-6.75 max-w-120 w-full mb-5">
//                 By clicking Get started you're confirming that you agree with
//                 our Terms and Conditions.
//               </p>
//             </div>
//             <div className="w-full">
//               <Image src={subscribeImg} width={0} height={0} alt="" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SubscribeSection;
"use client";

import subscribeImg from "@/img/subscribeImg.jpg";
import Image from "next/image";
import InputField from "./InputField";

const SubscribeSection = () => {
  return (
    <section className="bg-whiteColor w-full py-10">
      <div className="container lg:max-w-280 xl:max-w-305 2xl:max-w-screen-2xl px-4 mx-auto">
        <div className="border border-borderColor rounded-3xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
            {/* Left Content */}
            <div className="w-full p-6 sm:p-8 lg:p-8 xl:p-12">
              <h2 className="text-green font-bold capitalize text-font27 leading-9.25 md:text-font40 md:leading-12.5 lg:text-font45 lg:leading-13.75 mb-2 max-w-170 w-full">
                Ready to move <br /> faster
              </h2>

              <p className="text-textColor text-font17 font-normal text-start leading-6.75 max-w-120 w-full mb-5">
                Join thousands of people who've simplified how they send money.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full mb-5">
                <div className="w-full sm:flex-1 max-w-100">
                  <InputField
                    placeholder="Enter your email"
                    type="text"
                    ClassName="w-full mb-0! "
                  />
                </div>

                <button
                  type="button"
                  className="bg-green border border-green text-center text-whiteColor text-font14 px-3 py-1.5 font-medium tracking-[1px] uppercase leading-6 rounded-[5px] cursor-pointer hover:bg-textColor hover:border-textColor transition-all duration-700 ease-in-out"
                >
                  Get Started
                </button>
              </div>

              <p className="text-textColor text-font17 font-normal text-start leading-6.75 max-w-120 w-full mb-0 lg:mb-5">
                By clicking Get started you're confirming that you agree with
                our Terms and Conditions.
              </p>
            </div>

            {/* Right Image */}
            <div className="w-full h-full">
              <Image
                src={subscribeImg}
                alt="Subscribe"
                width={800}
                height={700}
                className="w-full h-[300px] sm:h-[400px] lg:h-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubscribeSection;
