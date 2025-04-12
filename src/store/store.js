import { configureStore } from "@reduxjs/toolkit";
import indexReducer from "./slice/indexSlice";
const store = configureStore({
  reducer: {
    index: indexReducer,
  },
});

export default store;
