import React from 'react';
import HeaderComponent from '../HeaderComponent';

const DefaultComponent = (props: any) => {
  return <div>
    <HeaderComponent />
    {props.children}
  </div>;
};

export default DefaultComponent;