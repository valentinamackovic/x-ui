import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import MenuPageView from "../views/MenuView/MenuPageView.vue";
import AccordionPageView from "../views/AccordionView/AccordionPageView.vue";
import ModalPageView from "../views/ModalView/ModalPageView.vue";
import SelectPageView from "../views/SelectView/SelectPageView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/menu",
      name: "menu",
      component: MenuPageView,
    },
    {
      path: "/accordion",
      name: "accordion",
      component: AccordionPageView,
    },
    {
      path: "/modal",
      name: "modal",
      component: ModalPageView,
    },
    {
      path: "/select",
      name: "select",
      component: SelectPageView,
    },
  ],
});

export default router;
