// Tipos de objetos
var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function() {
  console.log('Estado actual:', xhr.readyState);
};

xhr.open('GET', 'http://127.0.0.1:5502/javascript/html_objetos.html', true);
xhr.send();

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

let arr=["manzana", "kiwi", "palatano", "pera", "kiwi"]
console.log(arr.filter((x)=>{
    return x.length>4
}))


// join--- Devuleve un string uniendolo con un separador que le pasemos por parametro

console.log(arr.join(" - "))

// indexOf devuelve la primera posicon en la que aparezca el valor prorporcionado por parametro, si el resultado de la busqueda fue erroneo devolvera -1
// tiene un segundo parametro opcional el cual indica desde que elemento se debe empezar a buscar

console.log(arr.indexOf("kiwi"))
console.log(arr.indexOf("kiwi", 2)) // como el string kiwi esta en la posicoin 1 y le estamos diciendo que empiece a buscar desde la posicion 2 el resultado sera erroneo asi que devolvera -1

// lastIndexOf-- este hace lo contrasrio que indexOf busca desde lo ultimo hasta el principio por ende este devulve el ultimo elemento que tenga lo indicado por parametro

console.log(arr.lastIndexOf("kiwi")) // en este caso devolvera 4 ya que el ultimo elemento con la palabra kiwi se encuentra en la posicon numero 4

// Metodo map-- este devulve los un resultado tras haber sido tratados los elementos con la funcion enviada por parametro, este metodo tambien es tomado como un foreach o sea para recorrer arrays

let newArray=[2,3,4,5,6,2]

console.log(newArray.map(function(x){
    return x*x
}))

console.log(newArray.map(function(x){
    return x==2? x : ""
}))

// metodo pop-- Este metodo sirve para eliminar el ultimo elemento del array

console.log(arr.pop())
console.log(arr)


// metodo push-- el metodo push sirve para añadir un elemento al final de la lista

arr.push("kiwi", "guayaba")
console.log(arr)


// metodo reverse-- sirve para darle un orden inverso a la lista

arr.reverse()
newArray.reverse()
console.log(arr)
console.log(newArray)

// metodo reduce-- sirve para reducir un array a un solo valor, recibe dos parametros un acumuladro y elemento, auanque puede recibir 4 los otros dos son el indice
// desde el cual se desea empezar y el array, lo que sucede es que lo que pongamos en el acumulador se va ir valga la redundacia, el elemento se va ir acumulando en el acumulador

const numbers = [12, 5, 8, 24, 3];

const maxNumber = numbers.reduce(function(acumulador, elemento) {
  return Math.max(acumulador, elemento);
}, -Infinity);

console.log(maxNumber); // Resultado: 24

//En este ejemplo estamos usando el reduce para hallar el numero mayor en ese array, el proceso seria que se comienza desde -infinity para asegurar que todo numero en el array sea menor 
//que el valor inicial, despues lo que se hace es ejecutar el math max, entonces;
// acumulador: -infinity , elemento : 12
// acumulador: 12, elemento: 5
// acumulador: 12 , elemento 5 // aqui no cambia ya que le estamos diciendo que verifique entre los dos cual es mayor y el mayor se pasa al acumulador
// acumulador: 12 , elemento: 8
// acumulador: 12, elemento :24
// acumulador: 24 , elemento; 3
// acumulador: 24



// metodo shift-- elimina el primer elemento del Array

console.log(arr.shift())
console.log(arr)

// metodo sort-- este metodo sirve para ordenar el array pero este metodo transforma el array en un string y lo ordena por valor unicode
// es decir:

let ordenarArr=[2,3,400,200,1,2,3,5]
console.log(ordenarArr.sort())

// si deseas ordenar los numeros sin que pase esto, toca mandar una funcion que nos permite hacer esto 

console.log(ordenarArr.sort((a,b)=>{return a-b}))// que sucede aqui se compara a con b, al compararlos realizamos una resta, si el resultado es positivo 
// quiere decir que a es mayor que b ya que siempre se pone el signo del mayor si se suma, si el resultado es negativo b sera mayor y por ultimo
//si es 0 los dos se tomara como iguales


