CREATE TABLE datosAlumnos(
	id serial primary key,
	nombre varchar(50) NOT NULL,
	rut varchar(50) NOT NULL,
	curso varchar(50) NOT NULL,
	nivel int NOT NULL
);