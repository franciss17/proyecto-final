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

        <div className='Register sticky-bottom'>
            <form className="form_container" onSubmit={handleSubmit}>
                <h2 >Registro</h2>
                <div className="title_container">
                        <p className="title">Inicie Sesión</p>
                        <span className="subtitle">
                            Comience con nuestra aplicación, simplemente cree una cuenta y disfrute de la experiencia.
                        </span>
                    </div>
                <div className="input_container">
                    <label className="input_label" htmlFor="name" >Nombre:</label>
                    
                        <input
                            placeholder="José Hernandez"
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