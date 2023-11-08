//el objeto number format de la interfaz intl
//Este objeto le formato a los numeros de manera regional, si no se le indica un parametro se tomas como region la que este establecida por el pc

console.log(new Intl.NumberFormat().format(123123.123))
// como no se le dio ningun parametro se toma por defecto la region de la pc

//ahora usemoslo con parametros, este metodo recibe dos parametros.
//El primero que es la region o formato de la region que queremos usar, el cual lo definimos segun el estandar BCP 47
//El segundo es un json de opciones que especifican las diferentes propiedades del formato
//Los possibles valores de json son, "decimal- para indicar que trata de numeros decimales", "currency"-para indicar que trata de divisas, percent para indicar que trata de valores decimales

let nFormar= new Intl.NumberFormat("es-Es", {
    style:"percent",
    minimumFractionDigits:2
})

console.log(nFormar.format(0.52))

//propiedad currency
//Esta nos sirve para establecer el formato de una divisa, ejemeplo

let nDIvisa=new Intl.NumberFormat("es-Es",{
    style: "currency",
    currency: "MXN",
    currencyDisplay:"name",
    minimumFractionDigits: 0
})

console.log(nDIvisa.format(52000))

//Dependiendo de lo que pongamso en currency display aprecera cosas distintas
//code= el codigo del currency que pongamos
//name= el nombre del currency que pongamos
//symbol= el simbolo del currency que pongamos

//Propiedad useGrouping

let nGrouping= new Intl.NumberFormat("es-ES",{
    style: "decimal",
    useGrouping: false,
    minimumFractionDigits: 2
})

console.log(nGrouping.format(12345.53))
let nGroupingDos= new Intl.NumberFormat("es-ES",{
    style: "decimal",
    useGrouping: true,
    minimumFractionDigits: 2
})

console.log(nGroupingDos.format(12345.53))

//lo que hace es indicadar si se usara el separador de miles o no


//Porpiedad minimunIntegerDigits

//esta propiedad indica el minimo de nuemros que debe utilizarse en la parte entera, el rango de valores utilizable es de 1 a 21

let nEntera= new Intl.NumberFormat("es-Es",{
    style: "decimal",
    useGrouping: false,
    minimumIntegerDigits: 4,
    minimumFractionDigits: 2
})

console.log(nEntera.format(4.32))

//Propiedad maximunFractionDigits

let nFraction= new Intl.NumberFormat("es-Es", {
    style: "decimal",
    useGrouping:false,
    minimumIntegerDigits:3,
    minimumFractionDigits: 2,
    maximumFractionDigits:2

})

console.log(nFraction.format(32.326))

//esta propiedad indica el numero maximo de numeros que habran en la parte literal



//INTERNALIZACION DE FECHAS

//Recuperar la fecha actual

console.log(new Date())

//fecha desde un valor en milisegundos

const timestamp = 1700119850222;
const fecha = new Date(timestamp);

console.log(fecha, "linea 97");

//Crear fechas desde un string dado

console.log(new Date("2019-05-31"))
console.log(new Date("March 31 2019"))

//fecha apartir de sus valores numericos

console.log(new Date(2019, 0, 311, 23,59,59,999))
console.log()
console.log()
console.log()
console.log()
console.log("Metodos")
console.log()
console.log()
console.log()
//Metodos mas utilizas para el objeto Date.
console.log(new Date("2021 march 21").getDate()) //devulve exclusivamente el dia de la fecha indicada

console.log(new Date("2023 November 16").getDay()) //devueleve el valor numerico del dia de la semana empezando por domingo y terminando en sabado
                                                    //en este caso devuelve 4 ya que el dia de la semana de noviembre 16 del 2023 es un juves el dia 4 segundo lo indicado


console.log(new Date("2023 November 16").getFullYear())//devulve el valor numerico referente al año en este caso 2023
console.log(new Date("2023 November 16 02:30:50").getHours())//devuelve la hora referente a la fecha indicada en este caso 2)
console.log(new Date("2023 November 16 02:30:50:222").getMilliseconds())//devuelve los milisegundos referente a la fecha indicada en este caso 222
console.log(new Date("2023 November 16 02:30:50:222").getMinutes())//devuelve los minutos referente a la fecha indicada en este caso 30
console.log(new Date("2023 November 16 02:30:50:222").getMonth())//devuelve el mes referente a la fecha indicada en este caso 10 porque es medidio del 0 al 11
console.log(new Date("2023 November 16 02:30:50:222").getSeconds())//devuelve los segundos referente a la fecha indicada en este caso 50
console.log(new Date("2023 November 16 02:30:50:222").getTime())//devuelve la cantidad de milisegundos transcurridos des el 1 de enero de 1970 hasta la fecha indicada
console.log(new Date("2023 11 16 02:30:50:222").toDateString())//ddevuleve en formato string la fecha indicada, indicando el nombre del mes del dia de la semana, el dia y el año
console.log(new Date("2023 11 16 02:30:50:222").toLocaleDateString())//devuelve la fecha en el formato que corresponda con la localidad actual, es decir sumando o restando el GMT que corresponda
console.log(new Date("2023 11 16 14:30:50:222").toLocaleTimeString())//devuelve la hora en el formato que corresponda con la localidad actual, es decir sumando o restando el GMT que corresponda
console.log(new Date("2023 11 16 14:30:50:222").toLocaleString())//Una combinacion de las dos anteriores

