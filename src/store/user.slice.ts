import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IUser } from "../types/user.types";

const initialState: IUser = {
  email: "",
  name: "",
  password: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUser: (state, action: PayloadAction<IUser>) => {
      return { ...state, ...action.payload };
    },
    cleanUser: (state) => {
      state = { email: "", name: "", password: "" };
    },
  },
});

export const { updateUser, cleanUser } = userSlice.actions;

export default userSlice.reducer;
