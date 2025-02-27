import { configureStore } from "@reduxjs/toolkit";
import settingsReducer from "./settingSlice";
import homeReducer from "./homeSlice";
import notificationReducer from "./ntificationSlice"

const store = configureStore({
  reducer: {
    settings: settingsReducer,
    home: homeReducer,
    notification: notificationReducer,
  },
});

export default store;
