const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "/dashboard",
        component: () => import("pages/Dashboard/DashboardPage.vue"),
      },
    ],
  },

  {
    path: "/",
    component: () => import("layouts/AuthLayout.vue"),
    children: [
      {
        path: "/login",
        component: () => import("pages/Auth/LoginPage/LoginPage.vue"),
      },
      {
        path: "/register",
        component: () => import("pages/Auth/RegisterPage/RegisterPage.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
