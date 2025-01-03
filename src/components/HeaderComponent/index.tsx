import { Badge, Col } from "antd";
import React from "react";
import {
  WrapperHeader,
  WrapperHeaderAccount,
  WrapperTextCart,
  WrapperTextHeader,
} from "./Header.style";
import {
  UserOutlined,
  CaretDownOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import ButtonInputSearch from "../ButtonInputSearch";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const HeaderComponent = () => {
  const navigate = useNavigate();
  const userData = useSelector((state: any) => state.user);
  const handleLogin = () => {
    navigate('/sign-in');
  }

  return (
    <div
      style={{
        width: "100%",
        background: "rgb(26, 148, 255)",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <WrapperHeader>
        <Col span={5}>
          <WrapperTextHeader> ascqw</WrapperTextHeader>
        </Col>
        <Col span={13}>
          <ButtonInputSearch
            size="large"
            textBtn="Tìm kiếm"
            placeholder={"Text in here"}
          />
        </Col>
        <Col span={6} style={{ display: "flex", gap: "54px", alignItems: 'center' }}>
          <WrapperHeaderAccount>
            <UserOutlined style={{ fontSize: "30px" }} />
            {userData.name ? 
              <div>
                {userData?.name}
              </div> 
              : 
              <div>
                <WrapperTextCart onClick={handleLogin}>Đăng Nhập / Đăng Ký</WrapperTextCart>
                <div style={{ display: "flex" }}>
                  <WrapperTextCart>Tài Khoản</WrapperTextCart>
                  <CaretDownOutlined />
                </div>
              </div>
            }
          </WrapperHeaderAccount>
          <div>
            <div style={{ display: "flex" }}>
              <Badge count={4} size="small">
                <ShoppingCartOutlined
                  style={{ fontSize: "40px", color: "#fff" }}
                />
              </Badge>
              <WrapperTextCart>Giỏ hàng</WrapperTextCart>
            </div>
          </div>
        </Col>
      </WrapperHeader>
    </div>
  );
};

export default HeaderComponent;
