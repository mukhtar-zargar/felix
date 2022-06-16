import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IUser } from "../types/user.types";

const initialState: IUser = {};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUser: () => {},
    updateUser: (state, action: PayloadAction<IUser>) => {
      // We can clean previous state here first
      return { ...state, ...action.payload };
    },
    cleanUser: (state) => {
      state = {};
    },
  },
});

export const { getUser, updateUser, cleanUser } = userSlice.actions;

export default userSlice.reducer;
