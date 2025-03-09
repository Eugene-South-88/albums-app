import { createApp } from 'vue'
import App from './App.vue'

import router from "@/router/index.js";
import {createPinia} from "pinia";

import './style.css'

createApp(App)
  .use(createPinia())
  .use(router)
  .mount('#app')
