import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface LanguageState {
  language: string;
  label: string;
}

const initialState: LanguageState = {
  language: "en",
  label: "English",
};

const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    changeLanguage: (state, action: PayloadAction<string>) => {
      state.language = action.payload;
      state.label = "English";
      if (action.payload === "th") {
        state.label = "ไทย";
      }
    },
  },
});

export const { changeLanguage } = languageSlice.actions;
export default languageSlice.reducer;