// metodo slice-- este metodo al igual que los strings devuelve un algo comprendido desde el indice dado en el primer elemento y con la longitud dada por el segundo parametro

let aArr=[2,3,4,223,5,4,7]
console.log(aArr.slice(0,3))

// metodo splice-- este metodo al igual que los strings devuelve un algo comprendido desde el indice dado en el primer elemento y con la longitud dada por el segundo parametro
//la diferencia entre el slice es que el slice elimina los elementos que sobran, otra diferencia es que tiene un 3 parametro que le podemos que seria un elemento a agragar en la posicion dada en el primer parametro
aArr=[2,3,4,223,5,4,7]
console.log(aArr.splice(0,4))
aArr.splice(2,0,"santiago")
console.log(aArr)

// metodo unshift-- este metodo sirve para añadir un elementos al principio de la lista, varios

arr.unshift("hola", 3)
console.log(arr)

//Como ya vimos se puede crear un array de dos formas #1 usando en el objeto array, #2 encerrando elementos entre corchetes y separandolos por ","
// ahora para acceder a esos elementos lo que haremos es usar el nombre del array y poniendo la posicion en la que encuentra en el elemento
// teniendo en cuenta que de izquierda a derecha los elementos empiezan desde el 0 hasta n y que si queremos ir de derecha a izquierda ya que el primero es el 0
// de derecha a izquierda comenzamos desde el -1

let ar=[2,3,4,23,43,56,7,98]
console.log(ar[4]) // si contamos desde el 0 de izquieda a derecha nos damos cuenta que el elemnto en la posicion 4 es el 43 entonces por eso devuelve el 43

// Los datos strings tambien son considerados arrays internamente asi tambien podemos tratarlos como uno, accediendo a un indice de la misma forma que lo hariamos con array 

//------------------------------------


// inserccion de elementos, para insertar un nuevo elemento podemos hacerlo atraves del metodo push o por medio del indice

ar.push("5434") /* o  */ 
console.log(ar)
ar[9]="2121"
console.log(ar)

//de esta misma forma podemos modificar un elemento

ar[0]="3232"
console.log(ar)

//eleminar elementos de un array hay tres formas pero si quieres un elemento en concreto hay dos
// delete y el metodo splice
delete(ar[1])//en realidad no lo borra solo deja el espacio vacio pero conserva el espacio en memoria
console.log(ar)

// splice
 let arra=[2,34,54,23,43,1]
 arra.splice(2,1)
 console.log(arra)


 console.log()
 console.log()
 console.log()
 console.log()
 console.log()
 console.log()
 console.log()
console.log("JSON")


 //JSON Javascript Object Notation

 //Tipos de datos que acepta un json


//  #1 valores numericos, con el punto como seprador decimal
//  #2 cadenas de texto entrecomilladas
//  #3 boleanos
//  #4 valores nulos
//  #5 arrays que sulen contener otros json

// creacion de json, la forma mas frecuente de crear un json es atraves de dos llaves

//declaracion de un json con datos de una persona

const perosna= {
    name:"Santiago",
    lastName: "Fajardo",
    estatura: 1.74,
    age: 19,
    trabaja: false
}

//Tambien podemos crear uno atraves de su construtor

let personaDos= JSON.constructor();

personaDos.name = "Santiago"
personaDos.lastName= "Gutierrez"
personaDos.age= 21
personaDos.estatura= 1.87,
personaDos.trabaja= true

console.log(personaDos)
console.log(perosna)

//Accerder a sus prpiedades podemos hacerlo atraves del formato array o formato objeto

console.log(personaDos.age)
console.log(perosna["lastName"])
console.log(perosna.trabaja)

//insercion de elemntos a json

// para alamacenar una propiedad tambien podemos hacerlo en formato objeto o Array

perosna.talla="s"
perosna["lastName"]="David"
console.log(perosna)

//Eliminacion de elementos de json 

// para eso podemos usar la funcion delete

delete(perosna.talla)
console.log(perosna)

// Los datos json sirven bastante la recepcion y envio de datos, es por esto que se utilizan para mandar informacion al servidor o consumir informacion de APIS
//pero para esto lo mejor es que sea manejada en string para facilitar su manipulacion ya sea enviando o recibiendo la informacion
//para esto recurrimos a dos metodos el Stringify o perse 

