// El principal proposito de la progrmacion orientada a objetos es modularizar el codigo
// y que el codigo sea reutilizable

// Modularizar entiendase como la forma de separar un codigo en pequeñas partes para que sea mas entendible
// ahora como se modulariza cada una de estas partes tiene un proposito y como tienen un proposito se puede reutilizar y asi no tenemos que escribir
// el mismo codigo varias veces

// Minimo hay dos requiriemientos para que algo sea orientado a objetos o no
// El primero es la capacidad de modelar problemas atraves de objetos
// hay ciertos requisitos que teiene que tener para cumplir este requerimineto

// El primero es la asociacion, esto quiere decir la capicidad de que un objeto puede referirse a otro objeto
// es decir poder unir dos objetos o poder enlazarlos de una forma en codigo

// La agregacion se trata de referir uno o mas objetos independientes, es decir que tener objetos en un objeto padre
// pero que cuando yo quiera extraer uno de esos objetos de ese objeto grande ese objeto sea funcional en mi codigo
// lo que significaria es un objeto independiente

// Composicion, esta habla de la capacidad de referir uno o mas objetos pero dependientes, eso quiere decir tener un objeto grande y otros
// adentro el pero cuando yo saque uno de esos objetos que estan adentro de el, este objeto no sea funcional

// El segundo es el soporte de estos dos principios es que ganarantice la modularidad y reutilizacion de codigo

// este principio tambien tiene sus reuqerimientos y aqui es donde entra lo siguiente:

// Encapsulamiento: es la capacidad de concenr¿trar datos o codigo en sola entidad ocultando sus detalles internos

// Herencia: es el mecanismo de en el cual un objeto puede adquiri todas las carecteristicas de uno o mas objetos

// Polimorfismo: Es la capacidad de procesar objetos con distintos tipos de datos o distintos tipos de estructuras
// pero que al final puedan devolvernos una respuesta

// 1. Asociacion

class Person {
  constructor(name, lastname) {
    this.name = name;
    this.lastname = lastname;
  }
}

const john = new Person("john", "ray");
const maria = new Person("maria", "perez");

// Esto de aqui es una relacion
maria.parent = john;
// Que paso con esto, que aunque yo borre la linea de arriba, no quiere decir que el codigo vaya a dejar de funcionar, solo es una relacion
// independiente al funcionamiento de los objetos

console.log(maria); // Como recordamos de lo que hemos visto anteriormente lo que se escribio en la linea de arriba, solo afetcta al objeto maria
// por ende el objeto maria contendra en su interior una propiedad parent la cual hace referncia al objeto john
// Para que digo esto para ir recapitulando lo que se ha visto
// LOG

// Person {
//   name: 'maria',
//   lastname: 'perez',
//   parent: Person { name: 'john', lastname: 'ray' }
// }

console.log(john);
// LOG
// Person { name: 'john', lastname: 'ray' }

// Consluciones de la asociasion
// Como pudimos ver la asociacion no es mas que la relacion entre dos objetos, asi como se vio que se relaciono a maria con john

// 2. AGREGACION

// Como se habia explicado anteriormente la agrgacion es la capidad de un objeto para contener uno o mas objetos independientes{
// ese objeto que actua como un contendor grande de los otros objetos lo llamamos aggregate

// EJEMPLO

const company = {
  name: "fazt tech",
  employes: [],
};

// Ahora lo que haremos es hacer que los objetos perosnas que creamos arriba sean parte del objeto company
// Lo haremos de la siguiente forma

company.employes.push(john);
company.employes.push(maria);

// LO que se esta haciendo aca es añadir objetos a un array con el metodo push de los arrays

console.log(company);
// LOG
// {
//   name: 'fazt tech',
//   employes: [
//     Person { name: 'john', lastname: 'ray' },
//     Person { name: 'maria', lastname: 'perez', parent: [Person] }
//   ]
// }
// Listo esto seria un ejemplo de agrgacion, como podemos ver tenemos un objeto company al cual le agregamos dos objetos persona los cuales funcionan de forma correcta independientemente

// 3. Composicion
// Como habalmos antes es la capacidad de que un objeto pueda tener uno o mas objtos pero dependientes
// EJEMPLO

const persona = {
  name: "Santiago",
  apellido: "Fajardo",
  address: {
    street: "123 baker street",
    city: "london",
  },
};

// Ahora veamos el ejemplo de composicion, como podemos ver dentro del objeto persona tenemos el objeto address el cual
// si lo sacamos pues el objeto nob tendria ningun sentido debido a que esta fuertemente realciona con el objeto persona

// Encapsulacion

const empresa = {
  name: "fazt tech",
  employes: [],
  sortEmployees: function () {},
};

