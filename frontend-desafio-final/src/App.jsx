import { Routes, Route, Navigate } from "react-router-dom"

import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

import Home from "../pages/Home";
import Products from "../pages/Products";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Cart from "../pages/Cart";
import PizzaDetail from "../pages/PizzaDetail";

import Payment from "../pages/Payment.jsx";
import NotFound from "../pages/NotFound";

import { useContext } from "react";
import { AuthContext } from "../context/AuthContext.jsx";


const App = () => {
    const { user } = useContext(AuthContext);

    if (user === null) return <p>Cargando...</p>;

    return (
        <>
            <Navbar />
            <main>
                <Routes>
                    <Route
                        path="/"
                        element={<Home />}
                    />
                    
                    <Route
                        path="/pizzas/:id"
                        element={<PizzaDetail />}
                    />
                    <Route
                        path="/carrito"
                        element={<Cart />}
                    />
                    <Route
                        path="/Login"
                        element={<Login />}
                    />
                    <Route
                        path="/Register"
                        element={<Register />}
                    />
                    <Route
                        path="/Payment"
                        element={user ? <Payment /> : <Navigate to="/login" />}
                    />
                    <Route
                        path="/*"
                        element={<NotFound />}
                    />
                </Routes>
            </main>
            <Footer />
        </>
    )
};

export default App;