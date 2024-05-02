const url = "https://jsonplaceholder.typicode.com";

const getUserInfo = (id) =>
  new Promise((resolve, reject) => {
    request({ uri: `${url}/users?id=${id}` }, (err, res, body) => {
      if (err) {
        reject(err);
      } else {
        resolve(JSON.parse(body));
      }
    });
  });

const getPost = (id) =>
  new Promise((resolve, reject) => {
    request({ uri: `${url}/posts?userId=${id}&_limit=3` }, (err, res, body) => {
      if (err) {
        reject(err);
      } else {
        resolve(JSON.parse(body));
      }
    });
  });

const p = getUserInfo(1);
p.then((v) => {
  const [user] = v;
  return user;
})
  .then((userP) => {
    console.log(userP);
    return getPost(userP.id);
  })
  .then((posts) => {
    console.log(posts);
  })
  .then()
  .catch((err) => console.log(err));

// El then sirve para manejar las promesas resultas es decir cuando una promesa se resuelve
// el then toma el valor devuelto por la promesa y maneja la logica que tenga en el callback de su interior
// que pasa, que los then aunque son los que manejan las promesas resultas, ellos tambien devuelven una promesa
// y estas promesas se pueden seguir manejando por medio de otros then, pero esta promesas no simpre tienes
// que resolverlas, me refiero a las promesas que devuelve el then debido a que, aunque si devuelve promesas, js
// se encarga de resolver esta promesa por ti, entonces tienes la opcion de resolverla o no
// segun lo que dice en vsCODE el then devuelve una promesa que se completara acuando se ejecute cualquiera de los callback asociados a ella

// Una descripcion de lo que es el event loop y que me parece muy acertada es que es un ciclo infinito que espera por una tarea
// luego ejecuta la tarea requerida y vuelve a dormir esperando a que llegue otra tarea

// Algoritmo del motor:
// 1. Mientras haya tareas:
// ejecutarlas comenzando por la mas antigua, o sea la primera que entro a la cola de tarea este seria un modelo
// FIFO first in first out

// 2. Dormir hasta que aparezca una tarea luego volver a 1

// Ejemplos de tareas:

// Cuando un script externo <script src="..."> se carga, la tarea es ejecutarlo.
// Cuando un usuario mueve el mouse, la tarea es enviar el evento mousemove y ejecutar el controlador.
// Cuando llega el momento de un setTimeout programado, la tarea es ejecutar su callback.
// … y así sucesivamente.

// El renderizado nunca ocurre mientras el motor ejecuta una tarea. No importa si la tarea ocupa mucho tiempo.
// Solo se realizan cambios a DOM una vez que la tarea finaliza.
// esto recalca lo que ya veniamos hablando pero en otras palabras y seinto que algo mas certero seria decir que el renderizado
// solo ocurre cuando no hay nada en el callStack porque aunque hayan tareas en coladas, el renderizado se ejecuta debido a que tiene mas proriedad
// que las demas tareas excepto que las tareas que ya estan en el call stack

// Si una tarea consume demasiado tiempo, el navegador no puede hacer otras tareas,
// procesos o eventos por lo que después de un tiempo muestra una alerta “La página no responde”
// sugiriendo detener la tarea con la página completa. Esto ocurre cuando hay muchos cálculos
// complejos o un error en la programación que lleva a un bucle infinito.

// let i = 0;

let start = Date.now();

function countt() {
  // realiza una parte de la tarea pesada(*)
  do {
    i++;
  } while (i % 1e6 != 0);

  if (i == 1e9) {
    alert("Done in " + (Date.now() - start) + "ms");
  } else {
    setTimeout(count); // programa una nueva llamada (**)
  }
}

// Que hace este codigo pues como comentabamos si una tarea es demasiado larga hasta que esa tarea no termine el navegador
// queda congelado esperando a que termine entonces este codigo usa un setTimeout que lo entiendo y lo que pasaria es que
// primeor ejecuta lo del do y despues entra al while, el while dice que mientras la division entr i y 1000000, el resuduo de esa dividion
// sea diferente de 0 se ejecutara ese bloque
// despues verifica si u es igual a 1000000000 si no es entra en el else y el else lo que hace es un setTimeout, su primer
// parametro es un callback, entonces que el setTimeout es un web API y al ser un web API se ejcuta en otro hilo dejando libre el callstack
// para siga ejecutando el callSatck y que cuando acabe renderice y despues si ejecuta el callback de la funcion setTimeout por medio del eventLoop

// let progress = 0;
// function count() {
//   for (let i = 0; i < 1000000; i++) {
//     i++;
//     progress = i;
//   }
//   return progress;
// }

let i = 0;
let progress = 0;

function count() {
  // realiza una parte del trabajo pesado (*)
  do {
    i++;
    progress = i;
  } while (i % 1e3 != 0);
  if (i < 1e7) {
    console.log(setTimeout(count));
  }
}

// Este tambien me parece interesante debido a que no lo tengo mucho en cuenta o sea es algo que pasa y no nos damos ceunta
// pero cuando mostramos un resultado que nos lo arroja de una vez es por lo mismo todo es un proceso, me refiero a que
// hasta que el programa no acaba de realizar la accion no vemos el resultado, en este caso por cada accion del do, while vemos el resultado
// y es gracias al event loop y su forma de trabajar, ya que se realiza todo el codigo del call stack
// vamos representar el funcionamiento de ese codigo

// Primero se declaran las primeras variables
// i = 0
// progress = 0
// pasa por la funcion pero no hace debido a que no hay un llamado
// llega a la linea 124 y se enceuntra con el llamdo la funcion entra en le callStack
// CALLSTACK

// main() count()

// empieza  salir de count()
// realiza primeor el do, le aumenta 1 a i y a progress le asigna el valor de i
// despues pasa por el while que dice, mientras i % 1000 != 0 o sea que mientras el residuo de la division entre i y 1000 sea diferente de 0
// el bucle se va a ejecutar
// eso quiere decir que el bucle se va a ejecutar mientras i sea diferente de 1000 se va a correr el bucle
/// cuando i ya sea 1000 el acabara con el bucle y verificara que i sea menor que 1000000
// si esto es correcto el entrara en el if volviendo a ejecutar la funcion count con un tiempo de espera debido a que esta
// se ejecuta con setTiemout y este se ejecuta en otro hilo

// CALLSTACK
// main() count() log() setTiemout() / satTiemout se ejecuta en otro hilo
// se hace el log que en este caso deberia ser nada ya que la funcion no devuelve nada
// sale del log, termina count() porque count ya no tiene nada para realizar
// y termina main() porque ya no hay mas codigo

// esto permite que termine tambien main, dejando espacio para el renderizado, para que se ejecuate la tarea pendiente del count()
// debido a que el callstack esta vacio

// CALLSTACK

// vacio

// vuelve a correr todo

const progresss = document.querySelector(".progress");
function countCorto() {
  for (let i = 0; i < 1e6; i++) {
    i++;
    progresss.innerHTML = i;
  }
}
