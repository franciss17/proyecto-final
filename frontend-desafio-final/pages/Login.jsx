import React, { useState } from "react"
import { useNavigate } from "react-router-dom";


import axios from "axios";


const Login = () => {

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

    };

    console.log('Email:', email);
    console.log('Password:', password);

    const iniciarSesion = async () => {
        const urlServer = "http://localhost:3000";
        const endpoint = "/login";
        // const { email, password } = usuario;
        var objeto = JSON.stringify({ email: email, password: password });
        var usuario = JSON.parse(objeto)
        try {
            if (!email || !password) return alert("Email y password obligatorias");
            const { data: token } = await axios.post(urlServer + endpoint, usuario);
            alert("Usuario identificado con éxito 😀");
            localStorage.setItem("token", token);
            // setUsuario()
            navigate("/carrito");
        } catch ({ response: { data: message } }) {
            alert(message + " 🙁");
            console.log(message);
        }
    };

    return (
        <div className="col-10 col-sm-6 col-md-3 m-auto mt-5">
            <h1>Iniciar Sesión</h1>
            <hr />
            <form onSubmit={handleSubmit}>
                <div className="form-group mt-1 ">
                    <label htmlFor="email">Email address</label>
                    <input
                        value={email}
                        onChange={handleEmailChange}
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="Enter email"
                    />
                </div>
                <div className="form-group mt-1 ">
                    <label htmlFor="password">Password</label>
                    <input
                        value={password}
                        onChange={handlePasswordChange}
                        type="password"
                        name="password"
                        className="form-control"
                        placeholder="Password"
                    />
                </div>

                <button onClick={iniciarSesion} type="submit" className="btn btn-light mt-3">
                    Iniciar Sesión
                </button >
            </form>
        </div >
    );
}

export default Login;