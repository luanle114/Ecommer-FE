import React from "react";

export interface TypeProductProps {
  name: string
}

const TypeProduct = (props: TypeProductProps) => {
  const { name } = props;

  return (
    <div style={{ padding: '0 10px'}}>
      {name}
    </div>
  );
};

export default TypeProduct;