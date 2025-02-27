import { configureStore } from "@reduxjs/toolkit";
import homeReducer from "../Redux/homeSlice";

const store = configureStore({
  reducer: {
    home: homeReducer,
  },
});

export default store;
