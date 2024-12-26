import React from 'react';
import { WrapperInputStyled } from './InputForm.style';

export interface IInputFormProps {
  placeholder: string;
  onChange: (param?: any) => void;
  value: string;
  [key: string]: any;
}

const InputForm = (props: IInputFormProps) => {
  const { placeholder = 'Nhập text', onChange, value, ...rest } = props;

  return (
    <WrapperInputStyled placeholder={placeholder} value={value} onChange={(e: any) => onChange(e)} {...rest} />
  )
}

export default InputForm;