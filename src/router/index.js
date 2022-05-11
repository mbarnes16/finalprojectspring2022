import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import CreateReviewPage from '../views/CreateReviewPage.vue'
import MyReviews from "../views/MyReviews";
import ViewReviews from "../views/ViewReviews";


Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'HomePage',
        component: Home
    },
    {
        path: '/create',
        name: 'create',
        component: CreateReviewPage,
        props: true
    },
    {
        path: '/myreviews',
        name: 'myreviews',
        component: MyReviews
    },
    {
        path: '/viewreviews',
        name: 'view',
        component: ViewReviews
    },
]

const router = new VueRouter({
    routes
})

export default router