// Para crear un objeto literal en js con los creamos con las llaves de esta forma

let object = { }

console.log(object)

// Sirve para asignar distintos datos a una misma entidad
// EJEMPLO

let personaObject = {
    nombre: "Juan",
    apellido: "Ramirez",
    edad: 18,
    genero: ["Hombre", "Mujer"]
}

// Entidad = persona
// Datos =    
    // nombre: "Juan",
    // apellido: "Ramirez",
    // edad: 18,
    // genero: ["Hombre", "Mujer"]



function persona(nombre, apellido, edad, genero) {
    let personaV = {
    nombre: nombre,
    apellido: apellido,
    edad: edad,
    genero: genero,
    showFullName: (nombre, apellido) => {
        return `${nombre} ${apellido}`
    }
    }  

    return personaV

}

// console.log(persona("Santiago", "Fajardo", 19, "Hombre"))

// En los objetos o POO cuando tenemos datos que describen a un objeto lo vamos a llamar propiedades
// y cuando queremos que ese realice alguna accion lo vamos a llamar metodo, los metodos son las acciones que hace el objeto
// esos metodos los hacemos como funciones

let personaV = {
    nombre: "Santiago",
    apellido: "Fajardo",
    edad: 18,
    genero: "Hombre",
    showFullName: function(){
        return `${this.nombre} ${this.apellido}`
    }
}  

console.log(personaV.showFullName())

// Lexico circundante
// Se refiere al entorno en el que una funcion fue definida,
// Esto quiere decir que es el ambito en el que esa funcion existe sintacticamente en el codigo
// Exactamente. El contexto léxico circundante de una función de flecha solo cambia si se declara dentro de otra función. Cuando una función de flecha se define dentro de otra función, la función de flecha hereda el this del contexto léxico circundante, que en este caso sería el contexto de la función externa.

// Es por esat razon que este codigo


let personaTres = {
    nombre: "Santiago",
    apellido: "Fajardo",
    edad: 18,
    genero: "Hombre",
    showFullName: function(){
        return `${this.nombre} ${this.apellido}`
    }
}  

console.log(personaTres.showFullName())
globalThis.nam = "santiago"


// Arroja undefined undefined, debido a que las funciones flechas tienen otro comportamiento
// ¿ Por que pasa esto ?
// Para entender esto entendamos como funciona el this, el this hace refenrecia al contexto 
// En las funciones regulares como function nombre(){return this.name} ese this.name hace referencia
// al objeto global debido a que el objeto en el que estan siendo declaradas o el conetxto en el que esta siendo declarado, es el objeto global
// O sea que, como la funcion esta declarada en el ambito global, el objeto de esta funcion sera el objeto global, entonces 
// el this buscara en el objeto global la variable name, en el caso del navegador el objeto global es window y en node es global
// si la funcion estuviese declarada en un objeto creado la funcion haria referencia a ese objeto y asi funciona el this de una funcion regular 


// Como las clases, cuando tu creas una clase y declaras un this, el this hace referencia a ese ambito, al ambito de la clase y si quieres acceder o
// hacer referencia a una variable dentro una funcion usas el this para acceder a esa funcion entonces para  unir puntos, las clases son las plantillas, de las cuales
// se crean objetos y los objetos son las entidades el this se declara en la plantilla haciendo que caulquier this declarado dentro de la clase,
// haga referencia al objeto posteriormente creado a partir de esa plantilla

// ¿ Pero que pasa con las funciones flechas ?
// Las funciones flecha no tienen su propio this, en cambio ellas la heredan el this de contexto lexico mas cercano, que pasa que casi todo en js 
// hereda el contexto lexico, solo hay algunas cosas que pueden cambiar, como las clases con sus construtures, funciones como bind, call o aply o las funciones dependiendo del contexto de donde se llamen
// Por eso hay que tener cuidado de como se usa el this dentro de una funcion flecha

let nom = true
if (nom) {
    let nombre = "Santiago";
    let personaT = {
        na:"Santiago",
        apellido: "Fajardo",
        edad: 18,
        genero: "Hombre",
        showFullName() {
            console.log(this.na);
        }
    };

    personaT.showFullName(); // Esto imprimirá "Santiago"
}


function santiago(){
    let nombre = "Santiago"
    console.log(this.nombre)
}

// santiago()



  const objeto = {
    mensaje: "Hola",
    metodo: () => {
      console.log(this.mensaje, "hola"); // Esta función de flecha tiene acceso al ámbito de objeto
    }
  };
  
  objeto.metodo();

  if(nom){
    let nombre = "santiago"
    if(nom){
        let apellido = "fajardo"
        if(nom){
            let edad = 18
            if(nom){
                let genero = "hombre"
                if(nom){
                    console.log(this.nombre, this.apellido, this.edad, this.genero)
    
                }
    
            }
    
        }
    
    }
}

function ejemploDos(){
    let nombre = "juan"

    let nom = () => {
        console.log(this.nombre, "linea dos")
    }

    return nom()
}

ejemploDos()


"use strict";

var obj = {
  a: 10,
};

Object.defineProperty(obj, "b", {
  get: () => {
    console.log(this.a, typeof this.a, this); // indefinida 'undefined' Window {...} (o el objeto global)
    return this.a + 10; // representa el objeto global 'Window', por lo tanto 'this.a' devuelve 'undefined'
  },
});


// En js tenemos este metodo que es interesante la manipulacion de objetos Object.defineProperty ese metodo lo que te permite es tener mas control sobre las propiedas
// permitiendo que se hagan acciones a la hora de que se llame una propiedad, puedes agregar o modificar y restringir cierto tipo de cosas de una propiedad

// EJEMPLOS

// Definir una nueva propiedad: Puedes agregar una nueva propiedad a un objeto utilizando Object.defineProperty. Por ejemplo:

const obj = {};

Object.defineProperty(obj, 'propiedad', {
  value: 42,
  writable: true,
  enumerable: true,
  configurable: true
});


// Modificar una propiedad existente: Puedes modificar las características de una propiedad existente, como su valor o su capacidad de ser modificada. Por ejemplo:

const obj = {
  propiedad: 42
};

Object.defineProperty(obj, 'propiedad', {
  value: 50,
  writable: false // Hace que la propiedad no sea modificable
});

console.log(obj.propiedad); // Imprimirá 50

obj.propiedad = 60; // Esto no producirá un error en modo estricto, pero no modificará el valor de la propiedad

console.log(obj.propiedad); // Todavía imprimirá 50, ya que no se pudo modificar