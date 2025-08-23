import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Dynamically set base URL for local dev vs GitHub Pages
export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === "production" ? "/vikuverse/" : "/",
});
