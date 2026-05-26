"use client";
import workImg from "@/img/work.jpg";
import workIcon1 from "@/img/workIcon-1.png";
import workIcon2 from "@/img/workIcon-2.png";
import workIcon3 from "@/img/workIcon-3.png";
import workIcon4 from "@/img/workIcon-4.png";
import Image from "next/image";

const steps = [
  {
    icon: workIcon1,
    title: "You initiate transfer",
    desc: "Tap send and the request enters our network instantly without delay.",
  },
  {
    icon: workIcon2,
    title: "We verify everything",
    desc: "Encryption checks your identity and confirms the destination account exists.",
  },
  {
    icon: workIcon3,
    title: "Money moves now",
    desc: "Funds transfer between banks in seconds using modern payment rails.",
  },
  {
    icon: workIcon4,
    title: "Recipient gets notified",
    desc: "They see the deposit arrive and receive confirmation that the transaction cleared.",
  },
];

const WorkSection = () => {
  return (
    <div className="bg-whiteColor w-full py-10">
      <div className="container lg:max-w-280 xl:max-w-305 2xl:max-w-screen-2xl relative px-4 mx-auto">
        <div className="w-full text-center mb-9">
          <p className="text-textColor text-center uppercase text-font16 font-medium mb-2">
            Why Choose Us?
          </p>
          <h2 className="text-green font-bold text-font27 leading-9.25 md:text-font40 md:leading-12.5 lg:text-font45 lg:leading-13.75 mb-2">
            How it works behind the scenes
          </h2>
          <p className="text-textColor text-font17 font-normal text-center leading-6.75">
            We handle the complexity so you don't have to. Your money moves
            through our system in real time, secured at every step.
          </p>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 items-center">
          <div className="flex flex-col gap-10">
            {steps.slice(0, 2).map((item, index) => (
              <div className="w-full" key={index}>
                <div className="w-full text-center">
                  <Image
                    src={item.icon}
                    width={0}
                    height={0}
                    alt="work"
                    className="w-full max-w-12 mx-auto"
                  />
                  <h3 className="text-font23 font-medium text-textColor leading-6.75 my-2">
                    {item.title}
                  </h3>
                  <p className="text-lightText text-font16">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center md:hidden lg:block group">
            <Image
              src={workImg}
              width={0}
              height={0}
              alt="How it works"
              className="w-full rounded-[20px] object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="flex flex-col gap-10">
            {steps.slice(2, 4).map((item, index) => (
              <div className="w-full" key={index}>
                <div className="w-full text-center">
                  <Image
                    src={item.icon}
                    width={0}
                    height={0}
                    alt="work"
                    className="w-full max-w-12 mx-auto"
                  />
                  <h3 className="text-font23 font-medium text-textColor leading-6.75 my-2">
                    {item.title}
                  </h3>
                  <p className="text-lightText text-font16">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkSection;
