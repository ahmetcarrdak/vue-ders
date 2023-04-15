import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('../views/AboutView.vue')
    },
    {
        path: '/students',
        name: 'students',
        component: () => import('../views/Students.vue')
    },
    {
        path: '/studentInfo/:id',
        name: 'studentInfo',
        component: () => import('../views/StudentInfo.vue'),
        props:true
    },
    {
        path: '/student',
        redirect:'/students'
    },
    {
        path: '/:catchAll(.*)',
        name: 'notFound',
        component: () => import('../views/NotFound.vue'),
        props:true
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
