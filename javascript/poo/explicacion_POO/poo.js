console.log(Date()) 
console.log(new Date())

// Diferencias para entender la POO 
// En el primero tenemod un metodo el cual devulve un string, al ser un string
// solo es manipulable como styring entoncess tiene los metodos de un string para su manipulacion
// Encambio el new Date() esta creando un objeto de tipo fecha el cual tiene sus propio metodo para la manipulacion como

// Cadena de texto que representa una fecha
var fechaString = "2024-03-15";

// Convertir la cadena de texto en un objeto Date
var fechaObjeto = new Date(fechaString);

// Obtener el día del mes
var dia = fechaObjeto.getDate();

// Obtener el mes (los meses empiezan desde 0, por lo que se suma 1)
var mes = fechaObjeto.getMonth() + 1;

// Obtener el año
var año = fechaObjeto.getFullYear();

// Mostrar la fecha manipulada
console.log("La fecha es: " + dia + "/" + mes + "/" + año);

// Cualquier tipo de dato que no es un objeto se le conoce como un tipo de dato primitivo

// En js aunque uno tiene tipos de datos primitivos, podemos hacer que esos datos se vuelvan datos 
// tipo objeto creando el objeto de sus datos

// EJEMPLO
// En js tenemos que los datos primitivos, son los numeros, strings, boolean, undefined, null, symbol
// MODIFICANDO DATOS PRIMITIVOS A OBJETCS

let stringPrimitivo = "Santiago"
let numberPrimitivo = 12
let booleanPrimitivo = true
let nullPrimitivo = null
let undefinedPrimitivo = undefined

console.log(
    `--------------------------
    ${typeof stringPrimitivo}\n,
    ${typeof numberPrimitivo}\n,
    ${typeof booleanPrimitivo}\n,
    ${typeof nullPrimitivo}\n,
    ${typeof undefinedPrimitivo}\n` )

// NULL es un tipo de dato object caundo usamos el typeof por diferentes razon a la hora de la creacion pero es un error
// NULL es un tipo de dato primitivo

let stringObject = new String("Santiago")
let numberObject = new Number(12)
let booleanObject = new Boolean(true) 
let nullObject = null
let undefinedObject = new Object(undefined)

console.log(
    `--------------------------
    ${typeof stringObject}\n,
    ${typeof numberObject}\n,
    ${typeof booleanObject}\n,
    ${typeof nullObject}\n,
    ${typeof undefinedObject}\n` )

// De esta forma hacemos que los tipos de datps que antes eran primitivos ahora sean objetos
// pero son lo mismo y cumplen la misma funcion