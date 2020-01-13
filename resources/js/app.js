import Vue from 'vue'
import router from './router.js'
import store from './store.js'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import VueSweetalert2 from 'vue-sweetalert2'
import notification from './components/Flash.vue';

import 'sweetalert2/dist/sweetalert2.min.css';

window.events = new Vue();

window.flash = function (message, level = 'success') {
    window.events.$emit('flash', { message, level });
};


Vue.use(VueSweetalert2)
Vue.use(BootstrapVue)

import 'bootstrap-vue/dist/bootstrap-vue.css'

new Vue({
    el: '#dw',
    router,
    store,
    components: {
        App,
        notification
    }
})