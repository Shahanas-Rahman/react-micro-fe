import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		federation({
			name: "client",
			filename: "client.js",
			exposes: {
				"./App": "./src/App",
				"./Button": "./src/button",
			},
			shared: [
				"react", "react-dom", "tailwindcss", "postcss", "autoprefixer"
			]
		}),
	],
	build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
