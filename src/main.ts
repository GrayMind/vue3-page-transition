import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from "/@/router/index";
import 'vant/lib/index.css';
import './style/fade.css'
import './style/fade-left.css'

const app = createApp(App);
app.use(router);
app.mount("#app");