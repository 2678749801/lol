import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = () =>
    import ('../views/home/Home')
const ZiLiao = () =>
    import ('../views/ziliao/ZiLiao')


Vue.use(VueRouter)
const routes = [{
        path: '',
        redirect: '/home'
    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/ziliao',
        component: ZiLiao
    },

]
const router = new VueRouter({
    routes,
    mode: 'history'
})
const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return routerPush.call(this, location).catch(error => error)
}
export default router