"use client";
interface InputProps {
  placeholder?: string;
  type?: string;
  ClassName?: string;
}
const InputField = ({ placeholder, type, ClassName }: InputProps) => {
  return (
    <div className={`w-full mb-3 ${ClassName}`}>
      <input
        type={type}
        name="phoneNumber"
        placeholder={placeholder}
        className="border border-borderColor px-3 py-2 max-w-full w-full text-font15 text-textColor placeholder:text-lightText font-normal placeholder:capitalize bg-whiteColor focus:outline-none rounded-lg"
      />
    </div>
  );
};

export default InputField;
