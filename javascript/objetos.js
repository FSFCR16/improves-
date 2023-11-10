// Tipos de objetos

// Predefinidos: estos son los que proporciona el lenguaje puede ser el objeto, Date para la gestion de flechaRastreo, el objeto Math para realizar operaciones o 
// el objeto RegExp par atrabajar con expresiones regulares

// perzonalizables: Son aquellos que permiten la adcion de funciones, clases, o tambien la adicion de nuevos objetos para implementar nuevas caracteristicas

// arrays: son aquellos que permiten crear conjuntos de elementos a modo de matriz o ByteLengthQueuingStrategy

// JSON: Son aquellos que permiten crear conjuntos de elementos jerarquezables y que en ocasiones pueden proveer de metodos para trabajar de en diferentes ambitos o contextos

// Especiales: Son aquellos que fueron diseñados para tener una funcionalidad especifica entre ellos this o prototype


// -------METODOS-------

// Exiten infinidad de metodos y varian dependiendo de quien los hereden sin emebargo existen unos que son comunes a todo objeto. EJ

// Metodo assing

// copia el onjeto refenciado en el segundo parametro en el objeto referenciado en el primer parametro y lo devuelve


let b= [3,"a"]

console.log(Object.assign(b, {"b":2, "c":3})) // Entre comillas como una concatenacion de objetos

// Metodo create

// este metodo es otra forma de llamar al constructor de la Clase, lo que hace es crear como un tipo de herencia creando objetos con el prototipo de un objeto padre

const animal={ 
    hacerSonido:function(){
        console.log("haciendo sonido")
    }
}

let perro=Object.create(animal)

perro.hacerSonido()

// Metodo entries

// Devuelve un array multidimensional que contiene pares clave valor en cada array subyacente, esto es util para iterar objetos que a simple vista se ven dificiles de iterar

let json={"a":2, "b":3 , "c": 4, "juan": "humano"}

console.log(Object.entries(json))

//Metodo GetOwnPropertyDescriptors

// devulve un objeto con la descripcion de todas las propiedades que posee 
// las propiedades que muestra son: el visualViewport, si es enumerable, si es escribible y si es configurable

let jsonDos={
    "nombre": "pablo", 
    "apellido": "gutierrez",
    "edad": 20
}

console.log(Object.getOwnPropertyDescriptors(jsonDos))

//Metodo GetOwnPropertyDescriptor

// Lo mismo que getOwnDescriptors solo que este lo hace de manera individual para eso tienes que pasarle como segundo parametro el elemento
console.log("GetOwnPropertyDescriptor")

console.log(Object.getOwnPropertyDescriptor(jsonDos, "apellido"))

// Metodo getOwnPropertyNames

// devuleve un array con los nombres de las claves no enumerables y enumerables
console.log("GetOwnPropertyNames")

console.log(Object.getOwnPropertyNames(jsonDos))

//Metodo hasOwnProperty

console.log("hasOwnProperty")

// devulve un booleano indicando si la propiedad proporcionada por parametro esta en el objeto
console.log(jsonDos.hasOwnProperty("nombre"))
console.log(jsonDos.hasOwnProperty("estudio"))

//Metodo Keys 

// devuleve un array con el nombre de las claves enumerables del objeto

console.log(Object.keys(json), "linea 89")

//Metodo values

// devuleve un array con el nombre de las values enumerables del objeto

console.log(Object.values(json))

console.log()
console.log()
console.log()
console.log()

console.log("Arrays")

// Arrays

// el objeto Array tiene esencialmente tres propiedades

// constructor: devulve la funcion constructura nativa
// length:devuleve el tamño del Array
// prototype:permite añadir mas propiedades y metodos al objeto

//Metodos

//Filter--- Devuelve un array con la funcion indicada por parametro, o sea en otras palabras devulve un array con el filtro que le pongas a la funcion

let arr=["manzana", "kiwi", "palatano", "pera"]
console.log(arr.filter((x)=>{
    return x.length>4
}))


// join--- Devuleve un string uniendolo con un separador que le pasemos por parametro

console.log(arr.join(" - "))