//Stringify 

// este metodo convierte un objeto analizable en una cadena de texto de tipo JSON

let objeto= {
    texto:"valor",
    digito: 2

}

console.log(JSON.stringify(objeto))

//El metodo parse, sirve para transformar una cadena de texto de tipo json en un objeto analizable por javascript

let cadena='{"texto": "valor", "digito": 1}';
let objetoParse=JSON.parse(cadena)
console.log(objetoParse)
console.log(objetoParse.texto)

//OBJETOS ESPECIALES
// En javascript se le llaman objetos especiales a los objetos que tienen una funcionalidad concreta o son vinculo u enlace de otro

//Objeto WINDOW
// el objeto window hace referencia a la ventanada del navegador, este objeto contiene un objeto document el cual se refiere al contenido de la pagina web
// este objeto es unico para cada pestaña del navegador lo que quiere decir que los cambios que le hagas a una pestaña no se vera reflejado en otras

//Metodos
// Muchos de los metodos que utilizamos normalmente pertenecen a el sin embargo aunque pertenezca no es necesario que los usemos atraves de el, ejemplo "console"

// propiedades
console.log()
console.log()
console.log()
console.log()
console.log()
console.log()


// Propiedad console

// propiedad console permite mandar mensajes a la consola del navegador, en el caso de que estes usando la consola del navegador en node js es "diferente"
//sirve mucho tambien para depuracion del codigo
// ejemplos:
console.log() //Es un console sin un mensaje de estador, arrojando el resultado del codigo
console.warn() //Este console nos sirve para dar una advertencia
console.error() //Este console nos sirve de error
console.assert("x"===10, "x no es igual a 10") // Este sirve para realizar afirmaciones simples con el codigo
// si es falso arroja un mensaje de error dependiendo de lo quye pasemos como segundo parametro

//Porpiedad document 
//Esta propiedad hace proporciona informacion detallada y acceso al objeto que hace referencia al documento actual

//Propiedad history 
// Permite navegar en el historial del navegador con 3 metodos que tiene 
// back() este mueve la vnetana actual a una pagina hacia atras en el historial 
// forward() este mueve la ventana actual en el historial si una pagian siguiente disponible
// go()permite navegar a una pagina especifica en el navegardor, en le parametro le puedes indicar cuantas, negativos para atras positvos hacia adelante

window.history.back()
window.history.forward()
window.history.go(-4)


//Propiedad innerHeigth innerWidth
//Estas prpiedades sirve para saber el ancho y alto de la pantalla en px 
console.log(window.innerHeight)
console.log(window.innerWidth)

//length En el contexto de las ventanas, esta propiedad sirve para decir cuantos frames hay dento de la ventana
console.log(window.frames.length)

// Propiedad localStorage 
//Esta prpiedad nos ayuda a guardar informacion de forma persisitente aunque la venta se cierre o se reinicie
//se puede eliminar esta informacion manuealmente atra ves de configuraciones del navegador 
//o cuando se realiza una limpieza de cache

localStorage.setItem("Name", "Santiago")
localStorage.setItem("Age", 18)

const nombre= localStorage.getItem("Name")
const edad= localStorage.getItem("Age")

console.log(nombre)
console.log(edad)

//OuterHeigth y OuterWidth
//Devuelve el ancho y alto de una pestaña incluyendo todo, todo lo que haya

console.log(window.outerHeight, window.outerWidth)

//sesionStorage
//Provee acceso para gestionar la informacion temporal que seran eliminados cuando se cierre la pestaña navegador
//Esta propiedad es muy similar a la localStorage solo que esta tiene un limite de vida util y es cuando se cierre el navegador
//en cambio localstorage persite aunque esto pase

console.log()
console.log()
console.log()
console.log()
console.log()
console.log("Objeto Document")

// Popiedad all esta devulve un htmlCollection similar a un array pero con la informacion de todas las etiquetas que hay en el DOM del documento

console.log(document.all)

//document.activeElement
//Esra propiedad nos dice cual elemento esta enfocado actualmente, nos es util si digamos queremos
// que en el momento que algun elemento de nuetsra pagina este enfocado haga alguna accion

