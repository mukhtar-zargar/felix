import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ThemeState } from "../types/theme.types";

const initialState: ThemeState = {
  theme: "light",
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    updateTheme: (state, action: PayloadAction<ThemeState>) => {
      state.theme = action.payload.theme;
    },
  },
});

export const { updateTheme } = themeSlice.actions;

export default themeSlice.reducer;
