import { Card } from 'antd';
import styled from 'styled-components';

export const WrapperCardStyled = styled(Card)`
  width: 200px;
  & img {
    width: 200px;
    height: 200px;
  }
`;

export const StyledNameProduct = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: rgb(56, 56, 61);
  line-height: 16px;
`;

export const WrapperReportText = styled.div`
  font-size: 10px;
  color: rgb(128, 128, 137);
  display: flex;
  align-items: center;
  margin: 8px 0 4px;
`;

export const WrapperPriceText = styled.div`
  font-size: 16px;
  color: rgb(255, 66, 78);
  font-weight: 500;
`;

export const WrapperPriceDiscountText = styled.span`
  font-size: 12px;
  color: rgb(255, 66, 78);
  font-weight: 500;
`;

export const WrapperStyleTextSell = styled.span`
  font-size: 15px;
  color: rgb(120, 120, 120);
  line-height: 20px;
`