document.addEventListener("click", ()=>{
    const elemntoEnfocado= document.activeElement
    elemntoEnfocado.style.background= "rgb(97, 143, 244)"
    console.log("elemento enfocado: ", elemntoEnfocado.tagName)
})

//Propiedad cookie
// Devuleve una lista con los nombres de las cookies que esatn asignadas o utiliza el documento
console.log(document.cookie)

// ¿que es una cookie o cookies?, las cookies son informacion que se envia al servidor cada vez que un usuario entra a nuestra pagina web
// aqui podemos almacenar informacion como ejemplo tenemps un carito en nuestra pagina web pues podemos almacenar la info del carrito en las cookies, o sea como informacion de la sesion o recordar info del usuario
//tambien las podemos usar para personalizar y hacer un seguimiento o sea recordando preferencias especificas del usuario asi recomendando cosas basado en eso
// y asi mejorar la experiencia


//desingMode
//Esta propiedad lo que hace es que todo lo que  antes era un label o h1 sea editable, nos permite que la pagina sea editable por decirlo de alguna manera
document.designMode= "off"
//lo malo es que vuelve todo el documento editable si se desea solo ciertas cosas que seas editables se toca realizar otras tecnicas como

// <div contenteditable="true">
//  santiago fajardo
// </div>

// aqui solo podras editar el di


// En siguiente ejemplo vamos a usar dos metodos readyState y onreadystatechange
// reasyState nos sirve para saber en que estado se encuentra el documento, este pasa por 5 fases, unsent, opened, loading, interective y complete
// Tipos de objetos
var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function() {
  console.log('Estado actual:', xhr.readyState);
};

xhr.open('GET', 'http://127.0.0.1:5502/javascript/html_objetos.html', true);
xhr.send();

//Interfaz Navigator
// esta inferfaz es un objeto que contiene informacion sobre le agente usuario, la informacion sobre la identidad del usuario
// esta interfaz permite consultar, entre otras cosas el lenguaje que esta usando el usuario
// plataforma, sistema operativo si admite cookies

// Metodo appVersion

// Este nos ayuda a saber cual es la version del navegador esta propiedad tambien puede contener la informacion del sistema operativo

console.log(navigator.appName)

//Propiedad cookieEnable
//Devuleve un booleano indicando si el navegador tiene las cookies activadas o no
console.log(navigator.cookieEnabled)

//Propiedad hardwareCurrency
//Si esta disponible devulve la cantidad de nucleos del procesador
console.log(navigator.hardwareConcurrency)

console.log(navigator.userAgent)


// // Interfaz HTMLElement
// esta interfaz es la que representa todos los elementos del DOM, hereda todas las propiedades del objeto elemento
// esta es muy util cuando se desea añadir funcionalidad o sobrecargar metodos ya existentes
// en otras palabras nos permite entre unas de susu cosas estableces atributos a los elementos del dom

// Propiedades mas usadas:

// Propiedad accessKey

// Esta propiedad nos sirve para enfoncar un elemento y saber cual elemento estamos enfocando si oprimimos una letra, ejemplo


// <button accesskey="s">CLICK ME</button> 

// este boton se enfoca si presionamos la letra alt-s



//Propiedad Attributes

//Esta propiedad nos devuelve todos los atributos que tiene el elemento al cual le demos esta propiedad
let boton= document.querySelector(".boton")
console.log(boton.attributes[1])


//Aqui muestra los atributos del boton


//Propiedad childNodes
//Devuelve todos nodos hijos del elemento que le indicamos
let div= document.querySelector(".div")
console.log(div.childNodes[1])
//En este caso devulve todos los elementos en un array y yo le indique que solo me devolviera el nodo en la posicion numero 1 pero los devuelve todos



//Propiedad classNme
//Sirve para manipular las clases del elemento
console.log(div.className += " div2") 

//De esta forma yo puedo manipular las clases del elemento que deses

boton.hidden=false


//Proiedad name
// Esta propiedad devuelve el nombre del elemnto pero el elemnto tiene que tener la propiedad name en  el
console.log(boton.name)

