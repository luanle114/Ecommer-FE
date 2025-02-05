import { Row } from "antd";
import styled from "styled-components";

export const WrapperHeader = styled(Row)`
  padding: 10px 120px;
  background-color: rgb(26, 148, 255);
  align-items: center;
  gap: 16px;
  flex-wrap: nowrap;
  width: 100%;
`;

export const WrapperTextHeader = styled.span`
  font-size: 18px;
  color: #fff;
  font-weight: bold;
  text-align: left;
`;

export const WrapperHeaderAccount = styled.div`
  display: flex;
  align-items: center;
  color: #fff;
  gap: 10px;
  font-size: 12px;
`;

export const WrapperTextCart = styled.div`
  font-size: 12px;
  color: #fff;
  display: flex;
  align-items: end;
  cursor: pointer;
`;

export const WrapperContentPopup = styled.p`
  cursor: pointer;
  &:hover {
    color: rgb(26, 148, 255);
  }
`;
