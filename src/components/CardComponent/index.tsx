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

const CardComponent = (props: any) => {
  const { products } = props;
  return (
    <WrapperCardStyled
      key={products?._id}
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
      <StyledNameProduct>{products?.name}</StyledNameProduct>
      <WrapperReportText>
        <span style={{ marginRight: "4px" }}>
          {products?.rating} <StarFilled style={{ fontSize: "12px", color: "yellow" }} />
        </span>
        <WrapperStyleTextSell> | Đã bán {products?.sold}</WrapperStyleTextSell>
      </WrapperReportText>
      <WrapperPriceText>
        <span style={{ marginRight: '8px'}}>{products?.price}đ</span>{" "}
        <WrapperPriceDiscountText>{products?.discount}%</WrapperPriceDiscountText>{" "}
      </WrapperPriceText>
    </WrapperCardStyled>
  );
};

export default CardComponent;
