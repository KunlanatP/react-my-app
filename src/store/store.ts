import { configureStore } from "@reduxjs/toolkit";
import languageReducer from "./slices/languageSlice";
import shapeTypeReducer from "./slices/shapeSlice";
import userReducer from "./slices/userSlice";
import selectionReducer from './slices/selectionSlice';

const store = configureStore({
  reducer: {
    language: languageReducer,
    shapes: shapeTypeReducer,
    user: userReducer,
    selection: selectionReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
