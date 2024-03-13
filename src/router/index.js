import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/pedidos',
        name: 'Pedidos',
        component: () => import(/* webpackChunkName: "pedidos" */ '../views/Pedidos.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
