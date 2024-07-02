import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import MenuPageView from "../views/MenuView/MenuPageView.vue";
import AccordionPageView from "../views/AccordionView/AccordionPageView.vue";
import ModalPageView from "../views/ModalView/ModalPageView.vue";
import SelectPageView from "../views/SelectView/SelectPageView.vue";
import MultiselectPageView from "../views/MultiselectView/MultiselectPageView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/overview",
    },
    {
      path: "/overview",
      name: "Overview",
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
    {
      path: "/multiselect",
      name: "multiselect",
      component: MultiselectPageView,
    },
  ],
});

export default router;
