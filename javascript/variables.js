let total=0; //variable definida en un ambito global
function suma(a, b){
    let aux= a +b; //variable definida en ambito local
    total = aux;
}

function resta(a, b){
    let aux =a -b;
    total= aux;
}

//Tipo de dato string
console.log(String(4))
console.log(String(0.7))
console.log(String(true))
console.log(String(String(5)))


console.log(Number(4))
console.log(Number(0.7))
console.log(Number(true))
console.log(Number("Sa21321"))

// Conversion de strings

console.log(parseInt("4"))
console.log(parseInt("21 calles"))
console.log(parseInt("1e3"))
console.log(parseFloat("4.3"))
console.log(parseFloat("4.2"))
console.log(String(new Date())) //Devuelve la fecha actual en formato GMT
console.log('\u{1F440}',"\uD83D\uDC40") //notacion  HTML entity hexadecimla y la de la derecha representada con codificacion C/C++/JAVA

console.log('Nombre: pablo \n\
Apellidos: Fernadez')
console.log( `Nombre: pablo
Apellidos: Fernadez`)

//Formas de concatenar
nombre= "Santiago"
let apelldio="Fajardo"

console.log('Nombre: '+ nombre + '\n\
Apellido: '+ apelldio)

console.log(`Nombre: ${nombre} 
Apellido: ${apelldio}`)

let numeroPrueba= "3123123"
let numeroPrueba1= 120
let str= "ewdwqewqe"
let bolean= true

console.log(numeroPrueba1.toExponential(3))// sirve para mostrar el numero que le mandemos de forma exponencial
console.log(numeroPrueba1.toPrecision(4))// sirve para mostar el numero de forma decimal y lo adapta deacuerdo al tamaño que le pasemos por parametro
console.log(typeof(numeroPrueba1.toString()))//convierte los numeros a strings
console.log(Number(new Date()))//no se
let options= {
    style: "percent",
    minimunFractionDigits: 2
};

console.log(numeroPrueba1.toLocaleString("es-ES", options))
let options2= {
    style: "currency",
    currency: "USD",
    currencySymbol: "name",
    minimunFractionDigits: 2
};

console.log(numeroPrueba1.toLocaleString("es-ES", options2))