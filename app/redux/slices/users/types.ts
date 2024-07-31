import {createAction} from '@reduxjs/toolkit';
import {itemsType} from '@app/types/hooks/useSearch';
export interface IAuthState {
  users: itemsType[],
}

export const initialState: IAuthState = {
  users: [],
};

export const users = createAction<itemsType[]>('root/usersData');