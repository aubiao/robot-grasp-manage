import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const routes = [
    {
        path: '/',
        redirect: '/dashboard'
    },
    {
        path: '/',
        component: () => import('../components/common/Home.vue'),
        meta: {title: 'Home'},
        children: [
            {
                path: 'dashboard',
                component: () => import('../components/page/Dashboard.vue'),
                meta: {title: '系统首页'}
            },
            {
                path: 'data',
                component: () => import('../components/page/Data.vue'),
                meta: {title: '数据'}
            },
        ]
    },
    {
        path: '/login',
        component: () => import('../components/page/Login.vue'),
        meta: {title: '登录'}
    }
]


const router = new Router({
    routes
});

export default router;