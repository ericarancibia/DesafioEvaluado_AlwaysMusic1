import pool from "../config/db.js";

const argumento = process.argv.slice(2);
const opcion = argumento[0];
let nombre = argumento[1];
let rut = argumento[2];
let curso = argumento[3];
let nivel = argumento[4];

//agregar estudiantes {agregar}
const agregar = async () => {
  try {
  const consulta = "insert into datosAlumnos(nombre, rut, curso, nivel) values ($1, $2, $3, $4) returning *";
  const values = [nombre, rut, curso, nivel];
  const response = await pool.query(consulta, values);
  console.log(`Estudiante ${nombre} Agregado Correctamente`);
} catch (error) {
  console.log(error);}
};


//Obtener estudiante por rut {consultaRut}
const consultaRut = async () => {
  try {
    const consulta = "select * from datosAlumnos where rut = $1";
    const values = [rut];
    const response = await pool.query(consulta, values);
    console.log(response.rows);
    } catch (error) {
      console.log(error);}
    };

//Obtener todos los estudiantes registrados {verTodos}
const verTodos = async () => {
  try {
  const consulta = "select * from datosAlumnos";
  const response = await pool.query(consulta);
  console.log("Registro Actual:", response.rows);
} catch (error) {
  console.log(error);}
};

//Actualizar datos estudiante {editar}
const editar = async () => {
  try {
  const consulta =
    "UPDATE datosAlumnos SET nombre = $1, rut = $2, curso = $3, nivel = $4 WHERE rut = $2";
  const values = [nombre, rut, curso, nivel];
  const response = await pool.query(consulta, values);
  console.log("Datos de Estudiante Actualizados");
} catch (error) {
  console.log(error);}
};


//Eliminar registro estudiante {eliminar}
const eliminar = async () => {
  try {
  const consulta = "delete from datosAlumnos where rut = $1";
  const values = [rut];
  const response = await pool.query(consulta, values);
  console.log(`Registro de estudiante con RUT ${rut} eliminado correctamente`)
  } catch (error) {
    console.log(error);}
  };

if (opcion === "agregar") {
  agregar (nombre, rut, curso, nivel);
} else if (opcion === "consultaRut") {
  rut = argumento[1];
  consultaRut(rut);
} else if (opcion === "verTodos") {
  verTodos();
} else if (opcion === "editar") {
  editar(nombre, rut, curso, nivel);
} else if (opcion === "eliminar") {
  rut = argumento[1];
  eliminar(rut);
} else {
  console.log("Opción no válida");
}
