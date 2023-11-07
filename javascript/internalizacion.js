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