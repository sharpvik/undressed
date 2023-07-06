import { createRouter, createWebHistory } from "vue-router";
import Feed from "../views/Feed.vue";
import Speak from "../views/Speak.vue";
import About from "../views/About.vue";

export default createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "feed",
      component: Feed,
    },
    {
      path: "/speak",
      name: "speak",
      component: Speak,
    },
    {
      path: "/about",
      name: "about",
      component: About,
    },
  ],
});
