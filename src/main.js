
import { createApp } from 'vue'
import VueSweetalert2 from 'vue-sweetalert2';
import App from './App.vue'
import router from './routes';


import 'bootstrap/dist/css/bootstrap.css'
import 'sweetalert2/dist/sweetalert2.min.css';



createApp(App).use(VueSweetalert2).use(router).mount('#app')