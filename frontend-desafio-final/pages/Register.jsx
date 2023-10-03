import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


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

    const registrarUsuario = async () => {

        const urlServer = "http://localhost:3000";
        const endpoint = "/usuarios";
        console.log(name, email, password)
        var objeto = JSON.stringify({ nombre: name, email: email, password: password });
        var usuario = JSON.parse(objeto)

        console.log(usuario)
        try {

            await axios.post(urlServer + endpoint, usuario);
            alert("Usuario registrado con exito");
            navigate("/login")


        }

        catch (error) {

            alert("Algo salio mal... ");
            console.log(error);
        }



    }

    const handleSubmit = (e) => {
        e.preventDefault();





        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Password:', password);


        setName('');
        setEmail('');
        setPassword('');
    };




    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <form style={{ width: '300px', padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }} onSubmit={handleSubmit}>
                <h2 style={{ textAlign: 'center' }}>Registro</h2>
                <div style={{ marginBottom: '10px' }}>
                    <label htmlFor="name" style={{ display: 'block', marginBottom: '5px' }}>Nombre:</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={handleNameChange}
                        style={{ width: '100%', padding: '5px' }}
                        required
                    />
                </div>
                <div style={{ marginBottom: '10px' }}>
                    <label htmlFor="email" style={{ display: 'block', marginBottom: '5px' }}>Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={handleEmailChange}
                        style={{ width: '100%', padding: '5px' }}
                        required
                    />
                </div>
                <div style={{ marginBottom: '10px' }}>
                    <label htmlFor="password" style={{ display: 'block', marginBottom: '5px' }}>Contraseña:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={handlePasswordChange}
                        style={{ width: '100%', padding: '5px' }}
                        required
                    />
                </div>
                <button onClick={registrarUsuario} type="submit" style={{ width: '100%', padding: '10px', backgroundColor: 'blue', color: 'white', border: 'none', borderRadius: '5px' }}>Registrarse</button>
            </form>
        </div>
    );
}

export default Register;