//Propiedad nextsibling 
//devulve el nodo posterior del elemento que estes pasando, pero algo a tener en cuenta es que esensible 
// a espacios y saltos de linea o sea que si hay un salto de linea ese sera su nextSibling si quieres le siguiente 
// elemento que es lo mas probable el que necesitas es nextElementSibling este si te da el elemento posterior
console.log(boton.nextElementSibling)


//Porpiedad outerHTML
//Esta prpiedad devuleve el contenido del elemento incluyendose asi mismo
// y te lo devulve tambien con la estrutura HTML
console.log(div.outerHTML)

//Propiedad ParentNode
//Esta propiedad devulve el elemento padre del elemento al que lo estemos ultilizando si no tiene devuelve null
let section= boton.nextElementSibling.childNodes[2]

console.log(section.parentNode)

//Propiedad previosSibling
//Es lo opuesto a netxSibling
console.log(div.previousSibling)

//Propieda tabIndex 
//este define la posicion en la que sera enfocado el elemento apartir del tabulador 
//si es 0 tiene su posicion natural, -1 no sera enfocado apartir del tabulador 


//Propiedad textContent
//Esta propiedad devuelve el contenido de tipo etxto del elemento
console.log(div.textContent)


//----------------------------------------------------------------

//METODOS MAS ULTILIZADOS

//addEventListener
//Lo que hace es añadirle un evento a un elemento, no se le puede añadir eventos a varios elementos a la vez
//Lo que toca hacer es iterar la lista de los elemento de esta forma se le asignara un evento a cada elemento por separado

//boton.addEventListener("tipoDeEveneto", funcion())


//Propiedad appendChild
//Inserta un nodo como iltimo hijo del elemnto
let text=document.createTextNode("hola Santiago")
div.appendChild(text)

//Propiedad cloneNode
//Esta propiedad clona un node, incluyendo su contenido si se desea, esto se lo indicas atrves de un booleano el cual pasas pr parametro
console.log( div.cloneNode(true))

let html=div.outerHTML

//getAttribiteNode
//Devuelve un objeto Attribute con la decripcion completa del atributo proporcionado por parametro

console.log(div.getAttributeNode("draggable"))

//hasAttribute
//DEvuleve un booleano indicando si o no tiene el atributo indicado por parametro
console.log(div.hasAttribute("hidden"))


//Porpiedad insertAdjacentHTML
//inserta un contenido html en la posiscion que le digamos en el primer parametro
// no solo tenemos insertAdjacentHTML tambien tenemos insertAdjacentElement y insertAdjacenttext

let elemento=document.querySelector(".p")

elemento.insertAdjacentHTML("afterbegin", html)

//Porpiedad setAtribute
// Esta propiedad establece el valor del atributo indicado por parametro al elemnto indicado

div.setAttribute("hidden", "true")

// tambien tenemos la propiedad removeAttribute
// esta propiedad nos sirve para elminar un atributo el cual le pasamos por parametro del elemento indicado
div.removeAttribute("hidden")

// Propiedad setAttributeNode esta propiedad se utuliza para crear atributos personalizdos

atributo= document.createAttribute("clave")
atributo.value= "id-212121"
div.setAttributeNode(atributo)

// atmbien podemos eliminarlo con la propiedad removeAttributeNode

div.removeAttributeNode(atributo)


//METODO PARA EL OBJETO HISTORY 
//Propiedad pushState
//Te permite cambiar de pagina a la que le indiques por paramento con los botones de retroceder y de avanzar del navegador
// pero tambien se lo puedes asignar a un bton com en el ejemplo

// boton.addEventListener("click", ()=>{
//     const data={someData: 'some value'};
//     const title= "new page";
//     const newUrl= "/nueva page"

//     history.pushState(data, title, newUrl)

// })


// window.onpopstate = function(e){
//     console.log(e.state)
// }


//OBJETO THIS

//El onjeto this provee acceso al objeto actual, ya sea funcion u otro objeto, si el objeto this
// es llamado de forma global hace referencia al objeto window mientras que si se llama desde una funcion o evento hara refencia al propio objeto

