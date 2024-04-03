// ¿ Que es el scope?
// El scope se puedo decir que son las reglas que determinan
// la accesibilidad y visibilidad de variables y funciones en diferentes partes de un programa
// en otras palabras el scope define donde en tu codigo puedes tener acceso a una variable o funcion

//------------------------ TIPOS DE SCOPE-----------------------------

// // SCOPE GLOBAL

// // Cuando definimos algo en el scope global quiere decir que tenemos acceso a esa variable o informacion en todo el archivo
// // EJEMPLO

// let nombre = "Santiago";
// console.log(nombre);

// function nombreFuncion() {
//   console.log(nombre);

//   if (nombre) {
//     console.log(nombre);
//   }
// }

// nombreFuncion();

// // Como podemos ver en el codigo la varible nombre tiene un scope global debido a que podemos acceder a ella en tres ambitos diferentes,
// // globla, funcion y bloques pero no solo eso podemos acceder a ella en cualquier parte del codigo

// // SCOPE LOCAL

// // Este scope quiere decir que solo tenemos acceso a la informacion dentro de una funcion, esto quiere decir
// // que solo puedes acceder o modificar esa informacion dentro de una funcion

// function scopeLocal() {
//   let nombreLocal = "Santiago Local";
//   console.log(nombreLocal);

//   if (true) {
//     console.log(nombreLocal);
//   }
// }

// // console.log(nombreLocal); ERROR nombreLocal is not defined

// // Ahora como vemos en este ejemplo esto seria el scope local, debido a que solo tenmos acceso a la informacion de la variable dentro
// // de la funcion scopeLocal

// // SCOPE BLOQUE

// // Este se aplica tanto a funciones como estructuras logicas como condicionales, bucles , etc...
// // esre scope solo existe para let y const, por que solo existe en let y const
// // Esto se debe a que en la implementacion del ES6 (ECMAScript 2015) las varibales declaradas
// // con la palabra reservada var ( esto todavia pasa ) tenian un scope de funcion, tambien podriamos decirle local
// // esto quiere decir que aunque tu declaras una variable dentro de un bloque de codigo, ya sea condicional o bucle
// // podias tener acceso a este varibale fuera del bloque, con la implementacion del ES6 (ECMAScript 2015) esto cambio
// // ya que ahora las palabras reservadas para la declaracion de variables, let y const tienen un scope de bloque
// // lo que quiere decir que si las declaras dentro de una funcion pero a dentro de un bloque codigo solo puedes
// // acceso y puedes modificarla adentro de ese bloque codigo como en el ejemplo de abajo.

// function exampleFunction() {
//   if (true) {
//     var functionScopedVar = "Function Scoped"; // Scope de función con var
//     let blockScopedVar = "Block Scoped"; // Scope de bloque con let
//     const alsoBlockScopedVar = "Block Scoped"; // Scope de bloque con const
//   }

//   console.log(functionScopedVar); // Se puede acceder aquí, alcance de función
//   // console.log(blockScopedVar); // Error: blockScopedVar no está definida aquí, alcance de bloque
//   // console.log(alsoBlockScopedVar); // Error: alsoBlockScopedVar no está definida aquí, alcance de bloque
// }

// exampleFunction();
let manzana = 0;

function ejemplo() {
  let func = () => {
    return this, "linea 76";
  };
}

let obj = {
  funci: ejemplo,
};

console.log(obj.funci);

// Aclaraciones, diferencias que no se si realmente existe pero diferencias entre scope y contexto lexico
// el scope como ya lo mencionamos es el alcance que puede tener una variable, mientras que el contexto lexico
// se refiere a el lugar donde fue creada esta varibale
// en casos anteriores hable del this, pero creo qu eya por fin quedo entendido y lo que pasa con el this
// es que el this hereda el this del contexto lexico donde fue definido, enotonces si esta dentro de un if
// pues hereda el this del if ya que ahi fue donde fue definido.
