let texto= "hadadsada "
let texto2="ENSNADNJUASD"

console.log(texto.charAt(3)) //devuelve la letra ubicada en esa posiscion
console.log(texto.charCodeAt(3)) //devuelve el valor unicode de la letra ubicada en esa posicion
console.log(texto.concat(" dsadsadsa","mundo")) // concatena de acuerdo a los parametros dados
console.log(texto.endsWith("da"))// devuelve un booleano indicando si la cadena teermina en esa subcadena
console.log(texto.endsWith("dass"))
console.log(texto.indexOf("d", 0))//devuelve la posicion de la letra que ingreso por parametro 
                                //tiene un segundo parametro el cual nos permite indicar desde posiscion se desea empezar a busar
console.log(texto.lastIndexOf("s"))
console.log(texto.repeat(3))//Repite la cantidad de veces que le mandemos por parametro
let nombre = texto.replace("dadsada", "zmin dsadasd dsadas")// remplaza una cadena de caracteres por lo que se le inque en el 2 parametro tambien puede cambiar expresiones regulares
console.log(nombre.replace("a","0"))
console.log(nombre.search("min"))//Este metodo se utiliza para expreiones regulares mas que todo
console.log(nombre.slice(3,14)) //Este metodo trae los valores que esten entre el rango que se la como parametro
console.log(nombre.split(" ")) // separa el string y lo convierte en una lista de acuerdo con el valor que le indiquemos por parametro
console.log(nombre.startsWith("h"))// devuleve un booleano afirmando o no si el str comienza con el parametro indicado
console.log(nombre.substr(3,6))// Devuelve el string desde la posicion dada en el primer parametro y con la longitud dada en el segundo parametro
console.log(nombre.substring(3,14))// Es muy parecido al slice
console.log(texto2.toLowerCase())// Transforma todo a minusculas
console.log(texto.toUpperCase())// Transforma todo a mayusculas
let sinExtremos=nombre.trim()// Quita los espcacios que puedan haber en los extremos
console.log(sinExtremos.split(" "))

console.log("Archivo variables")