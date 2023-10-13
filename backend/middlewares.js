const jwt = require('jsonwebtoken')
const { verificar, validar } = require('./consultas')


const verificarToken = (req, res, next) => {
    const token = req.header("Authorization").split("Bearer ")[1]
    if (!token) throw { code: 401, message: "Debe incluir el token (Authorization)" }

    const tokenValido = jwt.verify(token, "SUPERCLAVE")
    if (!tokenValido) throw { code: 401, message: "Token no valido" }
    const { email } = jwt.decode(token)
    console.log("Solicitud enviada: " + email)
    next()
}

const verificarCredencial = async (req, res, next) => {
    const { email, password } = req.body;

    try {
        const emailExists = await verificar(email);
        if (!emailExists) {
            return res.status(400).send("El usuario no existe");
        }

        const credencialesValidas = await validar(email, password);
        if (!credencialesValidas) {
            return res.status(401).send("Datos invalidos");
        }

        next();
    } catch (error) {
        res.status(500).send(error.message);
        console.log("Error en verificarCredencial");
    }
};

const reportar = async (req, res, next) => {
    const parametros = req.method === "GET" ? req.query : req.body;
    const url = req.url
    console.log(`
    Hoy ${new Date()}
    Se ha recibido una consulta en la ruta ${url}
    con los parametros:
    `, parametros)
    next()
}

module.exports = { verificarToken, verificarCredencial, reportar }