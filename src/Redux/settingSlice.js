// import { createSlice } from "@reduxjs/toolkit";

// // Get initial dark mode value from localStorage (default is false)
// //const initialDarkMode = localStorage.getItem("darkMode") === "true";

// const initialState = {
//   //darkMode: initialDarkMode,
//   language: "English",
// };

// const settingsSlice = createSlice({
//   name: "settings",
//   initialState,
//   reducers: {
//     // toggleDarkMode: (state) => {
//     //   state.darkMode = !state.darkMode;
//     //   localStorage.setItem("darkMode", state.darkMode); // Save to localStorage
//     // },
//     setLanguage: (state, action) => {
//       state.language = action.payload;
//     },
//   },
// });

// export const {  setLanguage } = settingsSlice.actions;
// export default settingsSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

// Get initial dark mode value from localStorage
const initialDarkMode = localStorage.getItem("darkMode") === "true";

const initialState = {
  darkMode: initialDarkMode,
  language: "English",
};

const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.darkMode = !state.darkMode;
      localStorage.setItem("darkMode", state.darkMode); // Save to localStorage

      // ✅ Update HTML class for Tailwind
      if (state.darkMode) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    },
    setLanguage: (state, action) => {
      state.language = action.payload;
    },
  },
});

export const { toggleDarkMode, setLanguage } = settingsSlice.actions;
export default settingsSlice.reducer;
