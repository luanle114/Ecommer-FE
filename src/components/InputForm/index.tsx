import React from 'react';
import { WrapperInputStyled } from './InputForm.style';

export interface IInputFormProps {
  placeholder: string;
  [key: string]: any;
}

const InputForm = (props: IInputFormProps) => {
  const [valueInput, setValueInput] = React.useState('');
  const { placeholder = 'Nhập text', ...rest } = props;

  return (
    <WrapperInputStyled placeholder={placeholder} value={valueInput} {...rest} />
  )
}

export default InputForm;