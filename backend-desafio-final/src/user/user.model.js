import { pool } from '../database/connection.js';

const create = async (user) => {
    const { username, email, password } = user;
    const query =
        "INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *";
    const values = [username, email, password];
    const { rows } = await pool.query(query, values);

    const { password: _, ...newUser } = rows[0];
    return newUser;
};

const findOne = async (email) => {
    const query = "SELECT * FROM users WHERE email = $1";
    const values = [email];
    const { rows } = await pool.query(query, values);
    return rows[0];
};

export const userModel = {
    create,
    findOne,
};