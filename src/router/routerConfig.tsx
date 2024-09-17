import Login from "../components/login/Login";
import  Home  from "../page/home/Home";

export  const routes = [
    {
        path: '/',
        Element:<Home/>
    },
    {
        path: '/login',
        Element:<Login/>
    }
]