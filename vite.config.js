import macrosPlugin from "vite-plugin-babel-macros";
import {defineConfig} from "rollup";

export default defineConfig({
    plugins: [macrosPlugin()],
});