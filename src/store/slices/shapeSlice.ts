import { createSlice } from "@reduxjs/toolkit";
interface BoxState {
  shapeTypes: string[];
  isFlipped: boolean;
  positions: number[];
}

const initialState: BoxState = {
  shapeTypes: [
    "square",
    "circle",
    "oval",
    "trapezoid",
    "rectangle",
    "parallelogram",
  ],
  isFlipped: false,
  positions: Array.from({ length: 6 }, (_, index) => index),
};

const boxSlice = createSlice({
  name: "boxes",
  initialState,
  reducers: {
    rotateRightToLeft(state) {
      const last = state.shapeTypes.pop();
      if (last) {
        state.shapeTypes.unshift(last);
      }
    },
    rotateLeftToRight(state) {
      const first = state.shapeTypes.shift();
      if (first) {
        state.shapeTypes.push(first);
      }
    },
    flipGrid(state) {
      state.isFlipped = !state.isFlipped;
    },
    randomizePositions(state) {
      state.positions = state.positions.sort(() => Math.random() - 0.5);
    },
  },
});

export const {
  rotateRightToLeft,
  rotateLeftToRight,
  flipGrid,
  randomizePositions,
} = boxSlice.actions;
export default boxSlice.reducer;
