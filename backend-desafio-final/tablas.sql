-- Crear tabla clientes

create table registro (
    
    id serial primary key, 
    nombre varchar(50), 
    email varchar(100) NOT NULL UNIQUE, 
    password varchar(500) NOT NULL
    );

select * from registro;

-- Crear tabla pizzas

create table pizzas(
    
    id varchar(50) primary key, 
    titulo varchar(50) NOT NULL, 
    descripcion varchar(500), 
    valor integer NOT NULL,
    img varchar(100)
    
    
    );

select * from pizzas;

    -- crear tabla ingredientes

    create table ingredientes(

    id_pizzas varchar(50), 
    ingrediente varchar(100)

    );

select * from ingredientes;

-- Crear tabla compra

create table compra (
    
    id integer primary key, 
    nombre_id integer, 
    pizza_id varchar(50)
    
    );

select * from compra;


-- Ingresar datos a tabla Pizzas

INSERT INTO PIZZAS (id, titulo, descripcion, valor, img )
VALUES ( 'p001', 'PEPPERONI' ,'La Pepperoni Pizza es una clásica y sabrosa creación que ha conquistado los corazones de los amantes de la pizza en todo el mundo. Esta pizza se destaca por su base de masa, generosamente cubierta con salsa de tomate, queso mozzarella derretido y, por supuesto, rebanadas de pepperoni, un tipo de salami ligeramente picante.', 8200 ,'https://tofuu.getjusto.com/orioneat-prod-resized/obg2bQdJza9yf9Pyo-350-350.webp');
INSERT INTO PIZZAS (id, titulo, descripcion, valor, img )
VALUES ( 'P002', 'OLIVO' ,'La Olivo Pizza es una creación culinaria que combina la frescura y riqueza de las aceitunas con la tradicional delicia de la pizza. Nuestra especialidad incluye una variedad de ingredientes de primera calidad, desde aceitunas negras hasta champiñones, para brindarte una experiencia única de sabor mediterráneo en cada rebanada.', 8100 ,'https://tofuu.getjusto.com/orioneat-prod-resized/qnYsh9CDopE4deMh8-1200-1200.webp');
INSERT INTO PIZZAS (id, titulo, descripcion, valor, img )
VALUES ( 'P003', 'CAMPESINA' ,'La Campesina Pizza es una maravillosa creación que celebra la frescura de los ingredientes de la granja. Esta pizza presenta una base de masa perfectamente horneada, generosamente cubierta con una rica salsa de tomate casera. Sus ingredientes principales incluyen carne sabrosa, porotos verdes tiernos, tomate jugoso y ají picante.', 9000 ,'https://tofuu.getjusto.com/orioneat-prod-resized/obg2bQdJza9yf9Pyo-350-350.webp');
INSERT INTO PIZZAS (id, titulo, descripcion, valor, img )
VALUES ( 'P004', 'CARNIVORA' ,'La Carnívora Pizza es una deliciosa creación que rinde homenaje a los amantes de la carne. Con una base de masa crujiente, esta pizza se inunda de una salsa pomodoro fresca y está abundantemente cubierta con queso mozzarella derretido que crea una capa de cremosidad irresistible.', 9100 ,'https://tofuu.getjusto.com/orioneat-prod-resized/8pWFLzTz5469dpuez-1200-1200.webp');
INSERT INTO PIZZAS (id, titulo, descripcion, valor, img )
VALUES ( 'P005', 'HAWAIANA' ,'La Hawaiana Pizza es una mezcla encantadora de sabores dulces y salados en cada rebanada. Esta pizza comienza con una base de masa perfectamente horneada y se cubre con una generosa capa de queso mozzarella derretido que aporta cremosidad a cada bocado. Sus ingredientes estrella incluyen jamón y piña, que combinan la dulzura natural de la piña con la salinidad del jamón.', 8100 ,'https://tofuu.getjusto.com/orioneat-prod-resized/HkCp4EcXj6h2p68of-1200-1200.webp');
INSERT INTO PIZZAS (id, titulo, descripcion, valor, img )
VALUES ( 'P006', 'POLLO BBQ' ,'La Pollo BBQ Pizza es una verdadera delicia que combina la suavidad del pollo con la audacia de la salsa barbacoa. Comenzando con una base de masa perfectamente horneada, esta pizza se cubre con una salsa de barbacoa rica y una generosa cantidad de queso mozzarella derretido. Los trozos de pollo, previamente cocidos y sazonados con el delicioso sabor de la barbacoa, son el ingrediente principal que aporta una textura tierna y un sabor ahumado a la pizza.', 9500 ,'https://tofuu.getjusto.com/orioneat-prod-resized/tAF8hKfo4xtd2JRky-1200-1200.webp');
INSERT INTO PIZZAS (id, titulo, descripcion, valor, img )
VALUES ( 'P007', 'MARGARITA' ,'La Margarita Pizza, conocida simplemente como Margarita, es una joya de la simplicidad en el mundo de la pizza. Con una base de masa delgada y crujiente, esta pizza presenta una mezcla de ingredientes básicos pero exquisitos. Se inicia con una salsa de tomate fresca y luego se cubre con una generosa base de crema, que se extienden de manera uniforme, creando una capa cremosa y deliciosa.', 8100 ,'https://tofuu.getjusto.com/orioneat-prod-resized/MwBokxEA6sQw2Q372-1200-1200.webp');
INSERT INTO PIZZAS (id, titulo, descripcion, valor, img )
VALUES ( 'P008', 'NONNA' ,'La Nonna Pizza con base de crema es una verdadera delicia que rinde homenaje a las tradiciones culinarias de la abuela (Nonna en italiano). Con una base de masa fina y crujiente, esta pizza destaca por su salsa de crema, que aporta una textura suave y un sabor indulgente.', 9200 ,'https://tofuu.getjusto.com/orioneat-prod-resized/Hvrhr9wNqPy3pyNC6-1200-1200.webp');

