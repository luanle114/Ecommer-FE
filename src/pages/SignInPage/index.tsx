import React, { useMemo, useState } from "react";
import {
  WrapperContainerLeft,
  WrapperContainerRight,
  WrapperText,
} from "./SignInPage.style";
import InputForm from "../../components/InputForm";
import ButtonComponent from "../../components/ButtonComponent";
import { Image } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { useNavigate } from "react-router-dom";
import UserService from "../../services/UserServices";
import { useMutationHooks } from "../../hooks/useMutation";

export interface SignInKey {
  email: string,
  password: string,
};

type SignUpFormKey = keyof SignInKey

const SignInPage = () => {
  const [dataSignIn, setDataSignIn] = useState({
      email: '',
      password: '',
    });
  const [isShowPassword, setIsShowPassword] = useState(false);
  const navigate = useNavigate();
  const mutation = useMutationHooks(
    (data: SignUpFormKey) => UserService.loginUser(data)
  )
  console.log("~ ~ mutation:", mutation);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDataSignIn({
      ...dataSignIn,
      [e.target.name]: e.target.value,
    })
  }

  const handleSignUp = () => {
    navigate('/sign-up')
  };

  const isDisableButton = useMemo(() => {
    const validFields: Record<SignUpFormKey, boolean> = {
      email: !!dataSignIn.email,
      password: !!dataSignIn.password,
    };

    return Object.values(validFields).some((x: any) => !x)
  }, [dataSignIn]);

  const handleSubmit = () => {
    mutation.mutate(dataSignIn as any)
  }

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
          <InputForm name="email" placeholder="Nhập email" style={{ marginBottom: '10px' }} value={dataSignIn.email} onChange={onChange} />
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
            <InputForm name="password" placeholder="Nhập mật khẩu" type={isShowPassword ? 'text' : 'password'} value={dataSignIn.password} onChange={onChange}/>
          </div>
          <ButtonComponent
            size="large"
            textBtn="Đăng nhập"
            styledButton={{
              color: "#fff",
              background: "rgb(255, 57, 69)",
              height: "48px",
              width: "100%",
              border: "none",
              fontSize: "15px",
              fontWeight: "700",
              margin: '26px 0 10px'
            }}
            onSubmit={handleSubmit}
            disabled={isDisableButton}
          />
          <p><WrapperText>Quên mật khẩu?</WrapperText></p>
          <p>Chưa có tài khoản? <WrapperText onClick={handleSignUp}>Tạo tài khoản</WrapperText></p>
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
};

export default SignInPage;
