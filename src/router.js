import HomePage from './components/HomePage.vue'
import SignUp from './components/SignUp.vue'
import LoginPage from './components/LoginPage.vue'
import AddResto from './components/AddResto.vue'
import UpdateResto from './components/UpdateResto.vue'
import ImageModal from './components/ImageModal.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        name: 'HomePage',
        component: HomePage,
        path: '/'
    },
    {
        name: 'SignUp',
        component: SignUp,
        path: '/sign-up'
    },
    {
        name: 'LoginPage',
        component: LoginPage,
        path: '/login'
    },
    {
        name: 'AddResto',
        component: AddResto,
        path: '/add'
    },
    {
        name: 'UpdateResto',
        component: UpdateResto,
        path: '/update/:id'
    },
    {
        name: 'ImageModal',
        component: ImageModal,
        path: '/image'
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