-- Ingresar datos a tabla ingredientes

Insert INTO INGREDIENTES (id_pizzas, ingrediente) VALUES ('P001', 'Base Queso Mozarella + Salsa Pomodoro');
Insert INTO INGREDIENTES (id_pizzas, ingrediente) VALUES ('P001', 'Pepperoni');
Insert INTO INGREDIENTES (id_pizzas, ingrediente) VALUES ('P001', 'Orégano');
Insert INTO INGREDIENTES (id_pizzas, ingrediente) VALUES ('P002', 'Base Queso Mozarella + Salsa Pomodoro');
Insert INTO INGREDIENTES (id_pizzas, ingrediente) VALUES ('P002', 'Aceitunas Negras');
Insert INTO INGREDIENTES (id_pizzas, ingrediente) VALUES ('P002', 'Champiñones');
Insert INTO INGREDIENTES (id_pizzas, ingrediente) VALUES ('P002', 'Choclo');
Insert INTO INGREDIENTES (id_pizzas, ingrediente) VALUES ('P002', 'Espárragos');
Insert INTO INGREDIENTES (id_pizzas, ingrediente) VALUES ('P003', 'Base Queso Mozarella + Salsa Pomodoro');
Insert INTO INGREDIENTES (id_pizzas, ingrediente) VALUES ('P003', 'Carne');
Insert INTO INGREDIENTES (id_pizzas, ingrediente) VALUES ('P003', 'Porotos Verdes');
Insert INTO INGREDIENTES (id_pizzas, ingrediente) VALUES ('P003', 'Tomate');
Insert INTO INGREDIENTES (id_pizzas, ingrediente) VALUES ('P003', 'Ají');
Insert INTO INGREDIENTES (id_pizzas, ingrediente) VALUES ('P004', 'Base Queso Mozarella + Salsa Pomodoro');
Insert INTO INGREDIENTES (id_pizzas, ingrediente) VALUES ('P004', 'Carne');
Insert INTO INGREDIENTES (id_pizzas, ingrediente) VALUES ('P004', 'Choricillo');
Insert INTO INGREDIENTES (id_pizzas, ingrediente) VALUES ('P004', 'Jamón');
Insert INTO INGREDIENTES (id_pizzas, ingrediente) VALUES ('P004', 'Pollo');
Insert INTO INGREDIENTES (id_pizzas, ingrediente) VALUES ('P005', 'Extra Queso Mozarella');
Insert INTO INGREDIENTES (id_pizzas, ingrediente) VALUES ('P005', 'Jamón');
Insert INTO INGREDIENTES (id_pizzas, ingrediente) VALUES ('P005', 'Piña');
Insert INTO INGREDIENTES (id_pizzas, ingrediente) VALUES ('P006', 'Base Queso Mozarella');
Insert INTO INGREDIENTES (id_pizzas, ingrediente) VALUES ('P006', 'Pollo');
Insert INTO INGREDIENTES (id_pizzas, ingrediente) VALUES ('P006', 'Salsa BBQ');
Insert INTO INGREDIENTES (id_pizzas, ingrediente) VALUES ('P006', 'Cebolla Morada');
Insert INTO INGREDIENTES (id_pizzas, ingrediente) VALUES ('P006', 'Cebollín');
Insert INTO INGREDIENTES (id_pizzas, ingrediente) VALUES ('P007', '(Base Crema)');
Insert INTO INGREDIENTES (id_pizzas, ingrediente) VALUES ('P007', 'Tomate Cherry');
Insert INTO INGREDIENTES (id_pizzas, ingrediente) VALUES ('P007', 'Orégano');
Insert INTO INGREDIENTES (id_pizzas, ingrediente) VALUES ('P007', 'Pesto de Albahaca y Albahaca');
Insert INTO INGREDIENTES (id_pizzas, ingrediente) VALUES ('P008', '(Base Crema)');
Insert INTO INGREDIENTES (id_pizzas, ingrediente) VALUES ('P008', 'Tocino Ahumado');
Insert INTO INGREDIENTES (id_pizzas, ingrediente) VALUES ('P008', 'Espinaca');
Insert INTO INGREDIENTES (id_pizzas, ingrediente) VALUES ('P008', 'Champiñon');


