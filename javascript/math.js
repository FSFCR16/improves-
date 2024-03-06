// constantes
console.log(Math.E)// numero exacto de la constante euler
console.log(Math.LN2)//  devuelve el valor aproximado al logaritmo nepriano en base 2
console.log(Math.LOG2E)// devuleve el valor aproximado del logaritmo en base 2 de la constante de euler 
console.log(Math.PI)// devuleve el valor aproximado de la el valor de pi 
console.log(Math.SQRT1_2)// devuleve un aproximado de la raiz cuadrada de um medio
console.log(Math.SQRT2)//devuelve un valor aproximado de la riaz cuadrada de dos 

console.log("--------------------------------------")

//metodos de el odjeto math
let listaNum=[2,3,5,6,1,8,88,77,565,4, 12123]
let variable=0

for(let i= 0; i<listaNum.length;i++){
    
    if (listaNum[i] > variable){
        variable=listaNum[i]
    }

}
let max = 1000
let min = 1
console.log(variable)
console.log(Math.abs(-6))//valor absoluto del valor numerico que este en el parametro
console.log(Math.acos(0.2))// el arcocoseno del valor numerico que este en el parametro
console.log(Math.acosh(6))//el arcocoseno hiperbolico del valor indicadp en el paramtro
console.log(Math.asin(0.2))//el arcoseno del valor indicado en el parametro 
console.log(Math.asinh(2))//el arcoseno hiperbolico del valor indicado en el parametro
console.log(Math.atan(0.89))//el valor de la arcotangete de la cantidad indicada en el parametro 
console.log(Math.atanh(0.4))// el arcotangente hiperbolico de la cantidad indicada en el parametro 
console.log(Math.cbrt(27))//la raiz cubica del valor indicado en el parametro
console.log(Math.ceil(10.9))// redondea el numero hacia arriba 
console.log(Math.cos(6))//devuelve el coseno
console.log(Math.cosh(9))// coseno hiperbolico del valor indicado en el parametro
console.log(Math.exp(3))//devuleve la cosntante de euler elevada al valro indicado
console.log(Math.floor(6.4))//el valor entere redondeado hacia abajo
console.log(Math.log2(4))//devuelve el resultado del logaritmo en base 2
console.log(Math.max(2,3,23,131,432,54,543))// devuelve el mayor de los numeros que esten indicados como paramtros  
console.log(Math.min(2,3,23,131,432,54,543))//devuelve el menor lso numeros que esten indicados como parametros
console.log(Math.pow(2,10))// eleva el primer valor al segundo valor
console.log(Math.trunc(Math.random() * (max - min) + min))// devuleve un numero aleatorio entre el valor min y el valor max
console.log(Math.round(6.9))//redondea el numero
console.log(Math.sign(-21))// devuelve el valor relativo del numero y el valor adsoluto es representado siempre por un 1 excepto por el 0
console.log(Math.sin(6))// devuelve el seno
console.log(Math.sinh(7))//devuelve el seno hiperbolico
console.log(Math.sqrt(25))// devuleve la raiz cuadrada
console.log(Math.tan(8))// devuelve la tangente
console.log(Math.tanh(0.3))//devuleve la tangente hiperbolica
console.log(Math.trunc(23.32))// Elimina la parte decimal no la redondea si no que la elimina



