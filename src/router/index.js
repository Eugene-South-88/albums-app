import {createRouter, createWebHistory} from "vue-router";
import MainLayout from "@/layout/MainLayout.vue";
import MainPage from "@/views/MainPage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes:[
    {path: '/babmbit-test-task/', component: MainLayout, children:[
        {path: '', component: MainPage}
      ]}
  ]
})

export default router