import { createSlice } from '@reduxjs/toolkit';

import users from './users.json';

export const usersListSlice = createSlice({
  name: 'usersList',
  initialState: {
    users: users,
    currentPage: 0,
    searchQuery: '',
  },
  reducers: {
    changePage: (state, action) => {
      state.currentPage = action.payload;
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
  },
});

export const { changePage, setSearchQuery } = usersListSlice.actions;

export default usersListSlice.reducer;
