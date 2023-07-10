const routes = [
  {
    path: "/guest",
    component: () => import("layouts/GuestLayout.vue"),
    children: [
      { path: "", component: () => import("pages/LoginPage.vue") },
      {
        path: "register",
        component: () => import("pages/RegistrationPage.vue"),
      },
    ],
  },

  {
    path: "/auth",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "patients", component: () => import("pages/PatientsPage.vue") },
      { path: "", component: () => import("pages/AppointmentPage.vue") },
      { path: "", component: () => import("pages/ConsultationPage.vue") },
      { path: "", component: () => import("pages/ChatsPage.vue") },
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
