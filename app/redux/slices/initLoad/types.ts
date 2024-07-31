import {createAction} from '@reduxjs/toolkit';
export interface IAuthState {
  isFirstLoad: boolean;
  isAuth: boolean;
  uid: string;
  nameuser: string;
}

export const initialState: IAuthState = {
  isFirstLoad: true,
  isAuth: false,
  uid: '',
  nameuser: '',
};

export const isFirstLoad = createAction<boolean>('root/isFirstLoad');
export const setIsAuth = createAction<boolean>('root/setIsAuth');
export const setUid = createAction<string>('root/setUid');
export const setNameUser = createAction<string>('root/setNameUser');
