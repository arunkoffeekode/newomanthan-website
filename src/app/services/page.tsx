"use client";
import serviceBanner from "@/img/servicesIcon/services-banner.jpg";
import Image from "next/image";
import { useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import Forward from "../component/Forward";

const servicesData = [
  {
    title: "AEPS",
    image: serviceBanner,
    description:
      "AEPS allows customers to perform banking transactions using Aadhaar authentication securely and instantly.",

    features: [
      {
        id: "1.",
        title: "Cash Withdrawal",
        desc: "Customers can withdraw cash using Aadhaar number and biometric authentication.",
      },
      {
        id: "2.",
        title: "Balance Inquiry",
        desc: "Check account balance instantly without visiting the bank branch.",
      },
      {
        id: "3.",
        title: "Mini Statement",
        desc: "Get recent transaction details quickly and securely.",
      },
      {
        id: "4.",
        title: "Easy Access",
        desc: "Banking services available in rural and remote areas.",
      },
      {
        id: "5.",
        title: "Secure Transactions",
        desc: "Biometric authentication ensures secure banking.",
      },
      {
        id: "6.",
        title: "Interoperable Banking",
        desc: "Works with multiple banks across India.",
      },
    ],
  },

  {
    title: "M-ATM Services",
    image: serviceBanner,
    description:
      "Provide debit card-based banking services anytime through Micro ATM devices.",

    features: [
      {
        id: "1.",
        title: "Cash Withdrawal",
        desc: "Withdraw cash securely using debit cards.",
      },
      {
        id: "2.",
        title: "Balance Check",
        desc: "Check bank balance instantly through Micro ATM.",
      },
      {
        id: "3.",
        title: "Portable Device",
        desc: "Easy-to-carry banking solution for retailers.",
      },
      {
        id: "4.",
        title: "Secure PIN Verification",
        desc: "Transactions protected with PIN authentication.",
      },
      {
        id: "5.",
        title: "Rural Banking Support",
        desc: "Makes banking accessible in underserved areas.",
      },
      {
        id: "6.",
        title: "Instant Receipt",
        desc: "Customers receive transaction confirmation immediately.",
      },
    ],
  },

  {
    title: "BBPS",
    image: serviceBanner,
    description:
      "Manage all your bill payments in one place with complete security and convenience.",

    features: [
      {
        id: "1.",
        title: "One-Stop Platform",
        desc: "Pay electricity, gas, water, DTH, recharge, insurance, and more.",
      },
      {
        id: "2.",
        title: "Anytime Access",
        desc: "Available through apps, websites, wallets, and agent outlets.",
      },
      {
        id: "3.",
        title: "Secure And Reliable",
        desc: "Safe and standardized platform with instant confirmation.",
      },
      {
        id: "4.",
        title: "Interoperability",
        desc: "Pay any bill through any BBPS-enabled platform.",
      },
      {
        id: "5.",
        title: "Instant Confirmation",
        desc: "Get payment receipt instantly after transaction.",
      },
      {
        id: "6.",
        title: "Multiple Payment Modes",
        desc: "Supports UPI, cards, wallets, net banking, and cash.",
      },
    ],
  },

  {
    title: "Mobile & DTH Recharge",
    image: serviceBanner,
    description:
      "Fast and secure recharge services for prepaid mobile and DTH connections.",

    features: [
      {
        id: "1.",
        title: "Instant Recharge",
        desc: "Recharge completed within seconds.",
      },
      {
        id: "2.",
        title: "All Operators Supported",
        desc: "Supports major telecom and DTH providers.",
      },
      {
        id: "3.",
        title: "24/7 Availability",
        desc: "Recharge anytime without restrictions.",
      },
      {
        id: "4.",
        title: "Secure Payments",
        desc: "Safe and reliable payment gateway.",
      },
      {
        id: "5.",
        title: "Easy Interface",
        desc: "Simple recharge flow for retailers and users.",
      },
      {
        id: "6.",
        title: "Quick Confirmation",
        desc: "Instant recharge success notification.",
      },
    ],
  },

  {
    title: "EMI Collection",
    image: serviceBanner,
    description:
      "Enable customers to pay their loan EMIs quickly and securely.",

    features: [
      {
        id: "1.",
        title: "Multiple Loan Providers",
        desc: "Supports EMI payments for various banks and NBFCs.",
      },
      {
        id: "2.",
        title: "Instant Processing",
        desc: "EMI payments processed in real-time.",
      },
      {
        id: "3.",
        title: "Secure Transactions",
        desc: "Reliable and safe payment infrastructure.",
      },
      {
        id: "4.",
        title: "Receipt Generation",
        desc: "Instant payment confirmation receipt.",
      },
      {
        id: "5.",
        title: "Easy Payment Modes",
        desc: "Pay using UPI, cards, cash, or wallets.",
      },
      {
        id: "6.",
        title: "Convenient Service",
        desc: "Simple EMI collection for retailers and customers.",
      },
    ],
  },

  {
    title: "CMS",
    image: serviceBanner,
    description:
      "Cash Management Services designed for efficient collection and settlement.",

    features: [
      {
        id: "1.",
        title: "Fast Collection",
        desc: "Quick and efficient cash collection process.",
      },
      {
        id: "2.",
        title: "Real-Time Tracking",
        desc: "Track collections and settlements instantly.",
      },
      {
        id: "3.",
        title: "Secure Handling",
        desc: "Ensures safe cash management operations.",
      },
      {
        id: "4.",
        title: "Automated Reports",
        desc: "Generate detailed collection reports easily.",
      },
      {
        id: "5.",
        title: "Business Support",
        desc: "Suitable for retailers and enterprises.",
      },
      {
        id: "6.",
        title: "Reliable Network",
        desc: "Wide service availability across locations.",
      },
    ],
  },
];

const ServicesPage = () => {
  const [active, setActive] = useState(0);
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <div className="bg-whiteColor w-full py-6 md:py-10">
        <div className="container lg:max-w-280 xl:max-w-305 2xl:max-w-screen-2xl relative px-4 mx-auto">
          <div className="grid grid-cols-12 gap-x-3">
            <div className="col-span-full xl:col-span-3">
              <div className="w-full">
                <h2 className="text-green font-bold capitalize text-font27 leading-9.25 md:text-[35px] md:leading-11.25 mb-2 w-full">
                  Our Services
                </h2>

                <p className="text-textColor text-font16 font-normal text-start leading-6.75 w-full mb-5">
                  We provide secure, fast, and reliable digital payment and
                  financial solutions designed to help retailers and service
                  partners offer convenient banking and payment services to
                  customers.
                </p>

                {/* mobile view button */}
                <div className="xl:hidden mb-5">
                  <button
                    onClick={() => setOpenMenu(!openMenu)}
                    className="w-full flex items-center justify-between bg-green text-whiteColor px-3 py-2 rounded-lg"
                  >
                    <span className="font-medium">
                      {servicesData[active].title}
                    </span>

                    {openMenu ? (
                      <RxCross2 className="size-5" />
                    ) : (
                      <HiOutlineMenuAlt3 className="size-5" />
                    )}
                  </button>

                  {/* mobile dropdown */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openMenu
                        ? "max-h-125 opacity-100 mt-3"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="bg-whiteColor border border-borderColor rounded-2xl p-3 shadow-sm">
                      {servicesData.map((item, index) => {
                        const isActive = active === index;

                        return (
                          <button
                            key={index}
                            onClick={() => {
                              setActive(index);
                              setOpenMenu(false);
                            }}
                            className={`w-full text-left px-3 py-2 rounded-lg text-font14 mb-2 last:mb-0 transition-all duration-300 ${
                              isActive
                                ? "bg-green text-whiteColor"
                                : "bg-gray-50 text-textColor hover:bg-green/10"
                            }`}
                          >
                            {item.title}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* desktop view sidebar */}
                <div className="w-full hidden xl:block">
                  {servicesData.map((item, index) => {
                    const isActive = active === index;

                    return (
                      <div
                        key={index}
                        className="flex items-start gap-3 cursor-pointer group"
                        onClick={() => setActive(index)}
                      >
                        <div className="flex flex-col items-center">
                          <div
                            className={`w-5.5 h-5.5 rounded-full border-2 transition-all duration-300 ${
                              isActive
                                ? "bg-green border-green scale-110"
                                : "bg-lightText border-lightText"
                            }`}
                          />

                          {index !== servicesData.length - 1 && (
                            <div className="w-0.5 h-8 bg-lightText" />
                          )}
                        </div>

                        <div>
                          <div
                            className={`px-2 transition-all duration-300 ${
                              isActive ? "text-green" : "text-lightText"
                            }`}
                          >
                            <h3 className="text-font17 font-medium">
                              {item.title}
                            </h3>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="col-span-full xl:col-span-9">
              <div className="w-full mb-5">
                <Image
                  src={servicesData[active].image}
                  width={0}
                  height={0}
                  alt={servicesData[active].title}
                  className="rounded-[20px] w-full h-auto"
                />
              </div>

              <div className="w-full">
                <h2 className="text-green font-bold capitalize text-font27 leading-9.25 md:text-font30 md:leading-10 mb-1 w-full">
                  {servicesData[active].title}
                </h2>

                <p className="text-textColor text-font16 font-normal text-start leading-6.75 w-full mb-5">
                  {servicesData[active].description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {servicesData[active].features.map((item) => (
                    <div
                      key={item.id}
                      className="bg-whiteColor border border-borderColor rounded-[20px] p-5 shadow-sm transition-all duration-300"
                    >
                      <h2 className="text-green text-font30 font-bold leading-none mb-4">
                        {item.id}
                      </h2>

                      <h3 className="text-textColor text-[22px] font-semibold leading-tight mb-3">
                        {item.title}
                      </h3>

                      <p className="text-lightText text-font16 leading-7 font-normal">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Forward />
    </>
  );
};

export default ServicesPage;

// "use client";
// import serviceBanner from "@/img/servicesIcon/services-banner.jpg";
// import Image from "next/image";
// import Forward from "../component/Forward";
// import { useState } from "react";
// import { HiOutlineMenuAlt3 } from "react-icons/hi";
// import { RxCross2 } from "react-icons/rx";

// const services = [
//   "AEPS",
//   "M-ATM Services",
//   "BBPS",
//   "Mobile & DTH Recharge",
//   "EMI Collection",
//   "CMS",
// ];

// const ServicesPage = () => {
//   const [active, setActive] = useState(0);
//   const [openMenu, setOpenMenu] = useState(false);

//   return (
//     <>
//       <div className="bg-whiteColor w-full py-6 md:py-10">
//         <div className="container lg:max-w-280 xl:max-w-305 2xl:max-w-screen-2xl relative px-4 mx-auto">
//           <div className="grid grid-cols-12 gap-x-3">
//             {/* LEFT SIDE */}
//             <div className="col-span-full xl:col-span-3">
//               <div className="w-full">
//                 <h2 className="text-green font-bold capitalize text-font27 leading-9.25 md:text-[35px] md:leading-11.25 mb-2 w-full">
//                   Our Services
//                 </h2>

//                 <p className="text-textColor text-font16 font-normal text-start leading-6.75 w-full mb-5">
//                   We provide secure, fast, and reliable digital payment and
//                   financial solutions designed to help retailers and service
//                   partners offer convenient banking and payment services to
//                   customers.
//                 </p>

//                 {/* MOBILE BUTTON */}
//                 <div className="xl:hidden mb-5">
//                   <button
//                     onClick={() => setOpenMenu(!openMenu)}
//                     className="w-full flex items-center justify-between bg-green text-whiteColor px-3 py-2 rounded-lg"
//                   >
//                     <span className="font-medium">{services[active]}</span>

//                     {openMenu ? (
//                       <RxCross2 className="size-5" />
//                     ) : (
//                       <HiOutlineMenuAlt3 className="size-5" />
//                     )}
//                   </button>

//                   {/* MOBILE DROPDOWN */}
//                   <div
//                     className={`overflow-hidden transition-all duration-300 ${
//                       openMenu
//                         ? "max-h-125 opacity-100 mt-3"
//                         : "max-h-0 opacity-0"
//                     }`}
//                   >
//                     <div className="bg-whiteColor border border-borderColor rounded-2xl p-3 shadow-sm">
//                       {services.map((item, index) => {
//                         const isActive = active === index;

//                         return (
//                           <button
//                             key={index}
//                             onClick={() => {
//                               setActive(index);
//                               setOpenMenu(false);
//                             }}
//                             className={`w-full text-left px-3 py-2 rounded-lg text-font14 mb-2 last:mb-0 transition-all duration-300 ${
//                               isActive
//                                 ? "bg-green text-whiteColor"
//                                 : "bg-gray-50 text-textColor hover:bg-green/10"
//                             }`}
//                           >
//                             {item}
//                           </button>
//                         );
//                       })}
//                     </div>
//                   </div>
//                 </div>

//                 {/* DESKTOP SIDEBAR */}
//                 <div className="w-full hidden xl:block">
//                   {services.map((item, index) => {
//                     const isActive = active === index;

//                     return (
//                       <div
//                         key={index}
//                         className="flex items-start gap-3 cursor-pointer group"
//                         onClick={() => setActive(index)}
//                       >
//                         <div className="flex flex-col items-center">
//                           <div
//                             className={`w-5.5 h-5.5 rounded-full border-2 transition-all duration-300 ${
//                               isActive
//                                 ? "bg-green border-green scale-110"
//                                 : "bg-lightText border-lightText"
//                             }`}
//                           />

//                           {index !== services.length - 1 && (
//                             <div className="w-0.5 h-8 bg-lightText" />
//                           )}
//                         </div>

//                         <div>
//                           <div
//                             className={`px-2 transition-all duration-300 ${
//                               isActive ? "text-green" : "text-lightText"
//                             }`}
//                           >
//                             <h3 className="text-font17 font-medium">{item}</h3>
//                           </div>
//                         </div>
//                       </div>
//                     );
//                   })}
//                 </div>
//               </div>
//             </div>

//             {/* RIGHT SIDE */}
//             <div className="col-span-full xl:col-span-9">
//               <div className="w-full mb-5">
//                 <Image
//                   src={serviceBanner}
//                   width={0}
//                   height={0}
//                   alt="Services"
//                   className="rounded-[20px] w-full h-auto"
//                 />
//               </div>

//               <div className="w-full">
//                 <h2 className="text-green font-bold capitalize text-font27 leading-9.25 md:text-font40 md:leading-12.5 mb-1 w-full">
//                   {services[active]}
//                 </h2>

//                 <p className="text-textColor text-font16 font-normal text-start leading-6.75 w-full mb-5">
//                   Manage all your bill payments in one place. Electricity,
//                   water, gas, mobile, and more paid instantly with complete
//                   security.
//                 </p>

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
//                   {[
//                     {
//                       id: "1.",
//                       title: "One-Stop Platform",
//                       desc: "Pay all types of bills – electricity, gas, water, DTH, mobile recharge, broadband, FASTag, insurance, loan EMIs, etc.",
//                     },
//                     {
//                       id: "2.",
//                       title: "Anytime, Anywhere Access",
//                       desc: "Available through multiple channels banks, digital wallets, mobile apps, websites, and physical agent outlets.",
//                     },
//                     {
//                       id: "3.",
//                       title: "Secure And Reliable",
//                       desc: "Offers a safe and standardized platform with real-time payment confirmation.",
//                     },
//                     {
//                       id: "4.",
//                       title: "Interoperability",
//                       desc: "Customers can pay bills from any biller through any BBPS-enabled platform, regardless of the service provider.",
//                     },
//                     {
//                       id: "5.",
//                       title: "Instant Confirmation",
//                       desc: "Receipts are generated immediately after the transaction.",
//                     },
//                     {
//                       id: "6.",
//                       title: "Multiple Payment Options",
//                       desc: "Accepts payments via UPI, net banking, debit/credit cards, cash (through agents), and mobile wallets.",
//                     },
//                   ].map((item) => (
//                     <div
//                       key={item.id}
//                       className="bg-whiteColor border border-borderColor rounded-[20px] p-5 shadow-sm transition-all duration-300"
//                     >
//                       <h2 className="text-green text-font30 font-bold leading-none mb-4">
//                         {item.id}
//                       </h2>

//                       <h3 className="text-textColor text-[22px] font-semibold leading-tight mb-3">
//                         {item.title}
//                       </h3>

//                       <p className="text-lightText text-font16 leading-7 font-normal">
//                         {item.desc}
//                       </p>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <Forward />
//     </>
//   );
// };

// export default ServicesPage;
