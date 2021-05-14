import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import './assets/main.css';

import { projectAuth } from './firebase/config';

let app;

projectAuth.onAuthStateChanged((user) => {
    console.log('main: ', user)
  if (!app) {
    app = createApp(App)
      .use(router)
      .mount('#app');  
  }
});
