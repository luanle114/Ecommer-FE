import React from "react";
import TypeProduct from "../../components/TypeProduct";
import {
  StyledButtonMore,
  StyledContent,
  StyledProduct,
  WrapperTypeProduct,
} from "./Homepage.style";
import SliderComponent from "../../components/SliderComponent";
import CardComponent from "../../components/CardComponent";

const HomePage = () => {
  const arr = ["TV", "Cellphone", "Laptop", "Tablet", "Smartwatch"];
  const listImage = [
    "https://salt.tikicdn.com/cache/w750/ts/tikimsp/e2/86/c3/0b250ea5748e7d78e0f06a47319b2ba3.png.webp",
    "https://salt.tikicdn.com/cache/w750/ts/tikimsp/5b/92/a2/153fb01908019eda9430f38bfb513c02.png.webp",
    "https://salt.tikicdn.com/cache/w750/ts/tikimsp/bf/6c/1c/515007514e9dd704e4244fad0c9a0aa4.png",
  ];

  return (
    <>
      <div style={{ padding: "0 auto", width: "1270px" }}>
        <WrapperTypeProduct>
          {arr.map((item: any, index: number) => (
            <TypeProduct name={item} key={index} />
          ))}
        </WrapperTypeProduct>
      </div>
      <StyledContent>
        <div>
          <SliderComponent listImage={listImage} />
          <StyledProduct>
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
          </StyledProduct>
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            marginTop: "10px",
          }}
        >
          <StyledButtonMore textBtn="Xem Thêm" size="large" type="outline" />
        </div>
      </StyledContent>
    </>
  );
};

export default HomePage;
