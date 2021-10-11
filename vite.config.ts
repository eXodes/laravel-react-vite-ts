import { defineConfig } from "laravel-vite";
import reactRefresh from '@vitejs/plugin-react-refresh'

export default defineConfig({
    resolve: {
        alias: {
            "@": require("path").resolve(__dirname, "./resource/ts"),
        },
    },
    server: {
        fs: {
            allow: ["resources", 'node_modules'],
        },
    },
    plugins: [reactRefresh()],
}).withPostCSS([
    require("postcss-import"),
    require("tailwindcss"),
    require("autoprefixer"),
]);
