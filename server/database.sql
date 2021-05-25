-- CREATE DATABASE perntodo;

-- CREATE TABLE todo(
--     todo_id SERIAL PRIMARY KEY,
--     description VARCHAR(255)
-- );

CREATE DATABASE user_info;

CREATE TABLE user_contact(
    contact_id SERIAL PRIMARY KEY,
    first_name  VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    birth_date VARCHAR(10) NOT NULL,
    phone_number VARCHAR(20) NOT NULL,
    address_info VARCHAR(100) NOT NULL,
    notes VARCHAR(255)
);