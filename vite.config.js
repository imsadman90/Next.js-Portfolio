import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    // Optimize build for better performance
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
      },
    },
    rollupOptions: {
      output: {
        manualChunks: {
          "framer-motion": ["framer-motion"],
        },
      },
    },
  },
  // Optimize image loading
  optimizeDeps: {
    include: ["framer-motion"],
  },
});
