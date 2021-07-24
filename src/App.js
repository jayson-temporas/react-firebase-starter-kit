import { AuthProvider } from "./contexts/AuthContext"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import  publicRoutes  from "./routes/publicRoutes"
import clientRoutes from "./routes/clientRoutes"
import adminRoutes from "./routes/adminRoutes"
import ClientRoute from "./ClientRoute"
import AdminRoute from "./AdminRoute"

function App() {

return (
    <Router>
        <AuthProvider>
            <Switch>
                {publicRoutes.map((route, idx) => {
                    return <Route key={idx} {...route} />
                })}
                {clientRoutes.map((route, idx) => {
                    return <ClientRoute key={idx} {...route} />
                })}
                {adminRoutes.map((route, idx) => {
                    return <AdminRoute key={idx} {...route} />
                })}
            </Switch>
        </AuthProvider>
    </Router>
    )
}

export default App
