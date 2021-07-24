import Dashboard from "../pages/admin/Dashboard"
import { Routes } from "./routes"

const adminRoutes = [
    { exact: true, path: Routes.admin, component: Dashboard },
];

export default adminRoutes
