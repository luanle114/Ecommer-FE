import React, { useState } from 'react'
import { WrapperContainerLeft, WrapperContainerRight, WrapperText } from './SignUpPage.style';
import InputForm from '../../components/InputForm';
import ButtonComponent from '../../components/ButtonComponent';
import { Image } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';

const SignUpPage = () => {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [password, setPassword] = useState('');

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "rgba(0, 0, 0, 0.53)",
        height: "100vh",
      }}
    >
      <div
        style={{
          width: "800px",
          height: "445px",
          borderRadius: "6px",
          background: "#fff",
          display: "flex",
        }}
      >
        <WrapperContainerLeft>
          <h1>Xin chào</h1>
          <p>Đăng nhập và tạo tài khoản</p>
          <InputForm placeholder="Nhập email" style={{ marginBottom: '10px' }} />
          <div style={{ position: 'relative'}}>
            <span
            style={{
              zIndex: 10,
              position: 'absolute',
              top: '4px',
              right: '8px'
            }}>
              {isShowPassword ? <EyeTwoTone onClick={() => setIsShowPassword(false)} /> : <EyeInvisibleOutlined onClick={() => setIsShowPassword(true)} />}
            </span>
            <InputForm placeholder="Nhập email" type={isShowPassword ? 'text' : 'password'} value={password} onChange={(e: any) => setPassword(e.target.value)}/>
          </div>
          <div style={{ position: 'relative'}}>
            <span
            style={{
              zIndex: 10,
              position: 'absolute',
              top: '4px',
              right: '8px'
            }}>
              {isShowPassword ? <EyeTwoTone onClick={() => setIsShowPassword(false)} /> : <EyeInvisibleOutlined onClick={() => setIsShowPassword(true)} />}
            </span>
            <InputForm placeholder="Nhập email" type={isShowPassword ? 'text' : 'password'} value={password} onChange={(e: any) => setPassword(e.target.value)}/>
          </div>
          <ButtonComponent
            size="large"
            textBtn="Đăng nhập"
            style={{
              color: "#fff",
              background: "rgb(255, 57, 69)",
              height: "48px",
              width: "100%",
              border: "none",
              fontSize: "15px",
              fontWeight: "700",
              margin: '26px 0 10px'
            }}
          />
          <p>Bạn đã có tài khoản? <WrapperText>Đăng nhập</WrapperText></p>
        </WrapperContainerLeft>
        <WrapperContainerRight>
          <Image
            src="https://salt.tikicdn.com/ts/upload/eb/f3/a3/25b2ccba8f33a5157f161b6a50f64a60.png"
            alt="image small"
            preview={false}
            height="203px"
            width="203px"
          />
          <h4>Mua sắm tại Tiki</h4>
        </WrapperContainerRight>
      </div>
    </div>
  );
}

export default SignUpPage