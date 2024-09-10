import styled from 'styled-components';
import { Col, Image, InputNumber } from 'antd';

export const StyledImageSmall = styled(Image)`
  height: 64px;
  width: 64px;
`

export const StyledColImage = styled(Col)`
  flex-basis: unset;
`;

export const WrapperStyledNameProduct = styled.h1`
  margin: 0px 0px 4px;
  font-size: 24px;
  font-weight: 300;
  color: rgb(36, 36, 36);
  line-height: 32px;
  word-break: break-word;
`

export const WrapperStyleTextSell = styled.span`
  font-size: 15px;
  color: rgb(120, 120, 120);
  line-height: 20px;
`;

export const WrapperPriceProduct = styled.h1`
  background: rgb(250, 250, 250);
  border-radius: 4px;
`
export const WrapperPriceTextProduct = styled.h1`
  font-size: 32px;
  line-height: 40px;
  margin-right: 8px;
  font-weight: 500;
  padding: 10px;
  margin-top: 10px;
`;

export const WrapperAddressProduct = styled.div`
  .span.address {
    text-decoration: underline;
    font-size: 15px;
    line-height: 24px;
    font-weight: 500;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  span.change-address{
    font-size: 16px;
    line-height: 24px;
    color: rgb(11, 116, 229);
    cursor: pointer;
    font-weight: 500;
  }
`;

export const WrapperQuantityProduct = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
  width: 120px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const WrapperInputNumber = styled(InputNumber)`
  &.ant-input-number.ant-input-number-sm {
    width: 60px;
    border-top: none;
    border-bottom: none;
    &.ant-input-number-handler-wrap {
      // display: none
    }
  }
`;