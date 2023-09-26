import { pool } from "../database/connection.js";

const create = async (products) => {
    const { title, price, user_id } = products;
    const query =
        "INSERT INTO products (title, price, user_id) VALUES ($1, $2, $3) RETURNING *";
    const values = [title, price, user_id];
    const { rows } = await pool.query(query, values);
    return rows[0];
};

const findOne = async (id) => {
    const query =
        "SELECT * FROM products WHERE product_id = $1";
    const values = [id];
    const { rows } = await pool.query(query, values);
    return rows[0];
};

const remove = async (id) => {
    const query =
        "DELETE FROM products WHERE product_id = $1 RETURNING *";
    const values = [id];
    await pool.query(query, values);
};

export const productsModel = {
    create,
    remove,
    findOne,
};