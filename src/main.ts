import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap-icons/font/fonts/bootstrap-icons.woff'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import Button from './components/Button.vue'

const app = createApp(App);

app
.component('Navbar', Navbar)
.component('Footer', Footer)
.component('Button', Button)
.use(store)
.use(router)
.mount('#app');
