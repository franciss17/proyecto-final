DROP TABLE IF EXISTS products;
DROP TABLE IF EXISTS users;

-- Crear tabla "users"
CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(50),
    email VARCHAR(100) NOT NULL UNIQUE,
	password VARCHAR(300) NOT NULL
);

-- Crear tabla "products"
CREATE TABLE products (
    products_id SERIAL PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    price VARCHAR(100) NOT NULL,
    user_id INT REFERENCES users(user_id) ON DELETE CASCADE
);

-- Insertar usuarios
INSERT INTO users (username, email, password) VALUES
    ('Usuario1', 'usuario1@example.com', '123123'),
    ('Usuario2', 'usuario2@example.com', '123123'),
    ('Usuario3', 'usuario3@example.com', '123123');