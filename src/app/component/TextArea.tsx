"use client";
interface InputProps {
  InputName?: string;
  placeholder?: string;
  ClassName?: string;
}
const TextArea = ({ placeholder, ClassName, InputName }: InputProps) => {
  return (
    <div className={`w-full mb-3 ${ClassName}`}>
      <textarea
        name={InputName}
        placeholder={placeholder}
        rows={3}
        className="border border-borderColor px-3 py-2 max-w-full w-full text-font15 text-textColor placeholder:text-lightText font-normal placeholder:capitalize bg-whiteColor focus:border-green focus:outline-none rounded-lg"
      />
    </div>
  );
};

export default TextArea;
