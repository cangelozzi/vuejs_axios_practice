import Vue from 'vue';
import App from './App.vue';

import axios from 'axios';

import router from './router';
import store from './store';

// share baseURL
axios.defaults.baseURL = "https://vuejs-axios-project.firebaseio.com";

axios.defaults.headers.common['Authorization'] = 'token123456789' // pass something to axios ie.token ....showing in DEV TOOLS Network...headers

// headers for GET
axios.defaults.headers.get['Accepts'] = 'application/json';


// ===== INTERCEPTORS like middleware functions run in each requests/response  ========
const requestInterceptor = axios.interceptors.request.use(config =>{
  console.log('Request Interceptor', config)
  // you can add some logic like for example check authorizations...
  return config;
});

axios.interceptors.response.use(res => {
  console.log("Response Interceptor", res);
  return res;
});

// REMOVING Interceptors ie for requestInterceptor
axios.interceptors.request.eject(requestInterceptor);

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
