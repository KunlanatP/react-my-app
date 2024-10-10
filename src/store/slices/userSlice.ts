import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface User {
  key: string; 
  title: string;
  firstname: string;
  lastname: string;
  citizenID: string;
  birthday: string;
  nationality: string;
  gender: string;
  mobilePhone: string;
  passport: string;
  expectedSalary: number;
}

interface UserState {
  users: User[];
}

const initialState: UserState = {
  users: [],
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<User>) => {
      state.users.push(action.payload);
    },
    deleteUser: (state, action: PayloadAction<string>) => {
      state.users = state.users.filter(user => user.key !== action.payload);
    },
    deleteAllUsers: (state) => {
      state.users = [];
    },
  },
});

export const { addUser, deleteUser, deleteAllUsers } = userSlice.actions;
export default userSlice.reducer;