// Cual es la razon del encapsulamiento, voy a dar un ejemplo
// Digamos que subes tu codigo, cualquier persona con algo de expereciencia en progrmacion va poder manipular tu codigo
// EJEMPLO

// company.sortEmployees = "dasdasdass"
// console.log(company.sortEmployees())

// Eso de arriba lo que ocasionaria es un error debido a que remplazamos la variable sortEmployees por un string
// Entonces ya no estamos llamando un metodo si no un str, esto pasa porque javascript es dinamico , lo que ocaciona que se puedan hacer ese tipo de cosas
// entonces acaban de manipular nuestra logica y con consecuicia dañando la app

function Company(name) {
  let employees = [];
  this.name = name;

  this.getEmployees = function () {
    return employees;
  };

  this.addEmployes = function (employee) {
    employees.push(employee);
  };
}

const company1 = new Company("Tesla");
const company2 = new Company("Turbo");

company1.addEmployes("Juan");
company2.addEmployes("Santiago");

console.log(company1.getEmployees());
console.log(company2.getEmployees());

// Aqui generamos un encampsulamiento, en el sentido que de que tenemos una variable employees la cual no se puede modificar desde afuera y
// solo hay acceso a ella atraves de metodos

class CompanyClass {
  #name;
  #employees;
  constructor(name) {
    this.#name = name;
    this.#employees = [];
  }

  getname() {
    return this.#name;
  }

  getemployees() {
    return this.#employees;
  }

  addEmployee(employee) {
    this._employees.push(employee);
  }
}

const company3 = new CompanyClass("Tesla");
const company4 = new CompanyClass("Turbo");

// company3.#employees = "juan";
// console.log(company3.#employees);

// Esta seria la forma de encapsulamiento con la palabra class, ya que lo que usamos #name se llaman varibales privadas
// Las cuales impiden la manipulacion de las propiedades fuera de la clase, pero que pasa que es algo relativamente nuevo en js
// lo que puede ocacionar que no haya compatibilidad con algunos navegadores

// HERENCIA

// class Person {
//   constructor(){
//     this.name = ""
//     this.lastname = ""
//   }
// }

// class Programmer {
//   constructor(){
//     this.lenguage = ""
//   }

// }

// function Personas(name, lastname) {
//   this.name = name;
//   this.lastname = lastname;
//   this.caminar = function () {
//     return "Estoy caminando";
//   };
// }

// function Programmer(lenguage) {
//   this.lenguage = lenguage;
// }

// Programmer.prototype = new Personas();
// Programmer.prototype.level = "senior";

// const programmer = new Programmer("Javascript");
// console.log(programmer.level);
// console.log(programmer.lenguage);

// ahora veamos el ejemplo con la palabra class
// Explicaion, que estamos haciendo en el contructor de js ?
// Lo primero que se hace es declarar dos objetos, un objeto persona y uno llamado programador
// como nos podemos dar cuenta el objeto programador es una persona tambien, entonces como podemos intuir el objeto
// programador puede heredar las propiedades y metodos de persona
// Como se realizo eso? Listo hay varias cuestiones en este parte, tenemos vaias cosas que podemos hacer pero para saber
// que hacer voy a explciar que es un portotype
// Portotype es una porpiedad de las funciones constructoras las cual tiene adentro un objetoo y a este objeto es al que le agregamos
// los metodos o propiedades que queremos en un futuro añadirle a los objetos instanciados por la funcion constructora
// Ahora que haremos? lo que podemos hacer son varias cosas
// Primera

function Personas(name, lastname) {
  this.name = name;
  this.lastname = lastname;
  this.caminar = function () {
    return "Estoy caminando";
  };
}

function Programmer(lenguage) {
  this.lenguage = lenguage;
}

Programmer.prototype = new Personas();
Programmer.prototype.level = "senior";

const programmer = new Programmer("Javascript");
console.log(programmer.level);
console.log(programmer.lenguage);

// Aca lo que hacemos es que instaciamos un objeto del tipo Personas y lo agregamos como parte del prototipo de
// programmer
console.log(Programmer.prototype, "linea 258");
// -----LOG----
// Personas {
//   name: undefined,
//   lastname: undefined,
//   caminar: [Function (anonymous)],
//   level: 'senior'
// } linea 258

// Listo como podemos ver en el log, el protipo de persona es el objeto personas ahora, si nosotros usamos una propiedad
// o metodo el lo primero que hara sera buscarlo en el objeto en si, si no la encuentra la buscara en el prototipo
// de esta forma heredemos de persona, pero que pasa, que el constructor del prototipo ahora apuntara al contructor de persona
// Todavia no he visto las desventajas por ahi que confusion en el codigo pero si quires arreglarlo seria
// Programmer.prototype.constructor = Programmer; con esta linea

