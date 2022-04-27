import { createSlice } from '@reduxjs/toolkit';

import users from './users.json';

export const usersListSlice = createSlice({
  name: 'usersList',
  initialState: {
    users: users,
    currentPage: 0,
  },
  reducers: {
    changePage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
});

export const { changePage } = usersListSlice.actions;

export default usersListSlice.reducer;
