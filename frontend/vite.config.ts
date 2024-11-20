import react from "@vitejs/plugin-react";
import dotenv from "dotenv";
import {defineConfig} from "vite";

dotenv.config({ path: "../.env" });

type ENV = typeof process.env & { CLIENT_PORT?: number; SERVER_URL?: string };
const env: ENV = process.env;
export default defineConfig({
  plugins: [react()],
  server: {
    port: env.CLIENT_PORT,
    proxy: {
      "/graphql": {
        target: env.SERVER_URL,
        changeOrigin: true,
        secure: false,
      },
    },
  },
  define: {
    "process.env": process.env,
  },
});
