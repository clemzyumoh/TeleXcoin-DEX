// // Redux Slice for Notifications
// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   notifications: [],
// };

// const notificationSlice = createSlice({
//   name: "notifications",
//   initialState,
//   reducers: {
//     addNotification: (state, action) => {
//       state.notifications.unshift(action.payload);
//     },
//     clearNotifications: (state) => {
//       state.notifications = [];
//     },
//   },
// });

// export const { addNotification, clearNotifications } =
//   notificationSlice.actions;
// export default notificationSlice.reducer;

// Redux Slice for Notifications
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  notifications: [
    { id: 1, message: "Welcome to the platform!", type: "info" },
    { id: 2, message: "Your transaction was successful.", type: "success" }
  ]
};

const notificationSlice = createSlice({
  name: "notifications",
  initialState,
  reducers: {
    addNotification: (state, action) => {
      state.notifications.unshift({ id: Date.now(), ...action.payload });
    },
    clearNotifications: (state) => {
      state.notifications = [];
    }
  }
});

export const { addNotification, clearNotifications } = notificationSlice.actions;
export default notificationSlice.reducer;
