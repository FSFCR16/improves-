// Vamos a emepezar explicando que es el callStack
// El callStack es una pila de llamadas, que quiere decir eso?
// En si que es una estructura de datos que se utiliza en programacion para
// gestionar la ejecuion de las funciones, es una pila de elementos dosnde se almacenan las llamadas de las funciones
// en curso y las variables que estan asiscioadas a ellas
// Cuando se llama una funcion esta se coloca en la parte superior de la pila
// cuando esa funcion termina, se elemina de la pila y el control vuelve a la funcion que lo llamo

// Cuando un script llama a una función, el intérprete la agrega a la pila de llamadas y luego comienza a ejecutar la función.

// Cualquier función llamada por esa función se agrega a la pila de llamadas más arriba y se ejecuta donde se alcanzan sus llamadas.

// Cuando finaliza la función actual, el intérprete la saca de la pila y reanuda la ejecución donde la dejó en la última lista de código.

// Si la pila ocupa más espacio del asignado, se genera un error de "desbordamiento de pila".

// function recursivaInfinita() {
//   recursivaInfinita(); // Llamada recursiva infinita
// }

// recursivaInfinita();

// Maximum call stack size exceeded

// A esto se refiere el ultimo punto, todos los lenguajes tienen un espacio aignado en memoria
// para que la pila pueda estar alojada si se llaman demasiadas funciones anidadas o recursivas
// ya que el callstack alcanza su limite y sale el error en el caso de js // Maximum call stack size exceeded
// en lenguajes de mas bajo nivel puede que tengas la capacidad de modificar el tamaño del callStack

function squere(num) {
  return num * num;
}

function logSquere(num) {
  console.log(squere(num));
}

logSquere(2);

// Masomenos explicado el callStac, que pasa en el codigo de arriba?
// primero se daclaran las funciones, el motor las ignora debido a que no estan siendo llamadas
// cuando llega a logSquere el agrega esa funcion al callstack y ejecuta la funciona linea por linea
// dentro de la funcion se encuentra con un log el cual tambien llama una funcion, entonces
// ya que es otra llamda agrega al callStack en la parte superior la nueva llamada, ejecuta linea por linea
// Se encuentra con un return el cual devulve una multiplicacion, y termina la ejecucion de la funcion
// ya que hubo una devolucion, al terminar la ejecucion elimina del callStack la funcion que se acabo de ejecutar
// y vuelve al lugar donde hubo la invocacion y continua hacia abajo, ya que eestaba dentro una funcion
// esa funcion toma el control, debido a que en el callStack esa funcion estaba en la pil, la funcion se termina
// se elemina y vuelve al main debido a que ya no hay mas, ahora segun no lo se de verdad
// pero se supone que el motor de js y node envuelve el codigo en una funcion anonima la cual es autoinvovable
// entonces ese seria el inicio del callStack, cuando el codigo termina, saca a la funcio  anonima y acaba el codigo y el stack queda vacio

// esta frase resume lo de la funcion aninima la cual, la llamaremos el conxto global
// Cuando ejecuta un script, el motor JavaScript crea un contexto de ejecución global y lo coloca en la parte superior de la pila de llamadas.

console.log("hola");

setTimeout(() => {
  console.log("time");
}, 0);

console.log("mundo");

// Que pasa aca o como acabo de ver que funcionan los callbacks, creo que es el caso de todos los callbacks
// pero el proceso es el siguiente
// primero se ejecuta la funcion log() la cual se pone en la parte superior del callStack
// Cuando se impreme, se elimina del callStack, y pasa a la linea del setTimeout, aqui pasan cosas diferentes dependiendo del entorno de ejecucion
// pero en el caso del navegador esa funcion setTimeout es una web API's lo que quiere decir que es una funciona proporcionada por el navegador
// y todas las web API's se pasan a la cola de tareas, entonces en este momento del programa
// la funcion setTimeout se ejecuta en el hilo de las web API's dandole paso a que se ejcuten las demas funciones, cuando pasa el tiempo
// del setTimeout este entra en el callback, pero los callback no se ejecutan hasta que el callStack este vacio, o sea en si cuando el programa termine
// ya que debe esperar a que todas las funcoines se ejecuten, ya que el callStack queda vacio
// el eventLoop entra en ejcucion y permite que todos los callBacks que estan en la cola de tareas
// se empiecen a ejecutar uno a uno y es por eso que al correr el programa
// vemos que se ejecuta o que el log es el siguiente
// LOG //
// hola
// mundo
// time
// ya que no importa que tiempo le pongamos al setTimeout, ese callback se fue a la cola de tareas y hasta que el callStack no quede vacio
// el eventLoop no lo puede ejecutar
