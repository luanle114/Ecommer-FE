import { Image } from "antd";
import React from "react";
import { WrapperSliderStyled } from "./Slider.style";

export interface SliderComponentProps {
  listImage: string[];
  [key: string]: any;
}

const SliderComponent = (props: SliderComponentProps) => {
  const { listImage, ...rest } = props;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
  };

  return (
    <WrapperSliderStyled {...settings} {...rest}>
      {listImage.map((item: string, index: number) => (
        <Image src={item} key={index} preview={false} width="100%" height="300px" style={{borderRadius: '12px !important'}}/>
      ))}
    </WrapperSliderStyled>
  );
};

export default SliderComponent;
