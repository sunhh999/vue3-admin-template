import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "Login",
        meta: {
            title: "登录",
        },
        component: () => import("@/views/login/index.vue"),
    },
    {
        path: "/",
        name: "Home",
        alias: "/home",
        meta: {
            title: "首页",
        },
        component: () => import("@/views/home/index.vue"),
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
