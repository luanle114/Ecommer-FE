import { Input } from "antd";
import React from "react";

const InputComponent = (props: any) => {
  const { placeholder, size, ...rest } = props;
  return (
    <Input
      size={size}
      placeholder={placeholder}
      style={{
        background: "#fff",
        borderRadius: "unset",
        borderColor: "white",
      }}
      {...rest}
    />
  );
};

export default InputComponent;
