import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";
import { resolve } from "path";

import Components from "unplugin-vue-components/vite";
import { AntDesignVueResolver } from "unplugin-vue-components/resolvers";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        Components({
            resolvers: [AntDesignVueResolver()],
        }),
    ],
    resolve: {
        alias: {
            "@": resolve(__dirname, "src"),
        },
    },
    server: {
        // 将此设置为 0.0.0.0 或者 true 将监听所有地址
        host: true,
        // 在开发服务器启动时自动在浏览器中打开应用程序
        open: true,
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `@import "@/styles/main.scss";`,
            },
        },
    },
});
