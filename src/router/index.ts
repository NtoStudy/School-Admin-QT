import { createWebHistory, createRouter } from "vue-router";
import { require_ } from "@/utils/require.ts";

const routes = [
  {
    path: "/",
    component: () => import("@/views/Layout/index.vue"),
    redirect: "/home",
    children: [
      {
        path: "home",
        name: "Home",
        component: () => import("@/views/Home/index.vue"),
        meta: {
          title: "首页",
          icon: { url: require_("@/assets/home.png") },
        },
      },
      {
        path: "info",
        name: "Info",
        component: () => import("@/views/Info/index.vue"),
        meta: {
          title: "个人信息",
          icon: { url: require_("@/assets/个人信息.png") },
        },
      },
      {
        path: "system",
        name: "System",
        component: () => import("@/views/System/index.vue"),
        meta: {
          title: "系统管理",
          icon: { url: require_("@/assets/设置.png") },
        },
      },
      {
        path: "examine",
        name: "Examine",
        component: () => import("@/views/Examine/index.vue"),
        meta: {
          title: "考核管理",
          icon: { url: require_("@/assets/考核管理.png") },
        },
      },
      {
        path: "Education",
        name: "Education",
        component: () => import("@/views/Education/index.vue"),
        meta: {
          title: "思政队伍",
          icon: { url: require_("@/assets/思政队伍.png") },
        },
      },
      {
        path: "fund",
        name: "Fund",
        component: () => import("@/views/Fund/index.vue"),
        meta: {
          title: "学生资助",
          icon: { url: require_("@/assets/学生资助.png") },
        },
      },
      {
        path: "awards",
        name: "Awards",
        component: () => import("@/views/Awards/index.vue"),
        meta: {
          title: "评奖评优",
          icon: { url: require_("@/assets/评奖评优.png") },
        },
      },
      {
        path: "workStudy",
        name: "WorkStudy",
        component: () => import("@/views/WorkStudy/index.vue"),
        meta: {
          title: "勤工助学",
          icon: { url: require_("@/assets/勤工助学.png") },
        },
      },
      {
        path: "disciplinary",
        name: "Disciplinary",
        component: () => import("@/views/Disciplinary/index.vue"),
        meta: {
          title: "违纪处分",
          icon: { url: require_("@/assets/违纪处分.png") },
        },
      },
      {
        path: "apartment",
        name: "Apartment",
        component: () => import("@/views/Apartment/index.vue"),
        meta: {
          title: "公寓管理",
          icon: { url: require_("@/assets/公寓管理.png") },
        },
      },
      {
        path: "daily",
        name: "Daily",
        component: () => import("@/views/Daily/index.vue"),
        meta: {
          title: "日常事务",
          icon: { url: require_("@/assets/日常事务.png") },
        },
      },
    ],
  },
];

// 创建路由实例
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
