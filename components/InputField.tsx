import { cn } from "@/libs/utils";
import { ComponentPropsWithoutRef, useId } from "react";

interface InputFieldProps extends ComponentPropsWithoutRef<"input"> {
  type: "text" | "number" | "email" | "tel" | "url" | "date";
  name: string;
  label: string;
  divClassName?: string;
  labelClassName?: string;
  inputClassName?: string;
}

function InputField({
  label,
  type,
  name,
  placeholder = "Your Input",
  divClassName,
  labelClassName,
  inputClassName,
  ...props
}: InputFieldProps) {
  const id = useId();
  return (
    <div
      className={cn(
        "rounded-lg grid grid-row-2 gap-2.5 ps-7.5 pr-5 pt-2.5 pb-4 bg-[#6E6E6E]",
        divClassName
      )}
    >
      <label
        htmlFor={id}
        className={cn(
          "rounded-lg font-[Segoe_UI] text-[24px]/[30px] text-[#000000] font-semibold transition",
          labelClassName
        )}
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        name={name}
        autoComplete="on"
        className={cn(
          "rounded-lg p-2.5 font-[Segoe_UI] text-[16px]/[24px] text-[#F0EFED] font-semibold border-2 border-[#262626] focus:outline-none focus:border focus:border-[#2383E2]",
          inputClassName
        )}
        {...props}
      ></input>
    </div>
  );
}

export default InputField;

// What else can be in input interface?
// TailwindCSS for input
