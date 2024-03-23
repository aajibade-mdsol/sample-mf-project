import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "remote_app",
      filename: "remoteEntry.js",
      exposes: {
        "./SecondWidget": "./src/SecondWidget",
      },
      // shared: ["react", "react-dom"],
    }),
  ],
  build: {
    modulePreload: true,
    target: "esnext",
    minify: false,
  
  },
});
