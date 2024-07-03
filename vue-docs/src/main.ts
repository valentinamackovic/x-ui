import "./assets/shared.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faAngleUp,
  faAngleDown,
  faTimes,
  faCircleXmark,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add([faAngleUp, faAngleDown, faTimes, faCircleXmark, faArrowLeft]);

const app = createApp(App);

app.use(router);
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");
