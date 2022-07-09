import { createSlice } from '@reduxjs/toolkit';
import UserModel from '../../../models/User';
import { RootState } from '../../root/store';

const initialState: UserModel = {
  user: {
    userId: "",
    firstName: "",
    lastName: "",
    email: ""
  },
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  }
})

export const { setUser } = userSlice.actions;

export const selectUser = (state: RootState) => state.user.user;

export default userSlice.reducer;