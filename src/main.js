import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import VueGtag from "vue-gtag";

const vuetify = createVuetify({
  components,
  directives,
});

const app = createApp(App);

app.use(router);

app.use(vuetify);

app.use(
  VueGtag,
  {
    appName: "app",
    pageTrackerScreenviewEnabled: true,
    config: {
      id: "G-YRCW9XWNM9", // Test ID
    },
    // config: { id: "G-2VJC9BC0L8" }, // Production ID
  },
  router,
);

app.mount("#app");
