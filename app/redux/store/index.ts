import {combineReducers} from 'redux';
import {configureStore} from '@reduxjs/toolkit';
import {initLoadSlice} from '@app/redux/slices/initLoad';
import {usersSlice} from '@app/redux/slices/users';

const reducer = combineReducers({
  initLoad: initLoadSlice.reducer,
  usersSlice: usersSlice.reducer,
});

export type AppStateType = ReturnType<typeof reducer>;
export const store = configureStore({reducer: reducer});
