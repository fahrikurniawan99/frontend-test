import * as React from "react";
import Input from "./Input";
import { useField, ErrorMessage } from "formik";
import { cn } from "@/utils/cn";
import Label from "./Label";

interface Props {
  label?: string;
  id?: string;
  name: string;
  placeholder?: string;
  type?: "text" | "password";
  containerClassName?: string;
  disabled?: boolean;
}

const Field = React.forwardRef<HTMLInputElement, Props>(
  ({ label, type = "text", containerClassName, ...props }, ref) => {
    const [field, meta, helpers] = useField(props);
    return (
      <div className={cn(containerClassName)}>
        {label && <Label htmlFor={props.id}>{label}</Label>}
        <Input ref={ref} type={type} {...field} {...props} />
        <ErrorMessage name={props.name}>
          {(message) => (
            <span className="text-gray-500 text-sm">{message}</span>
          )}
        </ErrorMessage>
      </div>
    );
  }
);

Field.displayName = "Field";

export default Field;
