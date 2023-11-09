// 1 - Gabo: Tomar un nombre y un apellido por la terminal
// 2 - Vicky: Crear una función que tome dos argumentos (nombre y apellido). Convertirlo en un módulo.
// 3 - Escribir lógica de la función para que aparezca en consola asi: ¡HOLA GABRIEL ALBERINI!

const nombre = process.argv[2];
const apellido = process.argv[3];

function saludarGritando(nombre, apellido){
    console.log((`¡Hola ${nombre} ${apellido}!`).toLocaleUpperCase());
  
}
saludarGritando(nombre,apellido)
exports.module = saludarGritando