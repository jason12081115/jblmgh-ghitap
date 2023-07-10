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
      {
        path: "patients",
        component: () => import("pages/patients/IndexPage.vue"),
        name: "Patients",
      },
      {
        path: "appointment",
        component: () => import("pages/AppointmentsPage.vue"),
        name: "Appointment",
      },
      {
        path: "consultation",
        component: () => import("pages/ConsultationsPage.vue"),
        name: "Consultation",
      },
      {
        path: "chats",
        component: () => import("pages/ChatsPage.vue"),
        name: "Chats",
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
