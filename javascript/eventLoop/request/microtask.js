console.log("hello");

setTimeout(() => console.log("tme"), 0);

Promise.resolve("Promise").then(() => console.log("Promise"));

console.log("World");

// Las microtareas son las que tienen mayor prioridad que todo, hasta tienen mas prioridad que el render

// Como ya hemos habaldo antes del event loop, vamos a repasarlo un poco, pero con otros "terminos"
// el event loop traba continuamente verificando dos colas, la cola de microtareas y la cola de macro tareas, estas colas guardan
// los callbacks de operaciones asincronas que estan esperando para ser ejecutados

// Ejemplo

setTimeout(function () {
  console.log("Hello after 3 seconds");
}, 3000);

// esta callback de aca se guardara en la cola de macrotareas y esperara a ser ejecutado

// ¿Cual es la diferencia entre microtask y macrotask, la principal diferencia es la prioridad que tiene cada tarea
// El event loop siempre le dara prioridad mayor a las tareas que sean puestas en la cola de las microtareas como ya lo habiamos
// explicado anteriormente, la coal de microtareas contiene los callbacks de las operaciones que son consideradas mas irgentes o importantes
// como las promesas y mutation observer APIs, eso ultimo es una interfaz que tiene la habilidad de observar cambios que se hacen en el DOM tree
// un ejemplo pero esto se hace mediante un objeto, ejemplos de encolamiento en la cola de microtareas

queueMicrotask(() => {
  console.log("Esta es una microtarea");
});

// esto lo que hace es en colar algo en la cola de micro tareas, esto es igual que el promise resolve pero es mas eficiente y tiene una prioridad mas alta
const observer = new MutationObserver(() => {
  console.log("Cambio en el DOM");
});

observer.observe(document.body, { childList: true });

// como comente el mutation obserever tambien hace parte de las microtareas, este se utiliza para observar cambios en el DOM y reaccionar a ellos

process.nextTick(() => {
  console.log("Esta es otra microtarea en Node.js");
});

// process.nextTick() en Node.js: En Node.js, process.nextTick() se utiliza para encolar una función que se ejecutará en la próxima iteración del bucle de
// eventos de Node.js, justo después de que se completen las operaciones actuales.

// las macrotareas contienen callbacks que se consideran de menor importancia, como los timers o los eventos de entrada y de salida I/O events
// o los eventos de la interfaz del usuario

// Ejemplo

console.log("Start");

setTimeout(function () {
  console.log("Timeout");
}, 0);

Promise.resolve().then(function () {
  console.log("Promise"); // microTask!
});

console.log("End");

// Que sucede aca?

// Primero entendamos que el event loop ejecuta primero lo que es sincrono debido a que al ser sincrono es lo primero que se lee del codigo y se guarda de primeras
// en el callStack, despues el eventloop verificara si hay algo en la cola de microtareas si hay algo esto tendra mas prioridad que lo que haya en la
// cola de macrotareas entonces esto sera ejecutado despues de lo asincrono
// por ahora los logs irian de esta forma
// LOGS
// start end promise
// Por ultimo el event loop verifica si hay algo en la cola de macro tareas, si hay algo esto seria lo de menor prioridad y lo ejecutaria
// en este caso y como mencionamos anteriormente en la cola de macrotareas se guardan los timers, el setTimeout es un timer, por lo tanto se ubica en la cola de macrotareas
// provocadno de esta forma que se ejecute de ultimas
// LOGS
// start end promise timeout

// Este fragmento explica cómo depender del orden de ejecución de diferentes tipos de tareas puede crear
// condiciones de carrera (race conditions) o resultados inesperados en un programa.

// Una condición de carrera ocurre cuando el resultado de un programa depende del momento
// exacto en que ocurren ciertos eventos o tareas, y este momento puede ser impredecible
// debido a la naturaleza asincrónica del programa.

// Por ejemplo, si se utiliza setTimeout para programar una tarea después de una promesa,
// no se puede garantizar que la promesa se resolverá antes de que se ejecute la tarea
// programada con setTimeout. Esto se debe a que la resolución de la promesa puede ocurrir en un momento impredecible en el futuro, mientras que la tarea programada con setTimeout se ejecutará después de un período específico de tiempo.

// Por lo tanto, si el resultado de la tarea programada con setTimeout depende del resultado
// de la promesa, puede ocurrir una condición de carrera si la promesa no se resuelve antes
// de que se ejecute la tarea con setTimeout, lo que puede llevar a resultados inesperados o
// errores en el programa.

const promise = new Promise((resolve, reject) => {
  const randomTime = Math.random() * 1000; // Tiempo aleatorio entre 0 y 1000 milisegundos
  setTimeout(() => {
    resolve("Promesa resuelta");
  }, randomTime);
});

promise.then((result) => {
  console.log(result);
});

// Programamos un setTimeout para ejecutar un código después de un tiempo corto
setTimeout(() => {
  console.log("Código de setTimeout ejecutado");
}, 100);

// Encadenamos una microtarea al resolver la promesa

console.log("Fin del script");

// Este escenario muestra que aunque las promesas que son microtareas tengan prioridad, como adentro de la promesa hay una micro
// tarea que es el setTimeout y se demora mas que el setTimeout de la linea 109, pues por el orden FIFO ambos son macrotareas pero una se ejcuta primero
// que la anterior entonces por eso es que auqnue la microtarea tiene prioridad se ejecuta primero la de abajp
