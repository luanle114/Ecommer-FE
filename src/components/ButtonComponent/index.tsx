import React from "react";
import { BaseButtonProps } from "antd/es/button/button";
import { StyledButton } from "./Button.style";

export interface ButtonComponentProps {
  size: BaseButtonProps["size"];
  textBtn: string;
  onSubmit: (param?: any) => void;
  disabled?: boolean;
  styledButton?: any;
  [key: string]: any;
}

const ButtonComponent = (props: ButtonComponentProps) => {
  const { size, textBtn, onSubmit, disabled, styledButton, ...rest } = props;
  return (
    <StyledButton
      size={size} 
      onClick={onSubmit} 
      disabled={disabled}
      style={{
        ...styledButton,
        background: disabled ? '#ccc' : styledButton.background,
      }}
      {...rest}
    >
      {textBtn}
    </StyledButton>
  );
};

export default ButtonComponent;
