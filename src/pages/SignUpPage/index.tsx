import React, { useMemo, useState } from 'react'
import { WrapperContainerLeft, WrapperContainerRight, WrapperText } from './SignUpPage.style';
import InputForm from '../../components/InputForm';
import ButtonComponent from '../../components/ButtonComponent';
import { Image } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

export interface SignUpKey {
  email: string,
  password: string,
  confirmPassword: string
};

type SignUpFormKey = keyof SignUpKey

const SignUpPage = () => {
  const [dataSignUp, setDataSignUp] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isShowConfirmPassword, setIsShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const handleSignIn = () => {
    navigate('/sign-in');
  };
  const handleOnChange = (e: any) => {
    setDataSignUp({
      ...dataSignUp,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    
  };

  const isDisableButton = useMemo(() => {
    const validFields: Record<SignUpFormKey, boolean> = {
      email: !!dataSignUp.email,
      password: !!dataSignUp.password,
      confirmPassword: !!dataSignUp.confirmPassword
    };

    return Object.values(validFields).some((x: any) => !x)
  }, [dataSignUp]);

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
          <InputForm name="email" placeholder="Nhập email" style={{ marginBottom: '10px' }} value={dataSignUp.email} onChange={handleOnChange} />
          <div style={{ position: 'relative'}}>
            <span
              onClick={() => setIsShowPassword(!isShowPassword)}
              style={{
                zIndex: 10,
                position: 'absolute',
                top: '4px',
                right: '8px'
              }}
            >
              {isShowPassword ? <EyeTwoTone onClick={() => setIsShowPassword(false)} /> : <EyeInvisibleOutlined onClick={() => setIsShowPassword(true)} />}
            </span>
            <InputForm name="password" placeholder="Nhập password" type={isShowPassword ? 'text' : 'password'} value={dataSignUp.password} onChange={handleOnChange}/>
          </div>
          <div style={{ position: 'relative'}}>
            <span
              onClick={() => setIsShowConfirmPassword(!isShowConfirmPassword)}
              style={{
                zIndex: 10,
                position: 'absolute',
                top: '4px',
                right: '8px'
              }}
            >
              {isShowConfirmPassword ? <EyeTwoTone onClick={() => setIsShowConfirmPassword(false)} /> : <EyeInvisibleOutlined onClick={() => setIsShowConfirmPassword(true)} />}
            </span>
            <InputForm name="confirmPassword" placeholder="Nhâp lại password" type={isShowConfirmPassword ? 'text' : 'password'} value={dataSignUp.confirmPassword} onChange={handleOnChange}/>
          </div>
          <ButtonComponent
            size="large"
            textBtn="Đăng ký"
            style={{
              color: "#fff",
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
          <p>Bạn đã có tài khoản? <WrapperText onClick={handleSignIn}>Đăng nhập</WrapperText></p>
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