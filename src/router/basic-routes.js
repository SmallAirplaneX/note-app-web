export const basicRoutes = [
    {
        path: "/",
        name: "",
        component: () => import("@/views/layout/index.vue"),
    },
    {
        path: "/home",
        name: "home",
        component: () => import("@/views/page/home/index.vue"),
        meta: {
            title: "Home",
        }
    },
    {
        path: "/data-manager",
        name: "DataManager",
        component: () => import("@/views/layout/index.vue"),
        meta: {
            title: "数据管理",
        },
        children: [
            {
                path: "home",
                name: "DataHome",
                component: () => import("@/views/page/home/index.vue"),
                meta: {
                    title: "Home",
                }
            },
            {
                path: "objects",
                name: "Objects",
                component: () => import("@/views/page/infmanage/object/index.vue"),
                meta: {
                    title: "对象管理",
                },
            },
            {
                path: "templates",
                name: "Templates",
                component: () => import("@/views/page/infmanage/template/index.vue"),
                meta: {
                    title: "模板管理",
                },
            },
            {
                path: "attributes",
                name: "Attributes",
                component: () => import("@/views/page/infmanage/concept/index.vue"),
                meta: {
                    title: "属性管理",
                },
            },
            {
                path: "note",
                name: "Note",
                component: () => import("@/views/page/knomanage/note/index.vue"),
                meta: {
                    title: "笔记管理",
                },
            },
            {
                path: "topic",
                name: "Topic",
                component: () => import("@/views/page/knomanage/topic/index.vue"),
                meta: {
                    title: "主题管理",
                },
            },
        ],
    },

    {
        path: "/login",
        name: "Login",
        component: () => import("@/views/page/user/login/index.vue"),
        meta: {
            title: "登陆",
        },
    },
    {
        path: "/register",
        name: "Register",
        component: () => import("@/views/page/user/register/index.vue"),
        meta: {
            title: "注册",
        },
    },
    {
        path: "/user",
        name: "User",
        component: () => import("@/views/page/user/index.vue"),
        meta: {
            title: "个人页",
        },
    },
];
