import clsx from "clsx";
import * as React from "react";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, Props>(
  ({ className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={clsx(
          "outline-none px-3 py-[9px] w-full border border-gray-300 rounded-md focus:ring-[1.5px] focus:ring-gray-400 focus:ring-offset-2 text-sm text-gray-600",
          className
        )}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export default Input;
