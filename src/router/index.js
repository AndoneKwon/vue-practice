import Vue from "vue"
import Router from "vue-router"
import Home from "../components/Home.vue"
import Login from "../components/Login.vue"
import Me from "../components/Me.vue"
import Register from "../components/Register";
import Contents from "@/components/Contents";
import Chat from "../components/Chat";

Vue.use(Router)

const requireAuth = () => (from, to, next) => {
    const isAuthenticated = false
    if (isAuthenticated) return next()
    next('/login?returnPath=me')
}

export default new Router({
    mode: "history",
    routes: [
        {
            path: "/",
            name: "Home",
            component: Home,
        },
        {
            path: "/login",
            name: "Login",
            component: Login,
        },
        {
            path : "/register",
            name : "Register",
            component: Register,
        },
        {
            path : "/contents",
            name : "Contents",
            component: Contents,
        },
        {
            path: "/me",
            name: "Me",
            component: Me,
            beforeEnter: requireAuth,
        },
        {
            path:"/chat",
            name:"chat",
            component: Chat,
        },

    ],
})