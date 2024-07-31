import {createSlice} from '@reduxjs/toolkit';
import {
  IAuthState,
  users,
  initialState,
} from './types';

export const usersSlice = createSlice({
  name: 'initLoad',
  initialState: initialState as IAuthState,
  reducers: {},

  extraReducers: builder => {
    builder.addCase(users, (state, action) => {
      console.log('initLoad:users');
      state.users = action.payload;
    });
  },
});
