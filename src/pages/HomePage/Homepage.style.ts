import styled from "styled-components";
import ButtonComponent from "../../components/ButtonComponent";

export const WrapperTypeProduct = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 24px;
  align-items: center;
  height: 44px;
`;

export const StyledButtonMore = styled(ButtonComponent)`
  border: 1px solid rgb(11, 116, 229);
  color: rgb(11, 116, 229);
  font-weight: 500;
  border-radius: 4px;
  width: 240px;
  height: 38px;
  font-weight: 500;
  &:hover {
    color: #fff !important;
    background-color: rgb(13, 92, 182);
  }
`;

export const StyledProduct = styled.div`
  display: flex;
  gap: 14px;
  margin-top: 20px;
  flex-wrap: wrap;
`;

export const StyledContent = styled.div`
  background-color: #fff;
  padding: 16px;
  margin: 0 auto;
  width: 1280px;
  border-radius: 8px;
  @media only screen and (min-width: 1440px) {
    width: 1440px;
  }
`
