import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface UserState {
  name: string,
  email: string,
  address: string,
  phone: string,
  access_token: string;
};

const initialState: UserState = {
  name: '',
  email: '',
  address: '',
  phone: '',
  access_token: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUser: (state, action: PayloadAction<UserState>) => {
      const { name, email, access_token } = action.payload;
      state.name = name;
      state.email = email;
      state.access_token = access_token
    },
    resetUser: (state) => {
      state.name = '';
      state.email = '';
      state.access_token = ''
    }
  },
});

export const { updateUser, resetUser } = userSlice.actions;
export default userSlice.reducer;