const { Pool } = require('pg');
const bcrypt = require('bcryptjs');
require('dotenv').config();

const pool = new Pool({
    host: 'localhost',
    user: process.env.PGUSER,
    password: process.env.PGPASS,
    database: 'BDDesafioFinal',
    port: process.env.PGPORT,
    allowExitOnIdle: true
})

const registrar = async (usuario) => {
    let { nombre, email, password } = usuario;

    const passEncriptada = bcrypt.hashSync(password);

    console.log("Nombre: " + nombre);
    console.log("Nuevo Usuario: " + email);
    console.log("Password: " + password);
    console.log("Password Encriptado: " + passEncriptada);

    const consulta = "INSERT INTO registro VALUES (DEFAULT, $1, $2, $3)";
    const values = [nombre, email, passEncriptada]

    try {
        await pool.query(consulta, values)
    } catch (error) {
        console.log(error);
    }
}

const iniciar = async (email, password) => {

    const consulta = "SELECT * FROM registro WHERE email = $1"
    const values = [email];

    try {

        const { rows: [usuario], rowCount } = await pool.query(consulta, values);

        if (rowCount == 1) {
            const EncriptedDBPass = usuario.password;
            const passCorrecta = bcrypt.compareSync(password, EncriptedDBPass);

            if (passCorrecta) {
                console.log("Usuario Validado");
                return { error: false, msg: "Bienvenido." };
            } else {
                console.log("Datos Invalidos");
                return { error: true, msg: "Datos invalidos: Usuario y/o contraseña incorrectos" };
            }
        } else {
            return { error: true, msg: "Sus datos son invalidos: Usuario y/o contraseña incorrectos" };
        }

    } catch (error) {
        console.log(error);
        return { error: true, msg: "Error" };
    }

}

const getUsuario = async (email) => {

    const consulta = "SELECT nombre, email FROM registro WHERE email = $1";
    const values = [email];

    try {
        const { rows } = await pool.query(consulta, values);
        return rows[0];
    } catch (error) {
        console.log(error);
        throw error;
    }

};

const verificar = async (email) => {
    const consulta = "SELECT COUNT(*) FROM registro WHERE email = $1";
    const values = [email];

    try {
        const { rows: [{ count }] } = await pool.query(consulta, values);
        return count > 0;
    } catch (error) {
        console.log(error);
        throw new Error("Error, email existente");
    }
};

const validar = async (email, password) => {
    const consulta = "SELECT password FROM registro WHERE email = $1";
    const values = [email];

    try {
        const { rows } = await pool.query(consulta, values);
        if (rows.length === 0) {
            return false;
        }

        const storedPassword = rows[0].password;
        return bcrypt.compareSync(password, storedPassword);
    } catch (error) {
        console.log(error);
        throw new Error("Error validando los datos");
    }

};

const insertarPizza = async (pizza) => {
    const { titulo, descripcion, valor, img, ingredients } = pizza;
  
    const consulta = "INSERT INTO pizzas (titulo, descripcion, valor, img, ingredients) VALUES ($1, $2, $3, $4, $5)";
    const values = [titulo, descripcion, valor, img, ingredients];
  
    try {
      await pool.query(consulta, values);
      console.log("Pizza insertada correctamente");
    } catch (error) {
      console.error("Error al insertar la pizza: " + error.message);
    }
  };
  
  

module.exports = { registrar, iniciar, getUsuario, verificar, validar, insertarPizza};