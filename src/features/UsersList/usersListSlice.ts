import { createSlice } from '@reduxjs/toolkit';

import users from './users.json';

export type User = {
  id: number;
  name: string;
  age: number;
  avatar: string;
};

export enum SortingParameters {
  Up = 'up',
  Down = 'down',
}

type State = {
  users: User[];
  currentPage: number;
  searchQuery: string;
  sortingParameter: SortingParameters | null;
};

const initialState: State = {
  users: users,
  currentPage: 0,
  searchQuery: '',
  sortingParameter: null,
};

export const usersListSlice = createSlice({
  name: 'usersList',
  initialState,
  reducers: {
    changePage: (state, action) => {
      state.currentPage = action.payload;
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    setSortingParameter: (state, action) => {
      state.sortingParameter = action.payload;
    },
    resetSorting: state => {
      state.sortingParameter = null;
    },
    removeUser: (state, action) => {
      state.users = state.users.filter(({ id }) => id !== action.payload);
    },
  },
});

export const { changePage, setSearchQuery, setSortingParameter, resetSorting, removeUser } =
  usersListSlice.actions;

export default usersListSlice.reducer;
