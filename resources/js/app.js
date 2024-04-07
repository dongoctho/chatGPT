import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { createApp } from 'vue';
import router from './route';
import index from './components/index.vue';
import App from './App.vue';
const app = createApp(App);

app.component('index', index)
   .use(router)
   .mount('#app');