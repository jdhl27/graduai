import {createSlice} from '@reduxjs/toolkit';
import {
  IAuthState,
  isFirstLoad,
  initialState,
  setIsAuth,
  setUid,
  setNameUser,
} from './types';

export const initLoadSlice = createSlice({
  name: 'initLoad',
  initialState: initialState as IAuthState,
  reducers: {},

  extraReducers: builder => {
    builder.addCase(isFirstLoad, (state, action) => {
      console.log('initLoad:isFirstLoad');
      state.isFirstLoad = action.payload;
    });

    builder.addCase(setIsAuth, (state, action) => {
      console.log('initLoad:setIsAuth');
      state.isAuth = action.payload;
    });
    builder.addCase(setUid, (state, action) => {
      console.log('initLoad:setUid');
      state.uid = action.payload;
    });

    builder.addCase(setNameUser, (state, action) => {
      console.log('initLoad:setNameUser');
      state.nameuser = action.payload;
    });
  },
});
