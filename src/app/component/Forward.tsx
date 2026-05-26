"use client";
import InputField from "./InputField";

const Forward = () => {
  return (
    <div className="bg-whiteColor w-full py-6">
      <div className="container lg:max-w-280 xl:max-w-305 2xl:max-w-screen-2xl relative px-4 mx-auto">
        <div className="w-full bg-green py-6 md:py-10 px-4 rounded-[15px]">
          <h2 className="text-whiteColor text-center font-bold capitalize text-font27 leading-9.25 md:text-font30 md:leading-10 lg:text-font45 lg:leading-13.75 mb-5 w-full">
            Ready to move forward?
          </h2>
          <p className="text-textColor text-font17 font-normal text-center leading-6.75 w-full mb-5">
            Let us know what you need and we will make it happen
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-center gap-4 w-full">
            <div className="w-full sm:flex-1 max-w-[320px]">
              <InputField
                placeholder="Enter your Mobile Number"
                type="text"
                ClassName="w-full mb-0! "
              />
              {/* Error Msg */}
              {/* <p className="text-red-500 text-sm mt-1 ml-1 absolute">
                please Enter your Mobile Number
              </p> */}
            </div>

            <button
              type="button"
              className="bg-green border border-whiteColor text-center text-whiteColor text-font14 px-3 py-1.5 font-medium tracking-[1px] uppercase leading-6 rounded-[5px] cursor-pointer hover:bg-textColor hover:border-textColor transition-all duration-700 ease-in-out"
            >
              Schedule call
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forward;
