import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false

Vue.use(ElementUI)

//使用钩子函数对路由进行跳转
router.beforeEach((to, from, next) => {
    document.title = `${to.meta.title} | robot-grasp-manage`;
    // 登陆检查
    const role = localStorage.getItem('username');
    if (!role && to.path !== '/login') {
        next('/login');
    }
    next();
});

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
