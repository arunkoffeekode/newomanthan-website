"use client";

const neo = [
  {
    title: "All-in-One Bill Management",
    description:
      "A comprehensive solution for managing all your bill payments in one place.",
  },
  {
    title: "Fast, Secure & Reliable Transactions",
    description:
      "Transactions that are not only quick but also secure and reliable.",
  },
  {
    title: "Seamless User Experience",
    description:
      "A platform designed to deliver an intuitive and seamless user experience.",
  },
  {
    title: "24/7 Dedicated Support",
    description:
      "A dedicated support team ready to assist with any queries or concerns.",
  },
];
const WhyNeo = () => {
  return (
    <>
      <div className="bg-whiteColor w-full py-6">
        <div className="container lg:max-w-280 xl:max-w-305 2xl:max-w-screen-2xl relative px-4 mx-auto">
          <div className="w-full">
            <h2 className="text-green font-bold capitalize text-font27 leading-9.25 md:text-font40 md:leading-12.5 lg:text-font45 lg:leading-13.75 mb-2 ">
              Why Neomanthan ?
            </h2>
            <p className="text-lightText text-font17 font-normal text-start leading-6.75 w-full mb-3">
              At Neomanthan, we take pride in being a trusted partner for bill
              payment services, ensuring that our users can focus on what truly
              matters while we take care of their needs with precision and
              efficiency.
            </p>
            <p className="text-lightText text-font17 font-normal text-start leading-6.75 w-full mb-3">
              Let Neomanthan handle your bill payments, offering you peace of
              mind and more time for what’s important.
            </p>
          </div>
          <div className="w-full mt-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-4">
              {neo.map((item, index) => (
                <div
                  key={index}
                  className="w-full border border-borderColor mb-5 rounded-2xl p-5 shadow-xl group hover:shadow-md transition-all duration-300 min-h-37.5 flex flex-col"
                >
                  <h3 className="text-textColor text-font20 leading-7.5 md:text-[26px] md:leading-9 lg:text-[21px] lg:leading-7.75 2xl:text-[26px] 2xl:leading-9 font-bold mb-3 group-hover:text-green transition-all duration-500 ease-in-out">
                    {item.title}
                  </h3>

                  <p className="text-lightText text-font15 leading-6 font-normal group-hover:text-textColor transition-all duration-500 ease-in-out">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyNeo;
