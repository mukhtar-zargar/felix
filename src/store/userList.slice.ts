import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../models/user.model";

const initialState: IUser[] = [];

export const userListSlice = createSlice({
  name: "userList",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<IUser>) => {
      state.unshift(action.payload);
    },
    removeUser: (state, action: PayloadAction<string>) => {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addUser, removeUser } = userListSlice.actions;

export default userListSlice.reducer;
