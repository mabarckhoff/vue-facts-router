import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import AppLink from './components/AppLink.vue';

createApp(App).use(router).mount("#app").component('AppLink', AppLink)


