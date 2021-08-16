import Vue from 'vue'
import VueRouter from 'vue-router'
import homePageRouters from '../components/route'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login',
},
{
    path: '/login',
    name: 'Login',
    component: () => import('../components/Login.vue')
},
{
  path: '/signup',
  name: 'Signup',
  component: () => import('../components/Signup.vue')
},
{
  path: '/home',
  name: 'Home',
  component: () => import('../components/Home.vue'),
  children: [
    ... homePageRouters
]
}
]

const router = new VueRouter({
  routes
})

export default router
