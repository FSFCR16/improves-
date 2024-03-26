// Para crear un objeto literal en js con los creamos con las llaves de esta forma

let object = {};

console.log(object);

// Sirve para asignar distintos datos a una misma entidad
// EJEMPLO

let personaObject = {
  nombre: "Juan",
  apellido: "Ramirez",
  edad: 18,
  genero: ["Hombre", "Mujer"],
};

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
      return `${nombre} ${apellido}`;
    },
  };

  return personaV;
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
  showFullName: function () {
    return `${this.nombre} ${this.apellido}`;
  },
};

console.log(personaV.showFullName());

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
  showFullName: function () {
    return `${this.nombre} ${this.apellido}`;
  },
};

console.log(personaTres.showFullName());
globalThis.nam = "santiago";

// ¿ Que es el this ?
// En JavaScript, la palabra clave this se refiere al contexto en el que se
// ejecuta actualmente una función. La forma en que this funciona depende de cómo
// se llama la función

// En el contexto global fuera de cualquier funcion this hace referencia a objeto global ya sea en modo estricto o no

// Es por eso que

// EJEMPLO

// console.log(this.document === document); // true, debido a que esta en el contexto global entonces document aunque no este declaro hace
// parte del objeto window si esto se ejecutara desde node seria false ya que en node, el objeto global no es window, si no global
// global no tiene la variable u objeto document solo tiene window

// En los navegadores web, el objeto window también es un objeto global:
// console.log(this === window); // true porque this hace referencia al contexto y nuestro contexto es window

// this.a = 37;
// console.log(window.a); // 37

// En el contexto de una funcion, this depende de como sea llamada la funcion
// EJEMPLO

function f1() {
  return this;
}

console.log(f1() === globalThis); // objeto global, esto es truw porque esa funcion devuelve this, this hace refencia contexto
// y como comente arriba el contexto de un this dentro de una funcion depende de como sea llamda esta funcion fue llamda "en el objeto window"
// por ende el this hace referencia a ese objeto

// Pero

let objetoPrueba = {
  pruebaUno: "si",
  pruebaDos: "No",
  funcionPrube: f1,
};

console.log(f1() === globalThis, "linea 115"); // True porque esta siendo declara desde el objeto global y this hace referencia a ese objeto
console.log(objetoPrueba.funcionPrube() === globalThis, "linea 117"); // False ahora esta siendo declara desde el objeto "objetoPrueba" y en window
console.log(objetoPrueba.funcionPrube() === objetoPrueba, "linea 117"); // True porque esta siendo declarada desde el  objeto  "objetoPrueba"

// Uso estricto, es js hay algo que se llama el uso estricto lo que hace que ciertas reglas se apliquen ekl codigo una de esas reglas
// Es que una funcion si no esta asociada a un objeto el valor de this en esa funcion sera undefined

// EJEMPLO

function f2() {
  "use strict"; // consultar modo estricto
  return this;
}

console.log(f2() === undefined); // Esto sera true debido a que estamos usando el modo estricto el cual, si una funcion
// no asociada a un objeto su valor sera undefined

// Uo del this en un constructor

// Cuando una funcion es usada como constructor ( con la palabra clasve new ) su this estara enlazado
// al nuevo objeto en construccion, a menos que la ejecución de los resultados del constructor en el motor JavaScript encuentren una instrucción de
// retorno donde el valor de retorno sea un objeto.

function C() {
  this.a = 37;
}

var o = new C();
console.log(o.a); // logs 37, ese log se debe a lo menciado en la parte de arriba cuando se crea con la palabra reservada new
// el this hara referencia a la objeto en contruccion en esta caso c

function C2() {
  this.a = 37;
  return { a: 38 };
}

o = new C2();
console.log(o.a); // logs 38, en cambio este como se mencionaba tambien arriba, si se devulve un objeto o se retorna un objeto
// el this hara referencia ese objeto retornado y no al de al que esta en construccion

// this como como contraladoe de eventos del DOM
// Sí, cuando una función se utiliza como un controlador de eventos en el DOM
// (Document Object Model), el valor de this dentro de la función generalmente
// se refiere al elemento del DOM al que se está aplicando el evento.
// Esto significa que el objeto al que se está aplicando el evento es el contexto de
// this dentro de la función del controlador de eventos.

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

let nom = true;
if (nom) {
  let nombre = "Santiago";
  let personaT = {
    na: "Santiago",
    apellido: "Fajardo",
    edad: 18,
    genero: "Hombre",
    showFullName() {
      console.log(this.na);
    },
  };

  personaT.showFullName(); // Esto imprimirá "Santiago"
}

// -------------------------------- PARANTESIS PARA ENTENDER EL THIS -------------------------------------------------
function santiago() {
  let nombre = "Santiago";
  console.log(this.nombre);
}

