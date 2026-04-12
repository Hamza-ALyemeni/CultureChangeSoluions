import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { defaultLocale, supportedLocales, type Locale } from '@/locales'

const childRoutes: Array<RouteRecordRaw> = [
    {
        path: '',
        name: 'home',
        component: HomeView
    },
    {
        path: 'about',
        name: 'about',
        component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    },
    {
        path: 'contact',
        name: 'contact',
        component: () => import(/* webpackChunkName: "contact" */ '../views/ContactView.vue')
    },
    {
        path: 'ohxray',
        name: 'ohxray',
        component: () => import(/* webpackChunkName: "contact" */ '../views/OhxrayView.vue')
    },
    {
        path: 'ohxray-demo',
        name: 'ohxray-demo',
        component: () => import(/* webpackChunkName: "ohxray-demo" */ '../views/OhxrayDemoView.vue')
    },
    {
        path: 'services',
        name: 'services',
        component: () => import(/* webpackChunkName: "services" */ '../views/ServicesView.vue')
    },
    {
        path: 'cmdp',
        name: 'cmdp',
        component: () => import(/* webpackChunkName: "cmdp" */ '../views/CMDPView.vue')
    },
    {
        path: 'ccs-program',
        name: 'ccs-program',
        component: () => import(/* webpackChunkName: "ccs-program" */ '../views/CcsProgramView.vue')
    },
    {
        path: 'training-program',
        name: 'training-program',
        component: { template: '<div></div>' }, // 👈 dummy component
        beforeEnter() {
            window.location.href = 'https://training.ccsconsulting.com.sa/courses/foundations-of-organizational-culture/register'
        }
    }
]

const routes: Array<RouteRecordRaw> = [
    {
        path: '/:locale',
        children: childRoutes,
        beforeEnter(to, _from, next) {
            const locale = to.params.locale as string
            if (!supportedLocales.includes(locale as Locale)) {
                return next(`/${defaultLocale}${to.path}`)
            }
            next()
        }
    },
    {
        path: '/',
        redirect: () => {
            const saved = localStorage.getItem('preferred-language')
            const locale = saved && supportedLocales.includes(saved as Locale) ? saved : defaultLocale
            return `/${locale}`
        }
    },
    {
        path: '/:pathMatch(.*)*',
        redirect: (to) => {
            const saved = localStorage.getItem('preferred-language')
            const locale = saved && supportedLocales.includes(saved as Locale) ? saved : defaultLocale
            return `/${locale}${to.path}`
        }
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
