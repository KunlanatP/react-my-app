import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Key } from "../../pages/Test2";

interface SelectionState {
  selectedRowKeys: Key[];
}

const initialState: SelectionState = {
  selectedRowKeys: [],
};

const selectionSlice = createSlice({
  name: "selection",
  initialState,
  reducers: {
    setSelectedRowKeys: (state, action: PayloadAction<Key[]>) => {
      state.selectedRowKeys = action.payload;
    },
    clearSelectedRowKeys: (state) => {
      state.selectedRowKeys = [];
    },
  },
});

export const { setSelectedRowKeys, clearSelectedRowKeys } =
  selectionSlice.actions;

export default selectionSlice.reducer;