// santiago()

const objeto = {
  mensaje: "Hola",
  metodo: () => {
    console.log(this.mensaje, "hola"); // Esta función de flecha tiene acceso al ámbito de objeto
  },
};

objeto.metodo();

if (nom) {
  let nombre = "santiago";
  if (nom) {
    let apellido = "fajardo";
    if (nom) {
      let edad = 18;
      if (nom) {
        let genero = "hombre";
        if (nom) {
          console.log(this.nombre, this.apellido, this.edad, this.genero);
        }
      }
    }
  }
}

function ejemploDos() {
  let nombre = "juan";

  let nom = () => {
    console.log(this.nombre, "linea dos");
  };

  return nom();
}

ejemploDos();

("use strict");

let obj = {
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

obj = {};

Object.defineProperty(obj, "propiedad", {
  value: 42,
  writable: true,
  enumerable: true,
  configurable: true,
});

// Modificar una propiedad existente: Puedes modificar las características de una propiedad existente, como su valor o su capacidad de ser modificada. Por ejemplo:

obj = {
  propiedad: 42,
};

Object.defineProperty(obj, "propiedad", {
  value: 50,
  writable: false, // Hace que la propiedad no sea modificable
});

console.log(obj.propiedad); // Imprimirá 50

obj.propiedad = 60; // Esto no producirá un error en modo estricto, pero no modificará el valor de la propiedad

console.log(obj.propiedad); // Todavía imprimirá 50, ya que no se pudo modificar

// --------------------------------------- FIN DEL PARENTESIS -------------------------------------------------------

const user = {
  name: "Ryan",
  lastname: "Ray",
  age: 30,
  showFullName: function () {
    return this.name + " " + this.lastname;
  },
  // OTRA FORMA DE DEFINIR UN METODO
  // showfullname() {
  // return this.name + this.lastname;
  //}
};

console.log(user.showFullName());

const account = {
  number: "122122312",
  amount: 100,
  deposit(amount) {
    this.amount = this.amount + amount;
  },
  withdaw(amount) {
    this.amount = this.amount - amount;
  },
};

account.deposit(200);
account.deposit(400);
account.deposit(1000);
account.deposit(200);
account.deposit(100);
console.log(account);

account.withdaw(500);
account.withdaw(100);
console.log(account);

// -------------------------------------------------------------------------------
const userUno = {
  name: "Ryan",
  lastname: "Ray",
  age: 30,
  showFullName: function () {
    return this.name + " " + this.lastname;
  },
  // OTRA FORMA DE DEFINIR UN METODO
  // showfullname() {
  // return this.name + this.lastname;
  //}
};
const userDos = {
  name: "Juan",
  lastname: "Gutierrez",
  age: 17,
  showFullName: function () {
    return this.name + " " + this.lastname;
  },
  // OTRA FORMA DE DEFINIR UN METODO
  // showfullname() {
  // return this.name + this.lastname;
  //}
};
const userTres = {
  name: "Santiago",
  lastname: "Fajardo",
  age: 20,
  showFullName: function () {
    return this.name + " " + this.lastname;
  },
  // OTRA FORMA DE DEFINIR UN METODO
  // showfullname() {
  // return this.name + this.lastname;
  //}
};

// ¿ Que es un constructor ?

// El constructor es como un generador de objetos para que la construccion de objetos no sea a mano si no qie tengamos algo que se encargue de su creacion
// a diferencia del eval el constructor crea funciones que solo se ejecutan en el ambito global

// EJEMPLO

const sum = new Function("a", "b", "return a + b");

console.log(sum(2, 6));
// Expected output: 8

// De que se encarga el constructor

// Un constructor en un lenguaje de programación orientado a objetos es responsable de inicializar los objetos
// de una clase específica. Cuando se crea una instancia de una clase utilizando un constructor, este se encarga de:

// Crear un nuevo objeto: El constructor crea un nuevo objeto que será una instancia de la clase.

// Inicializar propiedades: El constructor puede asignar valores a las propiedades del objeto recién creado. Estos valores pueden ser proporcionados como argumentos al constructor o pueden ser valores predeterminados definidos dentro del propio constructor.

// Realizar operaciones de inicialización adicionales: Además de asignar valores a las propiedades, el constructor puede realizar otras operaciones de inicialización necesarias para configurar el objeto de manera adecuada. Esto podría incluir la asignación de otros objetos,
// la configuración de variables de estado, la conexión a servicios externos, etc.

// Retornar el objeto inicializado: Finalmente, el constructor devuelve el objeto inicializado que será
// utilizado como instancia de la clase.

// En resumen, un constructor es responsable de crear e inicializar objetos de una clase específica, asegurándose de que estén listos para su uso posterior. Es una parte fundamental de la programación orientada a objetos ya que permite la creación de múltiples instancias de una clase con diferentes valores de estado.

// function Person() {
//   this.name = "";
//   this.lastname = "";
//   this.age = 0;
//   this.showFullName = function () {
//     return `${this.name} ${this.lastname}`;
//   };
// }

// Antes de seguir un parentesis esto es lo mismo que usar la palabra reservada class y voy a hacer dos ejemplos uno
// con el constructor y otro con la palabra class

// CLASS

class Persona {
  constructor(nombre, apellido, edad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
  }

  showFullName() {
    return `${this.nombre} ${this.apellido}`;
  }
}

// Crear una instancia de Persona

const personaUno = new Persona("Juan", "Pérez", 30);
console.log(personaUno);
// Usar el método saludar
console.log(personaUno.showFullName());

function PersonaFuntion(nombre, apellido, edad) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.edad = edad;
  this.age = 0;

  this.showFullName = function () {
    return `${this.nombre} ${this.apellido}`;
  };
}

