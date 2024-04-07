import { createRouter, createWebHistory } from 'vue-router';
import Index from './components/index.vue';
import ContentChatGpt from './components/chatGPT.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
        path: '/',
        name: 'Index',
        component: Index
      },
    {
      path: '/chatGPT', 
      name: 'ContentChatGpt',
      component: ContentChatGpt
    }
  ]
});

export default router;