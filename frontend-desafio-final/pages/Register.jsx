import React, { useState } from 'react';
import "../src/index.css"
import axios from "axios";
import { useNavigate } from 'react-router-dom'

const Register = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Password:', password);
        setName('');
        setEmail('');
        setPassword('');

        try{
            await axios.post("http://localhost:3000/usuarios", {name, email, password});
            alert("Usuario registrado con éxito");
            navigate("/Login");
          } catch (error) {
            alert("Algo salió mal ...");
            console.log(error);
          }

    };

    return (
        <div className='Register sticky-bottom'>
            <form className="form_container" onSubmit={handleSubmit}>
                <h2>Registro</h2>
                <div className="title_container">
                    <span className="subtitle">
                        Comience con nuestra aplicación, simplemente cree una cuenta y disfrute de la experiencia.
                    </span>
                </div>
                <div className="input_container">
                    <label className="input_label" htmlFor="name" >Nombre:</label>
                    <input
                        placeholder="Introduce tu nombre aquí"
                        title="Inpit title"
                        name="input-name"
                        type="text"
                        value={name}
                        onChange={handleNameChange}
                        required
                        className="input_field"
                        id="name"
                    />
                </div>
                <div className="input_container">
                    <label className="input_label" htmlFor="email_field">Email:</label>
                    <input
                        type="email"
                        placeholder="name@mail.com"
                        title="Inpit title"
                        className="input_field"
                        name="input-name"
                        id="email_field"
                        value={email}
                        onChange={handleEmailChange}
                        required
                    />
                </div>
                <div className="input_container">
                    <label className="input_label" htmlFor="password_field">
                        Contraseña:
                    </label>
                    <input
                        type="password"
                        id="password_field"
                        placeholder="Password"
                        title="Inpit title"
                        name="input-name"
                        className="input_field"
                        value={password}
                        onChange={handlePasswordChange}
                        required
                    />
                </div>
                <button type="submit" className="sign-in_btn" >Registrarse</button>
            </form>
        </div>
    );
}

export default Register;