import { Button } from "antd";
import React from "react";
import { BaseButtonProps } from "antd/es/button/button";

export interface ButtonComponentProps {
  size: BaseButtonProps["size"];
  textBtn: string;
  [key: string]: any;
}

const ButtonComponent = (props: ButtonComponentProps) => {
  const { size, textBtn, ...rest } = props;
  return (
    <Button size={size} {...rest}>
      {textBtn}
    </Button>
  );
};

export default ButtonComponent;
