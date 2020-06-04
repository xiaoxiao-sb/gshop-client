/*
所有路由配置的数组
*/
import  Msite from '../pages/Msite/Msite'
import  Search from '../pages/Search/Search'
import  Order from '../pages/Order/Order'
import  Profile from '../pages/Profile/Profile'
import  Login from '../pages/Login/Login'
export default [
    {
        path:'/msite',
        component:Msite
    },
    {
        path:'/search',
        component:Search
    },
    {
        path:'/order',
        component:Order
    },
    {
        path:'/profile',
        component:Profile
    },
    {
        path:'/',
        redirect:'/msite'
    },
    {
        path:'/login',
        component:Login
    }
]