// Crear una instancia de Persona
const personaFuntion = new PersonaFuntion("Juan", "Pérez", 30);
console.log(personaFuntion);
// Usar el método saludar
console.log(personaFuntion.showFullName());

// Aqui podemos apreciar los dos ejemplos y arrojan el mismo resultado

// -------------------------------------------------------------------

const stringObject = new Object("Hello word");
const stringString = new String();

// Tenemos el constructor d un objeto o sea para crear apartir de un constructor. que como ya vimos los constructures nos permiten crear objetos
// al declarar esto const string =  new Object("Hello word") esatmos creando un objeto de tipo string
// sihacemos console log veremos eso

console.log(stringObject, stringString.toUpperCase()); // log [String: 'Hello word']

console.log(stringObject.toUpperCase()); // esto arrojara error

// ¿Que paso aca? aca no solo podemos usar metodos de string si no tambien de objetos y esto se debe a que aunque el objeto sea de tipo string, sigue siendo un objeto creado apartir del
// constructor objeto y es como si literalmente estuvieras creando un objeto entonces ese string que creaste apartir
// del constructor object tendras los metodos de un objeto ya que eso es lo que hace el constructor object crear un objeto
// a diferencia de si lo hicieras con el constructor de un string, ya que este constructor es para eso crear string entonces te permite tener acceso a sus propiedades y metodos

// Ya entendido esto y entendiendo que es lo que hace un constructor tambien podemos deducir que le podemos añadir nuevos metodos al construtor, de la misma forma de como lo hariamos con uno
// que fue creado po nosotros mismo ejemplo

const p = new PersonaFuntion("Santiago", "Fajardo");

p.saludar = function () {
  return `Hola soy ${this.nombre} ${this.apellido}`;
};

console.log(p.saludar()); // Hola soy Santiago Fajardo
// De esta forma le añadimos un metodo a nuestro objeto

// de esta misma forma lohariamos con un constructor ya establecido en js

// Entonces volviendo al ejemplo donde teniamos

//const stringObject = new Object("Hello word");
// Que dijimos que no podiamos usar los metodos de un string porque es si no era un objeto string
// pues no lo tenemos oero podemos añadirselo

console.log(stringObject.constructor);

// Lo mismo aplicaria para un objeto ya propio del lenguaje
// EJEMPLO

const stringOb = new Object("Hola mundo");
stringOb.test = function () {
  return this + " test";
};
console.log(stringOb.test());

const us = {
  name: "",
  apellido: "",
  edad: 23,
};

function listAllProperties(o) {
  var objectToInspect;
  var result = [];

  for (
    objectToInspect = o;
    objectToInspect !== null;
    objectToInspect = Object.getPrototypeOf(objectToInspect)
  ) {
    console.log(Object.getOwnPropertyNames(objectToInspect));
    result = Object.getOwnPropertyNames(objectToInspect);
  }

  console.log(result);
}
listAllProperties(user);

// Object.getPrototypeOf(objectToInspect), esta linea de codigo lo que hace es que devuelve el prototipo de objeto actual,
// En otras palabras menos complicada devulve el objeto del cual hereda sus porpiedades o metodos, si no existe un objeto del cual herede
// el resultado sera null

function User() {
  this.name = "";
  this.lastname = "";
}

const usuario = new User();
console.log(usuario);

const mankind = {
  Person: function () {
    "use strict";
    this.name = "";
    this.lastname = "";
  },
};

const personas = new mankind.Person(); // Person { name: '', lastname: '' }
console.log(personas);

