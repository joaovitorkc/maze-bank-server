CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(95) NOT NULL,
    cpf VARCHAR(11) NOT NULL,
    password VARCHAR(45) NOT NULL,
    role INT NOT NULL,
    phone VARCHAR(11) NOT NULL,
    situation TINYINT(1),
    created_at TIMESTAMP
);


