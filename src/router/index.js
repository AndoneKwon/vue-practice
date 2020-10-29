import Vue from "vue"
import Router from "vue-router"
import Home from "../components/Home.vue"
import Login from "../components/Login.vue"
import Me from "../components/Me.vue"
import Register from "../components/Register";
import Contents from "@/components/Contents";
import Chat from "../components/Chat";
import Chat2 from "../components/Chat2";
import Pay from "../components/Pay";
import Create from "../components/Create";


Vue.use(Router)

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
        },
        {
            path: "/paymodule",
            name: "Pay",
            component: Pay,
        },
        {
            path:"/chat",
            name:"chat",
            component: Chat,
        },
        {
            path:"/chat2",
            name:"chat2",
            component: Chat2,
        },
        {
            path:"/create",
            name:"chat",
            component: Create,
        },

    ],
})