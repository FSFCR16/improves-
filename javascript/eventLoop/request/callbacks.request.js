const url = "https://jsonplaceholder.typicode.com";

const btnClick = document.getElementById("btn-click");
const numClicks = document.getElementById("num-clicks");
const btnSlow = document.getElementById("btn-slow");
const content = document.getElementById("content");

let clicks = 0;
btnClick.onclick = () =>
  (numClicks.innerHTML = `Number of clicks: ${++clicks}`);

btnSlow.onclick = () => getUserInfo(1);

const getUserInfo = (id) => {
  request({ uri: `${url}/users?id=${id}` }, (err, res, body) => {
    if (err) {
      console.error(err);
    } else {
      const user = JSON.parse(body)[0];
      content.innerHTML += `<h3>User Info</h3><p>${user.email}</p>`;
      request(
        { uri: `${url}/posts?userId=${id}&_limit=3` },
        (err, res, body) => {
          if (err) {
            console.log(err);
          } else {
            const posts = JSON.parse(body);
            posts.forEach((post) => {
              request(
                { uri: `${url}/comments?postId=${post.id}&_limit=2` },
                (err, res, body) => {
                  if (err) {
                    console.log(err);
                  } else {
                    const comments = JSON.parse(body);
                    const html = comments
                      .map(
                        (comment) =>
                          `<p><span>${comment.email}</span>: ${comment.body}</p>`
                      )
                      .join("");
                    content.innerHTML += `<div class="post"><h4>${post.title}</h4>${html}</div>`;
                  }
                }
              );
            });
          }
        }
      );
    }
  });
};

// EXplicacion del codigo de arriba vamos solo a explicar de sde la linea 12 hacia abajo
// Primero tenemos que saber que existe jerarquias para la ejecucion o el funcionamiento del event loop en este ejemplo vamos a manejar solo 4
// la primera que mencione sera la de mayor prioridad la ultima la de menor
// renderizacion, DOM task, UI task, Net task
// Lo primero que pasa es que se ejecuta el evento de click, el evento click es una UI task ya que es una tarea del usuario
// Esta tarea es una funcion que ejecuta otra funcion la cual es getUserInfo
// en este momento el call stack se veria asi

// main() onclick() getUserinfo()

// get user info ntra en el stack debido a que se hizo llamada de esa funcion y todas las funciones que sean llamadas entran a la pila del stack
// listo entonces como vemos dentro de getUserInfo tenemos otra funcion la cual es una request la request son peteciones http la cual se manejan como web API
// como esa funcion esta compuesta por un parametro el cual es str y un segundo parametro el cual es un callback, pues lo que pasa es lo siguiente como dentro
// de la funcion getUserInfo no hay nada mas que la funcion erquest pues la funcion request al ser una web API se ejecuta en un hilo diferente, ya que espera a que termine
// estonces esta funcion sale del stack
// hasta este punto el stack estaba asi

// main() onclick() getUserinfo() request()

// ya que como dije la funcion request se ejecuto en otro plano, esat sale del stack debido a que esta funcion era la unica dentro de getUserInfo()
// esta tambien sale del stack debido a que ya termino, tambien sale onClick porque tambien ya termino y como ya no hay nada mas por leer en el codigo termina main()
// y el stack queda vacio y se renderiza debido a que siempre que el satck este vacio habra una renderizacion debido a que en jerarquizacion esta es la de mayor prioridad.

// Ahora lo que pasa es que para este punto la petecion http de la funcion request que estaba corriendo en un hilo diferente ya debio terminar el tiempo de espera
// y devulve el callback este callback se empieza a ejecutar a que se en cola, este se en cola como un net task, y siendo el unico callback el y el stack esta vacio el eventloop
// lo ejecuta, este callback tiene una condicion si se cumple el primer if, arroja error y si se cumple el segundo, entra en un bucle forEach
// este bucle tambien es una funcionel cual tiene una funcion anonima, que a su vez tiene una funcion request adentro de el entonces este momento el call stack seria el siguiente suponiendo que no entro al primer if

// callback_primer_request() forEach() anonima() request()

// Entonces empezamos a salir de cada funcion, de la primera funcion salimos y la ponemos en otro hilo debido a que es un web API
// de la funcion anonima tambien salimos porque ya termino pero el forEach todavia no salimos ya que es un bucle
// entonces vuelve y se ejcuta la funcion anonima y la request la cantidad de veces que sea el bucle
// en este caso son tres.

// Termina el bucle por ende termina toda la cola de ahi para atras quedando vacia y dejando en el otro hila las peticiones http
// para este punto estas peticiones ya abran terminado y solo quedan sus callback, los cuales el eventloop se encargara de ejecutar uno a uno
// comienza el primer callback
// en el pirmer callbackpone los comentarios en una varible y la parsea, cuando termina de parsearla, recorre cada comentario por medio del map
// y los une por medio del join y los añade al dom asi hast terminar y cuando acabe ahi termina nuestro codigo
