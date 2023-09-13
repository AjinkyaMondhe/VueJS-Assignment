import {createWebHistory,createRouter} from 'vue-router'

import Home from './components/Home.vue'
import LoginModal  from './modal/loginModal.vue'
import SignupModal from './modal/signupModal.vue'
import Main from './components/Main.vue'
import CreateTaskModal from './modal/createTaskModal.vue'
import Profile from './components/Profile.vue'


const routes = [
    {
        name:'Home',
        path:'/',
        component: Home
    },
    {
        name:'loginModal',
        path:'/login',
        component: LoginModal
    },
    {
        name:'signupModal',
        path:'/signup',
        component: SignupModal
    },
    {
        name:'Main',
        path:'/main',
        component: Main
    },
    {
        name:'createTaskModal',
        path:'/createTaskModal',
        component: CreateTaskModal
    },
    {
        name:'profile',
        path:'/profile',
        component: Profile
    },

   
];
const router = createRouter({
        history:createWebHistory(),
        routes
})
export default router;