console.log("continuacion")
console.log()
console.log()
//Objeto DateTimeFormat

console.log(new Intl.DateTimeFormat().format(new Date))

//A este objeto se puede enviar sin parametros y devuelve la fecha de la region que tiene la pc
//Pero si quisieramos enviarle un parametro este onjeto recibe dos, el pimero que es el codigo de la region segun el estandar BCP 47
//Y el segundo que es una serie de propiedades escritas en formato json 

//Porpiedades

//Full-- Para indicar que se muetres la fecha con formato largo, que se indique hasta el dia de la semana
//long-- Para indicar que se muestre la fecha en formato largo sin el dia de la semana 
//medium-- para indicar que se meustre la fecha en formato con el mes abreviado, por ejemplo "10 nov 2023"
//short-- Para indicar que la fehca se muestre en formato corto solo numeros-- 10/11/2023
//por defecto el valor de esta propiedad es shor 

let fechaShort=new Intl.DateTimeFormat("es-ES", {
    dateStyle: "short"

})
console.log(fechaShort.format(new Date()))

//Propieda day

//tiene dos valores "numeric" para indicar que muestre el dia sin cero adelante y dos para indicar que se muetsre con dos digitos
//pot defecto su valor es numeric

let options={
    timeZone:"Europe/Madrid",
    day: "2-digit"
}


let fechaMadrid=new Date("2023-11-10")
console.log(Intl.DateTimeFormat("es-ES", options).format(fechaMadrid))

//propiedad hour

//Es exactamente igual que day solo que esta es para las horas
let optionsD={
    timeZone:"Europe/Madrid",
    hour: "2-digit"
}


let horaMadrid=new Date('2023-11-08 1:02:43')
console.log(Intl.DateTimeFormat("es-ES", optionsD).format(horaMadrid))


//Propiedad 12 hour
//Establece que el formato de la hora sea de 12 horas si le envias como valor booleano un true si es false sera de 24 el formato

let opciones={
    timeStyle:"medium",
    timeZone: "Europe/Madrid",
    hour12:true
}

console.log(Intl.DateTimeFormat("es-ES",opciones).format(new Date()))

//propiedad minute
//Exactamente lo mismo que hour y day solo que para minutos

let opcionesMinutos={
    timeZone:"Europe/Madrid",
    minute: "2-digit"
}

minuto= new Date("2023/11/08 18:5:34")
console.log(Intl.DateTimeFormat("es-ES", opcionesMinutos).format(minuto))

//Propiedad month
//Exactamente lo mismo que hour y day solo que para meses
let opcionesMeses={
    timeZone:"Europe/Madrid",
    month: "2-digit"
}

mes= new Date("2023/3/08 18:5:34")
console.log(Intl.DateTimeFormat("es-ES", opcionesMeses).format(mes))

//Propiedad second
let opcioneSegundos={
    timeZone:"Europe/Madrid",
    second: "2-digit"
}

segundos= new Date("2023/3/08 18:5:4")
console.log(Intl.DateTimeFormat("es-ES",opcioneSegundos).format(segundos))

//Propiedades de timeStyle

// Full-- para mostrar la hora con formato largo con el texto del uso horario
// long-- para mostrar en formato largo pero esta vez con la breviatura del uso horario
// medium-- para que solo se muetsre hora, min y segundos
// short-- para indicar que se muetsr la hora sin los segundos
// Por defecto su valor es medium

let optionTime={
    timeStyle: "short"
}
console.log(Intl.DateTimeFormat("es-ES", optionTime).format(new Date()))// Aqui se muestra la hora local


//Propiedad TimeZone
optionTime={
    timeStyle: "short",
    timeZone:"America/Argentina/Buenos_Aires"
}
console.log(Intl.DateTimeFormat("es-ES", optionTime).format(new Date()))// Aqui se muestra la hora de Buenos aires

//Propiedades de weekDay

// long-- para mostrar el dia de la semana con formato largo el dia completo
// short-- para mostrar el dia version corta "Dom" por ejemplo
// narrow-- para indicar que solo muestre la inicial del dia

optionTime={
    timeZone:"America/Argentina/Buenos_Aires",
    weekday: "short"
}
console.log(Intl.DateTimeFormat("es-ES", optionTime).format(new Date()))// Aqui el dia de la semana

//propiedad year
//Exactamente lo mismo que hour, minute y second
let opcionYear={
    timeZone:"Europe/Madrid",
    year: "2-digit"
}

año= new Date("2023/3/08 18:5:4")
console.log(Intl.DateTimeFormat("es-ES",opcionYear).format(año))//solo muestra dos digitos los dos ultimos





