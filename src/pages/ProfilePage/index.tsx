import React, { useEffect } from 'react'
import { WrapperContent, WrapperHeader, WrapperInput, WrapperLabel } from './ProfilePage.style';
import InputForm from '../../components/InputForm';
import ButtonComponent from '../../components/ButtonComponent';
import { useDispatch, useSelector } from 'react-redux';
import UserService from '../../services/UserServices';
import { useMutationHooks } from '../../hooks/useMutation';
import LoadingComponent from '../../components/LoadingComponent';
import { errorMessage, successMessage } from '../../components/Message';
import { updateUser } from '../../redux/slice/userSlice';

const ProfilePage = () => {
  const userData = useSelector((state: any) => state.user);
  const mutation = useMutationHooks(
    ({ id, profile }: { id: string; profile: any } ) => UserService.updateUser(profile, id)
  );
  const { data, isPending, isSuccess, isError } = mutation as any;
  const [profile, setProfile] = React.useState({
    name: '',
    email: '',
    address: '',
    phone: '',
    avatar: '',
    isAdmin: false,
    access_token: '',
  });
  const dispatch = useDispatch();

  const handleOnChangeEmail = (e: any) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  const handleGetDetailUser = async (id: string, access_token: string) => {
    const res = await UserService.getUserDetails(id, access_token);
    dispatch(updateUser({...res?.data, access_token: access_token}));
  };

  const handleUpdate = async () => {
    mutation.mutate({ id: userData?._id, profile } as any);
    if(isSuccess) {
      successMessage('Updated user successfully');
    }
    else {
      errorMessage('Updated user failed');
    }
  };

  useEffect(() => {
    if(isSuccess){
      successMessage('Successfully loaded user data');
      handleGetDetailUser(userData?._id, userData?.access_token);
    }
    else if(isError){
      errorMessage('Failed to load user data')
    }
  }, [userData, isSuccess, isError]);

  useEffect(() => {
    if(userData){
      setProfile({
        name: userData.name,
        email: userData.email,
        address: userData.address,
        phone: userData.phone,
        avatar: userData.avatar,
        isAdmin: userData.isAdmin,
        access_token: userData.access_token,
      });
    }
  }, [userData]);

  return (
    <div style={{ width: '1270px', margin: '0 auto', height: '500px' }}>
      <WrapperHeader>
        Thông tin người dùng
      </WrapperHeader>
      <LoadingComponent isLoading={isPending}>
        <WrapperContent>
          <WrapperInput>
            <WrapperLabel htmlFor='name'>Name</WrapperLabel>
            <InputForm style={{ width: '300px'}} placeholder='' name="name" value={profile.name} onChange={handleOnChangeEmail} />
          </WrapperInput>
          <WrapperInput>
            <WrapperLabel htmlFor='email'>Email</WrapperLabel>
            <InputForm style={{ width: '300px'}} placeholder='' name="email" value={profile.email} onChange={handleOnChangeEmail} />
          </WrapperInput>
          <WrapperInput>
            <WrapperLabel htmlFor='address'>Address</WrapperLabel>
            <InputForm style={{ width: '300px'}} placeholder='' name="address" value={profile.address} onChange={handleOnChangeEmail} />
          </WrapperInput>
          <WrapperInput>
            <WrapperLabel htmlFor='phone'>Phone</WrapperLabel>
            <InputForm style={{ width: '300px'}} placeholder='' name="phone" value={profile.phone} onChange={handleOnChangeEmail} />
          </WrapperInput>
          <WrapperInput>
            <WrapperLabel htmlFor='avatar'>Avatar</WrapperLabel>
            <InputForm style={{ width: '300px'}} placeholder='' name="avatar" value={profile.avatar} onChange={handleOnChangeEmail} />
          </WrapperInput>
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
        </WrapperContent>
      </LoadingComponent>
    </div>
  )
}

export default ProfilePage;