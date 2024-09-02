CREATE database validacion 

-- Creacion de la tabla 

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(30),
    apellido VARCHAR(30),
    tipoDocumento VARCHAR(10),
    documento VARCHAR(13),
    telefono VARCHAR(10),
    fechaNacimiento DATE,
    salario DECIMAL(10, 2),
    email VARCHAR(50),
    direccionWeb VARCHAR(100),
    password VARCHAR(255)
);

