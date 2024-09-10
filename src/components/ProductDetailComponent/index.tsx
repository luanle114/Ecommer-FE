import { Col, Image, Row } from "antd";
import React from "react";
import {
  StyledColImage,
  StyledImageSmall,
  WrapperAddressProduct,
  WrapperInputNumber,
  WrapperPriceProduct,
  WrapperPriceTextProduct,
  WrapperQuantityProduct,
  WrapperStyledNameProduct,
  WrapperStyleTextSell,
} from "./ProductDetail.style";
import { StarFilled, PlusOutlined, MinusOutlined } from "@ant-design/icons";
import ButtonComponent from "../ButtonComponent";

const ProductDetails = () => {
  const onChange = (value: any) => {
    console.log("changed", value);
  };

  return (
    <div>
      <Row style={{ padding: "16px", background: "#fff", borderRadius: "4px" }}>
        <Col span={10} style={{ borderRight: "1px solid #e5e5e5", paddingRight: "8px"}}>
          <Image
            src="https://salt.tikicdn.com/cache/750x750/ts/product/4d/dd/a1/be15e1ce8ca2e2a498013d467957263d.jpg.webp"
            alt="image product"
            preview={false}
          />
          <Row style={{ paddingTop: "10px", justifyContent: "space-between" }}>
            <StyledColImage span={4}>
              <StyledImageSmall
                src="https://salt.tikicdn.com/cache/100x100/ts/product/aa/2f/07/1bf94fac46f44e6d9885801b779002f6.jpg.webp"
                alt="image small"
                preview={false}
              />
            </StyledColImage>
            <StyledColImage span={4}>
              <StyledImageSmall
                src="https://salt.tikicdn.com/cache/100x100/ts/product/aa/2f/07/1bf94fac46f44e6d9885801b779002f6.jpg.webp"
                alt="image small"
                preview={false}
              />
            </StyledColImage>
            <StyledColImage span={4}>
              <StyledImageSmall
                src="https://salt.tikicdn.com/cache/100x100/ts/product/aa/2f/07/1bf94fac46f44e6d9885801b779002f6.jpg.webp"
                alt="image small"
                preview={false}
              />
            </StyledColImage>
            <StyledColImage span={4}>
              <StyledImageSmall
                src="https://salt.tikicdn.com/cache/100x100/ts/product/aa/2f/07/1bf94fac46f44e6d9885801b779002f6.jpg.webp"
                alt="image small"
                preview={false}
              />
            </StyledColImage>
            <StyledColImage span={4}>
              <StyledImageSmall
                src="https://salt.tikicdn.com/cache/100x100/ts/product/aa/2f/07/1bf94fac46f44e6d9885801b779002f6.jpg.webp"
                alt="image small"
                preview={false}
              />
            </StyledColImage>
            <StyledColImage span={4}>
              <StyledImageSmall
                src="https://salt.tikicdn.com/cache/100x100/ts/product/aa/2f/07/1bf94fac46f44e6d9885801b779002f6.jpg.webp"
                alt="image small"
                preview={false}
              />
            </StyledColImage>
          </Row>
        </Col>
        <Col span={14} style={{ paddingLeft: "10px"}}>
          <WrapperStyledNameProduct>
            {" "}
            qwdqwd qowbnoqnwd
          </WrapperStyledNameProduct>
          <div>
            <StarFilled style={{ fontSize: "12px", color: "yellow" }} />
            <StarFilled style={{ fontSize: "12px", color: "yellow" }} />
            <StarFilled style={{ fontSize: "12px", color: "yellow" }} />
            <WrapperStyleTextSell> | Đã bán 1000+</WrapperStyleTextSell>
          </div>
          <WrapperPriceProduct>
            <WrapperPriceTextProduct>Giá: 100.000đ</WrapperPriceTextProduct>
          </WrapperPriceProduct>
          <WrapperAddressProduct>
            <span>Giao đến </span>
            <span className="address">Q.1, P.Bến Nghé, Hồ Chí Minh</span> -
            <span className="change-address"> Đổi dịa chỉ</span>
          </WrapperAddressProduct>
          <div style={{ margin: "10px 0 20px", borderTop: "1px solid #e5e5e5", borderBottom: "1px solid #e5e5e5", padding: "10px 0"}}>
            <div style={{ marginBottom: "10px"}}>Số lượng </div>
            <WrapperQuantityProduct>
              <button style={{ border: 'none', background: 'transparent'}}>
                <MinusOutlined style={{ color: "#000", fontSize: "20px" }} />
              </button>
              <WrapperInputNumber value={1} onChange={onChange} size="small" />
              <button style={{ border: 'none', background: 'transparent'}}>
                <PlusOutlined style={{ color: "#000", fontSize: "20px" }} />
              </button>
            </WrapperQuantityProduct>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "12px"}}>
            <ButtonComponent
              size="large"
              textBtn="Chọn mua"
              style={{ color: "#fff", background: "rgb(255, 57, 69)", height: "48px", width: "220px", border: "none", fontSize: "15px", fontWeight: "700" }}
            />
            <ButtonComponent
              size="large"
              textBtn="Mua trả sau"
              style={{ color: "rgb(13, 92, 182)", background: "#fff", fontSize: "15px", height: "48px", width: "220px", border: "1px solid rgb(13, 92, 182)", fontWeight: "700", borderRadius: "4px" }}
            />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ProductDetails;
