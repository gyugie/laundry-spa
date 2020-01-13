import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/Home.vue'
import Login from './pages/Login.vue'
import store from './store.js'
//OUTLETS
import IndexOutlet from './pages/outlets/Index.vue'
import DataOutlet from './pages/outlets/Outlet.vue'
import AddOutlet from './pages/outlets/Add.vue'
import EditOutlet from './pages/outlets/Edit.vue'
// COURIERS
import IndexCourier from './pages/couriers/Index.vue'
import DataCourier from './pages/couriers/Courier.vue'
import AddCourier from './pages/couriers/Add.vue'
import EditCouriers from './pages/couriers/Edit.vue'


Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
            meta: { requiresAuth: true }
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/outlets',
            component: IndexOutlet,
            meta: { requiresAuth: true }, 
            children: [
                {
                    path: '',
                    name: 'outlets.data',
                    component: DataOutlet,
                    meta: { title: 'Manage Outlets' }
                },
                {
                    path: 'add',
                    name: 'outlets.add',
                    component: AddOutlet,
                    meta: { title: 'Add New Outlets' }
                },
                {
                    path: '/edit/:id',
                    name: 'outlets.edit',
                    component: EditOutlet,
                    meta: { title: 'Edit Outlets' }
                }
            ]
        },
        {
            path: '/couriers',
            component: IndexCourier,
            children: [
                {
                    path: '',
                    name: 'couriers.data',
                    component: DataCourier,
                    meta: { title: 'Manage Couriers'}
                },
                {
                    path: 'add',
                    name: 'couriers.add',
                    component: AddCourier,
                    meta: { title: 'Add Couriers'}
                },
                {
                    path: 'edit/:id',
                    name: 'couriers.edit',
                    component: EditCouriers,
                    meta: { title: 'Edit Couriers'}
                }
            ]
        }
    ]
});

router.beforeEach((to, from, next) => {
    store.commit('CLEAR_ERRORS');

    if(to.matched.length == 0){
        next({ name: 'login' })
    }

    if (to.matched.some(record => record.meta.requiresAuth)) {
        let auth = store.getters.isAuth;
        if (!auth) {
            next({ name: 'login' })
        } else {
            next()
        }
    } else {
        next()
    }
})

export default router
