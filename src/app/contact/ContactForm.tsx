"use client";
import InputField from "../component/InputField";
import TextArea from "../component/TextArea";

const ContactForm = () => {
  return (
    <div className="w-full bg-whiteColor rounded-xl p-5 max-w-120">
      <h2 className="text-font30 leading-10 text-green mb-1 font-semibold capitalize">
        Tell us more
      </h2>
      <p className="text-textColor text-font16 leading-6.75 font-normal">
        Fill out the form below and we will respond promptly
      </p>
      <form className="w-full mt-4">
        <InputField
          placeholder="Enter full name"
          type="text"
          InputName="name"
        />
        <InputField
          placeholder="Enter mobile no."
          type="text"
          InputName="name"
        />
        <InputField placeholder="Enter email" type="text" InputName="name" />
        <InputField placeholder="subject" type="text" InputName="name" />
        <TextArea placeholder="Message" InputName="name" />
        <div className="flex items-center gap-x-3 justify-center">
          <button
            type="button"
            className="bg-textColor border w-full border-textColor text-center text-whiteColor text-font14 px-3 py-1.5 font-medium tracking-[0.5px] uppercase leading-6 rounded-[5px] cursor-pointer hover:bg-green hover:text-whiteColor hover:border-green transition-all duration-700 ease-in-out"
          >
            Reset
          </button>
          <button
            type="button"
            className="bg-green border w-full border-green text-center text-whiteColor text-font14 px-3 py-1.5 font-medium tracking-[1px] uppercase leading-6 rounded-[5px] cursor-pointer hover:bg-textColor hover:border-textColor transition-all duration-700 ease-in-out"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
