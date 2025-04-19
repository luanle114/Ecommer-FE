import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface UserState {
  _id: string,
  name: string,
  email: string,
  address: string,
  phone: string,
  avatar: string,
  isAdmin: boolean
  access_token: string;
};

const initialState: UserState = {
  _id: '',
  name: '',
  email: '',
  address: '',
  phone: '',
  avatar: '',
  isAdmin: false,
  access_token: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUser: (state, action: PayloadAction<UserState>) => {
      const { _id, name, email, address, avatar, phone, isAdmin, access_token } = action.payload;
      state._id = _id;
      state.name = name;
      state.email = email;
      state.address = address;
      state.avatar = avatar;
      state.phone = phone;
      state.isAdmin = isAdmin;
      state.access_token = access_token;
    },
    resetUser: (state) => {
      state._id = '';
      state.name = '';
      state.email = '';
      state.address = ''
      state.avatar = '';
      state.phone = '';
      state.access_token = '';
      state.isAdmin = false;
    }
  },
});

export const { updateUser, resetUser } = userSlice.actions;
export default userSlice.reducer;