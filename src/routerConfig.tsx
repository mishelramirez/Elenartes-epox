import Login from "./components/login/Login";
import { Home } from "./page";

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