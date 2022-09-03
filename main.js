// declaracion de la variable 
let nombre; 

// Declaracion de una variable y designando un valor 
let semestre = 1;
let calificacion = 9;
let grupo = 'A';
let inscrito = true;
/*no se puede dejar espacio entre dos 
palabras en una variable al pegar la segunda 
palabra se pone mayuscula su primera letra 
*/
let TemperaturaPromedio = 35.7;
let AreaCirculo = 20.9;

//declaracion de una constante 
const PI = 3.1416;
//una constante no se puede modificar 
console.log(PI)

console.log(calificacion);

calificacion = 20;
console.log(calificacion);

calificacion = calificacion + 5;
console.log(calificacion);

//imprimir contenido de la variable 
console.log(nombre);
console.log(semestre);
console.log(grupo);
console.log(inscrito);

//imprimir el tipo de dato de la variable
console.log(typeof nombre);
console.log(typeof semestre);
console.log(typeof grupo);
console.log(typeof inscrito);

let semestre1 = 1.5;
let calificacion1 = 9; 
/*se le llama string cuando estra entre
comullas '1.5' causando que no se puedan 
hacer operaciones con esos numeros 
*/
let grupo1 = '1.5';
let inscrito1 = true; 

//causando una suma de variables 
console.log(semestre1 + calificacion1)
console.log(semestre1 + grupo1)
