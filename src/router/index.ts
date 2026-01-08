import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    },
    {
        path: '/contact',
        name: 'contact',
        component: () => import(/* webpackChunkName: "contact" */ '../views/ContactView.vue')
    },
    {
        path: '/ohxray',
        name: 'ohxray',
        component: () => import(/* webpackChunkName: "contact" */ '../views/OhxrayView.vue')
    },
    {
        path: '/ohxray-demo',
        name: 'ohxray-demo',
        component: () => import(/* webpackChunkName: "ohxray-demo" */ '../views/OhxrayDemoView.vue')
    },
    {
        path:'/services',
        name:'services',
        component: () => import(/* webpackChunkName: "services" */ '../views/ServicesView.vue')
    },
    {
        path:'/cmdp',
        name:'cmdp',
        component: () => import(/* webpackChunkName: "cmdp" */ '../views/CMDPView.vue')
    },
    {
        path:'/ccs-program',
        name:'ccs-program',
        component: () => import(/* webpackChunkName: "ccs-program" */ '../views/CcsProgramView.vue')
    },
    {
        path: '/training-program',
        name: 'training-program',
        component: () => import(/* webpackChunkName: "training-program" */ '../views/TrainingProgramView.vue')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
