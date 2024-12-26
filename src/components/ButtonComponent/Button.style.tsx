import { Button } from "antd";
import styled from "styled-components";

export interface IStyledButton {
  disabled?: boolean
}

export const StyledButton = styled(Button)<IStyledButton>`
  ${({disabled}) => `
    background: ${disabled ? '#ccc' : 'rgb(255, 57, 69)'}
  `}
`;