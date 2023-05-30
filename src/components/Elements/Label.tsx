import * as React from "react";

interface Props extends React.LabelHTMLAttributes<HTMLLabelElement> {}

const Label = (props: Props) => {
  return <label {...props} className={"text-gray-700 text-sm font-medium"} />;
};

export default Label;
