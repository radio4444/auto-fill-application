// I created button component
import { cn } from "@/libs/utils";
import { ComponentPropsWithoutRef, ReactNode } from "react";

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  /** * Inherits all standard HTML button attributes while 
   * adding custom styling variants. 
   */
  variant?: "primary" | "secondary" | "danger" ;
  children: ReactNode;
}

const sharedStyle = "text-[#000000] active:scale-95"

const variantStyles = {
  primary: `${sharedStyle} bg-[#5F5E59] hover:bg-[#494A47] active:bg-[#A4A5A3]`,
  secondary: `${sharedStyle} bg-[#2383E2] hover:bg-[#1C69B5] active:bg-[#89A1B8]`,
  danger: `${sharedStyle} bg-[#5F5E59] text-[#FF0000] hover:bg-[#494A47] active:bg-[#A4A5A3]`
};

export default function Button({
  variant = "primary",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        //Remember, cn() is a function. It takes a list of strings and combines them
        "rounded-lg p-2.5 font-[Segoe_UI] text-[24px]/[30px] font-semibold w-full",
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

/**
 * Color Palette Mapping
 * * | Name           | Hex      | Tailwind Class |
 * | :------------- | :------- | :------------- |
 * | Cararra        | #F0EFED  | stone-100      |
 * | Cod Gray       | #191919  | neutral-900    |
 * | Tuatara        | #30302E  | neutral-800    |
 * | Tuatara Light  | #3D3D3B  | neutral-700    |
 * | Chicago        | #5F5E59  | stone-600      |
 * | Curious Blue   | #2383E2  | blue-500       |
 * | Fuscous Gray   | #494A47  | neutral-600    |
 * | Mineshaft      | #262626  | neutral-800    |
 * | Delta          | #A4A5A3  | neutral-400    |
 * | Fun Blue       | #1C69B5  | sky-700        |
 * | Bali Hai       | #89A1B8  | slate-400      |
 * | Silver         | #C3C3C3  | neutral-300    |
 * | Dove Grey      | #6E6E6E  | neutral-500    |
 * | Black          | #000000  | black          |
 * | Red            | #FF0000  | red-600        |
 */
