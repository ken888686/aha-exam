import { createApp } from 'vue';
import { initializeApp } from 'firebase/app';
import App from './App.vue';
import router from './router';
import store from './store';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const firebaseConfig = {};

initializeApp(firebaseConfig);

createApp(App).use(store).use(router).mount('#app');
