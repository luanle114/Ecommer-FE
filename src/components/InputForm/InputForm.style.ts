import { Input } from 'antd';
import styled from 'styled-components';

export const WrapperInputStyled = styled(Input)`
  border-top: none;
  border-left: none;
  border-right: none;
  background-color: rgb(232, 240, 254);
  outline: none;
  &:focus {
    background-color: rgb(232, 240, 254);
  }
`;