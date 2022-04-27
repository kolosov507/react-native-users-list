import { createSlice } from '@reduxjs/toolkit';

import users from './users.json';

export const usersSlice = createSlice({
  name: 'users',
  initialState: users,
  reducers: {},
});

export default usersSlice.reducer;
