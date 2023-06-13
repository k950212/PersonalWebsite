import { createApp } from "vue";
import AOS from "aos";
import animated from "animate.css";

import App from "./App.vue";
import router from "./router";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap";
import "./styles/style.css";
import "aos/dist/aos.css";

const app = createApp(App);
AOS.init();
app.use(router);
app.use(animated);

app.mount("#app");
