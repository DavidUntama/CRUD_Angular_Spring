create database ejemplo;
use ejemplo;
create table personas
(
    id int not null auto_increment primary key,
    nombres varchar(50) not null,
    apellidos varchar(50) not null
);

INSERT INTO personas (id, nombres, apellidos) VALUES 
(1,'Jairo','Cabrera'),
(2,'Katherine','Gonzalez'),
(3,'Luis','Rodriguez'),
(4,'Mariana','Moreno'),
(5,'Roberto','Perez');