// Otra forma de heredar

function PersonasHereda(name, lastname) {
  this.name = name;
  this.lastname = lastname;
  this.caminar = function () {
    return "Estoy caminando";
  };
}

function ProgrammerHeredar(name, lastname, lenguage) {
  Personas.call(this, name, lastname);
  this.lenguage = lenguage;
}

ProgrammerHeredar.prototype = Object.create(PersonasHereda.prototype);
ProgrammerHeredar.prototype.level = "senior";
PersonasHereda.prototype.edad = "23";
console.log(ProgrammerHeredar.prototype, "linea 290");

const programmerHeredar = new ProgrammerHeredar(
  "Santiago",
  "Fajardo",
  "Javascript"
);
console.log(programmerHeredar.level);
console.log(programmerHeredar.lenguage);
console.log(programmerHeredar.edad);
const personaHereda = new PersonasHereda();
console.log(personaHereda.level, "linea 256");

// Esta forma es buena porque si ves ya no estamos instanciando un objeto del tipo persona en el prototipo de ProgrammerHereda
// Lo que estamos haciendo es añadiendole el prototipo de PersonasHereda y la funcion call, nos permite que podamos usar
// las propiedades y metodos de PersonasHereda y pasarlas por parametro a la hora de instanciar un objeto de tipo ProgrammerHeredar
//

class PersonClass {
  constructor(name, lastname) {
    this.name = name;
    this.lastname = lastname;
  }
}

class ProgrammerClass extends PersonClass {
  constructor(lenguage, name, lastname) {
    super(name, lastname);
    this.lenguage = lenguage;
  }
}

PersonClass.prototype.edad = "27";
const user = new PersonClass("Juan", "Gutierrez");

console.log(user);

const programmerClass = new ProgrammerClass("Javascript", "Juan", "Fajardo");

console.log(programmerClass.edad);

// Ahora explique con la palabra class, es mas facily mucho mas legible, ya que con esta para heredar,
// solo debemos usar la palabra extendes la cual nos sirve para decirle como esta clase extiende de personClass
// y ya con eso puedes acceder a las propiedades y metodos de PersonClass, el super es igual que el call, nos permite indicarle
// las propiedades que vamos a usar de PersonClass

// POLIMORFISMOS
// Sobre carga, la sobre carga es la capacidad de definir multiples metodos con el mismo nombre en una clase , pero con diferentes tipos o numeros de parametros
// esto significa que puedes tener multiples metodos con el mismo nombre que hacen diferentes cosas

// EJEMPLO

// En javascript no es algo que se pueda permitir de forma nativa debido a las caracteristicas del lenguaje pero se puede hacer unos ejemplos

function conteo(x) {
  return x.toString().length;
}

console.log(conteo("Santiago"));

// Listo esto seria un ejemplo de sobrecarga, independientemente del tipo de dato que le pasemos el devolvera el tamaño

// EJEMPLO DOS

function suma(x = 0, y = 0, z = 0) {
  return x + y + z;
}

console.log(suma(23, 45));

// Esto seria tambien un ejemplo de sobrecarga debido a que no importa cuantos parametros le pasemos el ejecutara la funcion

// Polimorfismo paramétrico: Se refiere a la capacidad de una función o clase para trabajar con argumentos de varios tipos de datos sin
// tener que especificar el tipo exacto. Esto se logra mediante el uso de parámetros genéricos o plantillas.

// Lo que pasa es que js es dinamico entonces no es un problema para el lenguaje o no es tomado este tipo de polimorfismo

// Exactamente, eso es correcto. El polimorfismo de
// subtipos nos permite tratar un objeto de una subclase como
// si fuera un objeto de su superclase. Esto significa que podemos utilizar
// un objeto de una subclase en cualquier lugar donde se espera un objeto de su
// superclase, y el comportamiento que se ejecuta será el correspondiente al tipo
// real del objeto en tiempo de ejecución.

// Cuando llamamos a un método en un objeto de una clase base (superclase)
// que ha sido sobrescrito en una subclase, el método de la subclase se ejecuta
// en lugar del método de la superclase. Esto permite que el comportamiento específico
// de la subclase se manifieste cuando se utiliza un objeto de esa subclase, incluso si
// se pasa como un objeto de la superclase.

// El polimorfismo de subtipos es una característica clave de la programación orientada
// a objetos que nos permite escribir código más genérico, reutilizable y fácil de mantener,
// ya que podemos escribir código que trabaje con objetos de una clase base y que automáticamente
// se adapte al comportamiento específico de las subclases cuando se utilizan. Esto facilita
// la extensión y la modificación del código a medida que se desarrolla y se evoluciona el sistema.
