const express = require('express')
const app = express()
const cors = require('cors')
const { verificarToken, verificarCredencial, reportar } = require("./middlewares")
const { registrar, iniciar, getUsuario } = require('./consultas')
const jwt = require('jsonwebtoken')

app.listen(3000, console.log("Servidor en puerto 3000"))
app.use(cors())
app.use(express.json())

app.post("/usuarios", reportar, async (req, res) => {
    try {
        const usuario = req.body;
        await registrar(usuario);
        res.send("Usuario creado con éxito!")
    } catch (error) {
        res.status(500).send(error);
        console.log("Error en app.post('/usuarios')")
    }
});

app.post("/login", verificarCredencial, reportar, async (req, res) => {
    try {
        const { email, password } = req.body;
        await iniciar(email, password);
        const token = jwt.sign({ email, password }, "SUPERCLAVE");
        console.log("Usuario inicia sesion // El token es: " + token);
        res.send(token)
    } catch (error) {
        res.status(500).send(error);
        console.log("Error en app.post('/login')")
    }
});

app.get("/usuarios", verificarToken, async (req, res) => {
    try {
        const Authorization = req.header("Authorization");
        const token = Authorization.split("Bearer ")[1];
        const { email } = jwt.verify(token, "SUPERCLAVE");
        const data = await getUsuario(email);
        res.send(data);
    } catch (error) {
        res.status(error.code || 500).send(error);
    }
});