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

let texto= "hadadsada"

console.log(texto.charAt(3)) //devuelve la letra ubicada en esa posiscion
console.log(texto.charCodeAt(3)) //devuelve el valor unicode de la letra ubicada en esa posicion
console.log(texto.concat(" dsadsadsa","mundo")) // concatena de acuerdo a los parametros dados
console.log(texto.endsWith("da"))// devuelve un booleano indicando si la cadena teermina en esa subcadena
console.log(texto.endsWith("dass"))
console.log(texto.indexOf("d", 0))//devuelve la posicion de la letra que ingreso por parametro 
                                //tiene un segundo parametro el cual nos permite indicar desde posiscion se desea empezar a busar
console.log(texto.lastIndexOf("s"))

