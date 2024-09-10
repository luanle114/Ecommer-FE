import React from "react";
import InputComponent from "../InputComponent";
import ButtonComponent from "../ButtonComponent";
import { BaseButtonProps } from "antd/es/button/button";
import { SearchOutlined } from "@ant-design/icons";

export interface ButtonInputSearchProps {
  placeholder: string;
  size: BaseButtonProps["size"];
  textBtn: string;
}

const ButtonInputSearch = (props: ButtonInputSearchProps) => {
  const { placeholder, size, textBtn } = props;
  return (
    <div style={{ display: "flex" }}>
      <InputComponent size={size} placeholder={placeholder} />
      <ButtonComponent
        size={size}
        textBtn={textBtn}
        style={{
          borderRadius: "unset",
          color: "#fff",
          backgroundColor: "rgb(13, 92, 128)",
          borderColor: "rgb(13, 92, 128)",
        }}
        icon={<SearchOutlined />}
      />
    </div>
  );
};

export default ButtonInputSearch;
