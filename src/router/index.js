import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "Login" */ "../views/Auth/Login.vue"),
  },
  {
    path: "/LoginDocente",
    name: "LoginDocente",
    component: () =>
      import(/* webpackChunkName: "Login" */ "../views/Auth/LoginDocente.vue"),
  },  
  {
    path: "/Home",
    name: "Home",
    component: () => import(/* webpackChunkName: "Home" */ "../views/Home.vue"),
  },

  {
    path: "/About",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/Biblioteca",
    name: "Biblioteca",
    component: () =>
      import(/* webpackChunkName: "Biblioteca" */ "../views/Biblioteca.vue"),
  },
  {
    path: "/Avisos",
    name: "Avisos",
    component: () =>
      import(/* webpackChunkName: "Avisos" */ "../views/Avisos.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
