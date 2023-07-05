import { createRouter, createWebHistory } from "vue-router";
import About from "../views/About.vue";
import Undressed from "../views/Undressed.vue";

export default createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "undressed",
      component: Undressed,
    },
    {
      path: "/about",
      name: "about",
      component: About,
    },
  ],
});
