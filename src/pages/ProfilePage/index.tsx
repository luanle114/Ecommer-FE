import React from 'react'
import { WrapperContent, WrapperHeader, WrapperInput, WrapperLabel } from './ProfilePage.style';
import InputForm from '../../components/InputForm';
import ButtonComponent from '../../components/ButtonComponent';

const ProfilePage = () => {
  const [email, setEmail] = React.useState('');
  const handleOnChangeEmail = (e: any) => {

  };

  const handleUpdate = () => {

  }

  return (
    <div style={{ width: '1270px', margin: '0 auto', height: '500px' }}>
      <WrapperHeader>
        Thông tin người dùng
      </WrapperHeader>
      <WrapperContent>
        <WrapperInput>
          <WrapperLabel>Email</WrapperLabel>
          <InputForm style={{ width: '300px'}} placeholder='' value={email} onChange={handleOnChangeEmail} />
          <ButtonComponent
            size="large"
            textBtn="Cập nhật"
            styledButton={{
              height: "30px",
              width: "fit-content",
              borderRadius: "4px",
              fontSize: "15px",
              color: "rgb(26, 148, 255)",
              fontWeight: "700",
              padding: "2px 6px 2px",
              background: "none"
            }}
            onSubmit={handleUpdate}
          />
        </WrapperInput>
      </WrapperContent>
    </div>
  )
}

export default ProfilePage;