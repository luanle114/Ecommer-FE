import React from "react";
import Navbar from "../../components/NavbarComponent";
import CardComponent from "../../components/CardComponent";
import { Col, Pagination, Row } from "antd";
import { StyledNavbar, StyledColProduct } from "./TypeProductPage.style";

const TypeProductPage = () => {
  const onShowSizeChange = (current, pageSize) => {
    console.log(current, pageSize);
  };

  return (
    <div style={{ width: '100%', background: '#efefef' }}>
      <div style={{ margin: '0 auto' }} >
      <Row
        style={{
          padding: "0 120px",
          background: "#efefef",
          flexWrap: "nowrap",
          paddingTop: "10px",
        }}
      >
        <StyledNavbar span={4}>
          <Navbar />
        </StyledNavbar>
        <Col span={20}>
          <StyledColProduct>
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
          </StyledColProduct>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: "20px" }}>
          <Pagination
            onShowSizeChange={onShowSizeChange}
            defaultCurrent={3}
            total={500}
          />
          </div>
        </Col>
      </Row>
      </div>
    </div>
  );
};

export default TypeProductPage;
