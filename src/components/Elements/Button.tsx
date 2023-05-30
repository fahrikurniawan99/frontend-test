import { cn } from "@/utils/cn";
import { cva, VariantProps } from "class-variance-authority";
import * as React from "react";

export const ButtonStyle = cva(
  "px-4 h-10 py-2 rounded-md text-sm font-medium inline-flex justify-center items-center disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "text-white bg-blue-600 hover:bg-blue-500",
        secondary: "text-gray-700 bg-gray-100 hover:bg-gray-100",
        outline: "text-blue-600 hover:opacity-60 border-blue-600 border",
        destructive: "text-white bg-[#f90606] hover:bg-[#ff2929]",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);

interface Props
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof ButtonStyle> {}

const Button = React.forwardRef<HTMLButtonElement, Props>(
  ({ variant, className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(ButtonStyle({ variant, className }))}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export default Button;
