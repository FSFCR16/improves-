const { time } = require("console")

console.log("20" + "2")//concatenacion de strings
console.log("20" + 1)//concatenacion de strings
console.log(20 + 1)//suma matematica pero se lleva acabo si ambos operandos son de tipo numerico en cambio si no lo son se llevar acabo una concatenacion
console.log(20-1)//resta pero este encambio de la suma silos operandos no son numericos la conversion se hara automaticamente 
console.log("100"-1)//resta pero este encambio de la suma silos operandos no son numericos la conversion se hara automaticamente 
console.log(2*3)//multiplicacion este al igual que la resta si son diferentes tipos hace el cambio de tipos automaticamente
console.log(2*"3")
console.log(20/2)//division igual que la resta/multi si los operandos son de diferente tipo
console.log(20/"2")
console.log(20%3)// modulo o residuo, hace la operacion y devuelve solo el residuo si son diferentes lo mismo de las anteriores
let modulo= 20%"7"
console.log(modulo.toFixed(2))
console.log(2**3)
let a= 0
let b= ++a
console.log(b, a)
let c=0
let d= c++
console.log(c, d) //incremento
console.log(d)
let c1= 1
let b1= --c1
console.log(b1, c1)
let h1=1
let d1= c--
console.log(h1, d1) //decremento
console.log(d1)
//operador AND
console.log("AND")
console.log(true && true)
console.log(true && false)
console.log(false && true)
console.log(false && false)
console.log(false && (3 == 4))
console.log("mundo" && "hello")// solo devulve true si ambos son verdaderos y dado el caso como el de estos dos strings 
//si el de la izquierda puede ser convertido a false devolvera ese valor de lo contrario devolvera el de la derecha
 
//operador OR
console.log("OR")
console.log(true || true)
console.log(true || false)
console.log(false || true)
console.log(false || false)
console.log(false || (3 == 4))
console.log("mundo" || "hello")// solo devulve false si ambos son false y dado el caso como el de estos dos strings 
//si el de la izquierda puede ser convertido a True devolvera ese valor de lo contrario devolvera el de la derecha


//Operador not
console.log("NOT")
console.log(!true)
console.log(!true)
console.log(!false)
console.log(!false)
console.log(!(3 == 4))
console.log(!"mundo")//devuelve lo contrario y si la expreion declarada puede ser transformada a true devuelve false de lo contrario true

//Operador de igualdad 

console.log("===")
console.log(true==true)
console.log(false==true)
console.log(false==true)
console.log(false==false)
console.log((3 == 4))
console.log("hola"=="mundo")//Operador de igualdad evalua de izquierda a derecha si son iguales evuelve true de lo contrario false
//a veces suele ocurrir que se desea comparar un numero (5) con str("5") al hacer esto javascript hace el cambio
//si no se desea que esto ocurra se usa === para que sea mas estricto

console.log("3"==3)
console.log("3"===3)

console.log("hola"!="mundo")
console.log("3"!=3)
console.log("3"!==3)//Operador de desigualdad evalua de izquierda a derecha si son desiguales devuelve true de lo contrario false
//a veces suele ocurrir que se desea comparar un numero (5) con str("5") al hacer esto javascript hace el cambio
//si no se desea que esto ocurra se usa === para que sea mas estricto

//Operador de mayor que y menor que

console.log("----------")
console.log(3<2)
console.log(10>5)
console.log("20" < "30", "linea 85")
console.log("3">"1")
//simpre es mejor aunque javascript lo permita hacer operaciones con elementos del mismo tipo asi que es mejor cambiar el tipo al elemento

//operador ternario

var elvisLives = Math.PI > 4 ? "Sip" : "Nop";
console.log(elvisLives) // es un condicional donde la parte antes del signo de interrogacion sera evaluada 
// y lo que va despues del signo sera la respuesta que arrojara dependiendo del resultado de la evaluacion, la condicion debe ser true o false
//si es True arrojara el primer elemento despues del signo de interrogacion si es false devolvera el segudno

console.log("-----------------")
entradaaPorNombre= (nombre)=>{
    var firstCheck = false,
    secondCheck = false

    if (nombre.charAt(0)=== "s"){

        secondCheck=true

    }
    access = firstCheck ? "Acceso Denegado" : secondCheck ? "Acceso Denegado" : "Acceso Permitido";

    console.log(access)

}

entradaaPorNombre("tantiago") // uso del ternario "anidado" evalua la primera condicion bota un resultado y despues evalua ese resultado y bota el resultado final dependiendo de ese resultado



//Operador bit a bit ; &

let bUno= 30 //11110
let bDos= 15 //01111

console.log(bUno & bDos) //01110 // Operadores bit a bit, operador "AND" lo que hace es pasar el numero dado a numero binario
//y ese numero binario lo compara con el otro valor que tmabien lo paso a numero binario, ejemplo 30 (11110) & 15 (01111) 
// si ambos bits de cada numero en base dos es 1 se quedara como 1, de lo contrario sera 0, esto con el operador & resultado 14(01110)


//Operador bit a bit ; |

let bTres= 30 //11110
let bCuatro= 15 //01111

console.log(bTres | bCuatro) // Este operador  "OR" lo que hace es que si ambos bits de las cantidades es 0 lo deja como cero de lo contrario 1
//resultado del ejemplo 11111


let bCinco= 20 //10100
let bSeis= 5   //00101

console.log(bCinco ^ bSeis) // Este operador  "XOR" lo que hace es que si uno de los bits es 1 el resultado tambien lo sera, de lo contrario 0
//resultado del ejemplo 17(10001)

//Operador de complementacion

let valorNum= 38// equivale a 00100110

console.log(~valorNum) // el resultado de este es lo contrario de los bits de la cantidad asinada ejemplo = 38(00100110), resultado sera= -39(11011001)


//Operador desplazamiento

console.log( 6 >> 3) // 0 , el operador de desplazamiento lo que hace es tomar el numero de la izquierda y dividirlo por 2 las veces del de la derecha 
console.log( 6 << 3) //48, el operador de desplazamiento lo que hace es tomar el numero de la izquierda y multiplicarlo por 2 las veces del de la derecha 