// Explicacion
// Dado lo que he hablado aqui, en este objeto pasa algo curioso y explcia varias cosas
// si nosotros usamos la palabra revervada new y ponemos mankind.Person() lo que estamos haciendo es
// acceder a la propiedad Person de mankind la cual es un contructor y por medio del constructor creamos un objeto
// si ejecutamos eso o le damos console.log el arrojara el objeto persona y el this hara ferencia al constructor creado o sea al objeto creado
// pero que pasa si no usamos la palabra reservada new

const personasDos = mankind.Person();

// pues que simplemente es como si estuvieramos llamando a una funcion llamada Person y aqui pasa lo siguiente,
// el primero es que el comportamiento this dentro de una funcion regular depende de a que objeto estan siendo llamada la funcion
// o sea se establace a la hora de su definicion y debido a que la funcion esta siendo llamda atraves del objeto mankind
// lo que hace es que le esatamos diciendo que this hace referencia mankind entonces es como si le dijeramos mandkind.name = ""
// lo que generara la creacion de esas propiedades, es por eso que si haces un log de personasDos te arroja undefined, porque es una funcion
// y no esta devolviendo nada
// si hacemso un log de mankind devulve lo siguiente

console.log(mankind); // { Person: [Function: Person], name: '', lastname: '' }

//------------------------------------PROTOTYPE---------------------------------------------
// Ahora entendamos la propiedad prototype es una porpiedad que nos permite crear a un objeto metodos u propiedades
// pero que pasa? te preguntaras pero yo puedo hacer lo siguiente

// DECLARO UN CONSTRUCTOR

function PersonPrototype(name, lastname) {
  this.name = name;
  this.lastname = lastname;
  this.displayName = function () {
    return `${this.name} ${this.lastname}`;
  };
}

// CREO UN OBJETO A PARTIR DEL CONSTRUCTOR
const pp = new PersonPrototype("Santiago", "Fajardo");
console.log(pp); // como se puede ver se crea un objeto

// ahora como decia, tu puedes decir pero por que no creo una propiedad u metodo de la siguiente manera
// pp.edad = 30;
// pp.caminar = function () {
//   return "estoy camiando";
// };

// console.log(pp);
//LOG

// PersonPrototype {
//   name: 'Santiago',
//   lastname: 'Fajardo',
//   displayName: [Function (anonymous)],
//   edad: 30,
//   caminar: [Function (anonymous)]
// }

// listo como puedes ver se agrego una propiedad y un metodo al objeto pero que pasa si
// creamos otro objeto
const ppDos = new PersonPrototype("Juan", "Gomez");
console.log(ppDos);
// LOG
// PersonPrototype {
//   name: 'Juan',
//   lastname: 'Gomez',
//   displayName: [Function (anonymous)]
// }

// como este objeto ya no tiene las porpiedades del primer objeto pero el primer objeto sigue manteniendo la propiedad y metodo que le añadimos
// como te puedes dar cuenta esto pasa debido a que esas propiedades y metodos se hicieron o se crearon sobre ese objeto en especifico
// entonces eso soluciona el prototype, el prototype permite que puedas añadir un metodo a un constructor o propiedad y que esas propiedades
// o metodos sean heredados a los objetos creados apartir de ese constructor

// EJEMPLO

PersonPrototype.prototype.caminar = function () {
  return "Estoy caminado";
};

// ahora si hacemos un log de los objetos creados
console.log(pp);
// LOG
// PersonPrototype {
//   name: 'Santiago',
//   lastname: 'Fajardo',
//   displayName: [Function (anonymous)]
// }
console.log(ppDos);
// LOG
// PersonPrototype {
//   name: 'Juan',
//   lastname: 'Gomez',
//   displayName: [Function (anonymous)]
// }

// Como puedes ver ese de todas formas no aparece el metodo esto es debido a que el metodo no se lo estamos añadiendo a ellos
// los objetos ya se crearon con esos metodos y propiedades, se lo estamos añadiendo es a la raiz al prototipo de esos objetos
// entonces si hacemos un log de PersonPrototype, veremos que ahi si se encuentra el metodo

const ppTres = new PersonPrototype("julian", "rambo");
console.log(Object.getOwnPropertyNames(PersonPrototype.prototype)); // Este mostrara las propiedades y metodos del prototipo PersonPrototype
// dejandonos ver como el prototupo tiene el metodo caminar y de esta forma se lo hereda a sus objetos instanciados apartir de el

// LOG
// PersonPrototype {
//   name: 'Juan',
//   lastname: 'Gomez',
//   displayName: [Function (anonymous)]
// }
// [ 'constructor', 'caminar' ]

console.log(Object.getPrototypeOf(ppTres)); // Este nos muestra el prototipo de quien esta heredando

// ahora todos los objetos tienen el metodo caminar
