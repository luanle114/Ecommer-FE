import React from "react";
import {
  WrapperContent,
  WrapperLableText,
  WrapperTextPrice,
  WrapperTextValue,
} from "./Navbar.style";
import { Checkbox, Rate } from "antd";
const Navbar = () => {
  const onChange = (checkedValues: any) => {
    console.log("checked = ", checkedValues);
  };

  const renderContent = (type: any, options: any) => {
    switch (type) {
      case "TV":
        return options.map((option: any) => {
          return <WrapperTextValue>{option}</WrapperTextValue>;
        });

      case "checkbox":
        return (
          <Checkbox.Group
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
            onChange={onChange}
          >
            {options.map((option: any) => {
              return <Checkbox value={option.value}>{option.label}</Checkbox>;
            })}
          </Checkbox.Group>
        );

      case "rate":
        return options.map((option: any) => {
          return (
            <div style={{ display: 'flex', gap: '4px'}}>
              <Rate style={{ fontSize: '12px'}} value={option} />
              <span>Tu {option} sao</span>
            </div>
          )
        });
      
        case "price":
        return options.map((option: any) => {
          return (
            <WrapperTextPrice>{option}</WrapperTextPrice>
          )
        });

      default:
        return "Unknown";
    }
  };

  return (
    <div>
      <WrapperLableText>Label</WrapperLableText>
      <WrapperContent>
        {renderContent("TV", [
          "TV",
          "Cellphone",
          "Laptop",
          "Tablet",
          "Smartwatch",
        ])}
      </WrapperContent>
      <WrapperContent>
        {renderContent("checkbox", [
          { label: "A", value: "A" },
          { label: "B", value: "B" },
        ])}
      </WrapperContent>
      <WrapperContent>{renderContent("rate", [3, 4, 5])}</WrapperContent>
      <WrapperContent>{renderContent("price", ['Tren 40', 'Duoi 50'])}</WrapperContent>
    </div>
  );
};

export default Navbar;
