import { Badge, Col, Popover } from "antd";
import React, { useState } from "react";
import {
  WrapperContentPopup,
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
import { useDispatch, useSelector } from "react-redux";
import UserService from "../../services/UserServices";
import { resetUser } from "../../redux/slice/userSlice";
import LoadingComponent from "../LoadingComponent";

const HeaderComponent = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userData = useSelector((state: any) => state.user);
  const handleLogin = () => {
    navigate('/sign-in');
  };

  const handleLogout = async () => {
    setIsLoading(true);
    await UserService.logoutUser();
    dispatch(resetUser());
    setIsLoading(false);
  }

  const content = (
    <div>
      <WrapperContentPopup onClick={handleLogout}>Đăng xuất</WrapperContentPopup>
      <WrapperContentPopup onClick={() => navigate('/profile')} >Thông tin người dùng</WrapperContentPopup>
      {userData.isAdmin && (
        <WrapperContentPopup onClick={() => navigate('/system/admin')} >Quản lý hệ thống</WrapperContentPopup>
      )}
    </div>
  )

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
          <LoadingComponent isLoading={isLoading}>
            <WrapperHeaderAccount>
              <UserOutlined style={{ fontSize: "30px" }} />
              {userData.access_token ? 
                <>
                  <Popover trigger="click" content={content}>
                    <div>
                      {userData?.name}
                    </div>
                  </Popover>
                </> 
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
          </LoadingComponent>
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
