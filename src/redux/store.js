import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slides/counterSlice.js";

export default configureStore({
  reducer: { counter: counterReducer },
});
