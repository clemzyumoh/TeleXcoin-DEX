import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path";
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": "/src", // Try this instead
    },
  },
});

// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

// export default defineConfig({
//   plugins: [react()],
//   resolve: {
//     alias: {
//       "@": "/src",
//     },
//   },
// });
