import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { CreateAccount } from "./pages/CreateAccount"


export const AppRoutes = () => {
    return (
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/create-account' element={<CreateAccount />} />


            </Routes>

    )
}