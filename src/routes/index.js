import Home from "~/pages/Home"
import Following from "~/pages/Following"
import Profile from "~/pages/Profile"

import HeaderOnly from "~/layouts/HeaderOnly"

export const publicRoutes=[
    {
        path: "/",
        component: Home,
    },
    {
        path: "/following",
        component: Following,
    },
    {
        path: "/profile",
        component: Profile,
        layout: HeaderOnly
    }
]

export const privateRoutes=[
    
]