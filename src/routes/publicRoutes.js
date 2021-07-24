import ForgotPassword from "../pages/ForgotPassword";
import Home from "../pages/Home"
import Login from "../pages/Login"
import Signup from "../pages/Signup"
import { Routes } from "./routes"

const publicRoutes = [
    { exact: true, path: Routes.home, component: Home },
    { exact: true, path: Routes.login, component: Login },
    { exact: true, path: Routes.signup, component: Signup },
    { exact: true, path: Routes.forgotPassword, component: ForgotPassword },
];

export default publicRoutes
