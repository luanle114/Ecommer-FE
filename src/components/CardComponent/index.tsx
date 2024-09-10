import React from "react";
import {
  StyledNameProduct,
  WrapperCardStyled,
  WrapperPriceDiscountText,
  WrapperPriceText,
  WrapperReportText,
  WrapperStyleTextSell,
} from "./CardComponent.style";
import { StarFilled } from "@ant-design/icons";

const CardComponent = () => {
  return (
    <WrapperCardStyled
      hoverable
      style={{ width: 240 }}
      cover={
        <img
          alt="example"
          src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
        />
      }
      bodyStyle={{ padding: "10px" }}
      headStyle={{ width: "200px", height: "200px" }}
    >
      <StyledNameProduct>Iphone</StyledNameProduct>
      <WrapperReportText>
        <span style={{ marginRight: "4px" }}>
          4.96 <StarFilled style={{ fontSize: "12px", color: "yellow" }} />
        </span>
        <WrapperStyleTextSell> | Đã bán 1000+</WrapperStyleTextSell>
      </WrapperReportText>
      <WrapperPriceText>
        <span style={{ marginRight: '8px'}}>100.000.000đ</span>{" "}
        <WrapperPriceDiscountText>-5%</WrapperPriceDiscountText>{" "}
      </WrapperPriceText>
    </WrapperCardStyled>
  );
};

export default CardComponent;
