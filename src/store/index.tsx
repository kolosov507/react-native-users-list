import { configureStore } from '@reduxjs/toolkit';

import usersReducer from '../features/UsersList/usersListSlice';

const store = configureStore({
  reducer: {
    usersList: usersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type Dispatch = typeof store.dispatch;

export default store;