function Producto(a, b) {
    this.p = a * b; // Creamos una propiedad 'p' en el contexto de este objeto

    this.calcularP = function() { // Creamos un método para modificar 'p'
        this.p = 10; // Modificamos 'p' específicamente en este contexto
    };
}

const objetoProducto = new Producto(2, 3);
console.log("Valor de p inicial:", objetoProducto.p); // Muestra el valor inicial de 'p'

objetoProducto.calcularP(); // Llamamos al método para modificar 'p'
console.log("Valor de p después de modificar:", objetoProducto.p);

function producto(a, b){
    let p = a*b
    this.p =p
}
producto.p = 0
producto(2,3)
console.log(producto.p)
console.log(window.globalThis.p)
// la razon por la que este codigo devulve 0 en vez de 6 es porque this espera un objeto isntaciado
// para poder hacer referencia a ese objeto como no hay ninguna instancia this esta haciendo referencia 
// al objeto global window si en este caso hicieramos un console.log de window.globalThis.p ahi si retornaria 6

// si queremos que el codigo de arriba funcione lo que tenemos que hacer es crear una instancia del objeto producto

const prod= new producto(2,3)
console.log(prod.p)// listo solucionado

// ahora si digamos lo queriamos era cambiar su valor sin necesidad de instanciar el objeto lo que podemos hacer es cambiar
// tl this por el nom bre del objeto

function productoc(a, b){
    let h = a*b
    productoc.h =h
}
productoc.h = 0
productoc(2,3)
console.log(productoc.h)


//Objeto globalThis
//el objeto this nos permite manejar el contexto actual dado este caso el objeto globalThis
//nos permite manejar el objeto global, dicho de otra forma si estamos dentro de una funcion de un objeto
// que fue declarado bajo el contexto de window el objeto this sera la declaracion del a funcion y globaThis
//sera un alias del objeto window


let it = { name: "it", version: "1.0"}
it.imprimirContextos =function(){
    console.log("this", this);
    console.log("globalThis: ", globalThis)
}
it.imprimirContextos()
//Como ponemos ver aca el this imprime el objeto ya que esta refrenciando al objeto como tal 
//mientras que globalThis al propio objeto window del documento


//Todos lo objetos en javascript provienden del objeto Object, de esta forma todos los objetos geredas sus propiedas y metodos
//El problema esta cuando queremos añardirles nuevas propiedas y metodos para resolver esto tenemos
//el objeto prototype el cual nos permite esto añadir metodos y propiedas a los objetos

//Objeto Protoype
//tiene dos propiedas importantes 
//constructor: el cual epecifica la funcion que creo el prototipo del objeto
//isPrototypeOf: indica que prototipo se uso para el objeto

//añadir una propiedad al objeto date

Date.prototype.littleSantiago= function(){
    let local = new Date(this)
    console.log(local)
    console.log(this.getTimezoneOffset())
    local.setMinutes(this.getMinutes()-this.getTimezoneOffset());
    console.log(local)
    let aux = local.toJSON().slice(0,10)
    console.log(aux)
    aux= aux.split("-")[2] + "-" +
         aux.split("-")[1] + "-" +
         aux.split("-")[0]; 

    return aux
}

console.log(new Date().littleSantiago());


//HERENCIA

//Si queremos crear un nuevo objeto desde cero lo primero que debemso crear es su constructor ejemplo
function Person(nombre, apellido, edad){
    this.nombre = nombre + " " +apellido ;
    this.edad= edad || 18;

};

Person.prototype.getedad=function(){
    console.log(this.nombre + ' tiene ' + this.edad + ' años de edad ')
}
let santiago = new Person("santiago", "fajardo sabogal", 19)
santiago.getedad()


function Alumno(persona, curso, asignaturas){

    for(let i in persona){
        this[i]= persona[i]
    } // esto nos ayuda a copiar las rpopiedades de la clase person en la clase alumno
    this.curso =curso;
    this.asignaturas=asignaturas;
};

Alumno.prototype =new Person();
Alumno.prototype.constructor = Alumno // esto asugura que la funcion constructura apunte a la funcion constructura de alumno y la 
//constructura de la que esta heredando

santiago = new Alumno(santiago, "universidad", "....")
console.log(santiago)