//Estructura de un for

let chars = new Array();

for (let i = 0; i <100000 ; i++){
    chars[i]= {code: i, char:String.fromCharCode(i)};

}

//otro use del for con dos variables declaradas

for(let i = 0,  j = 10; i <= j ; i++, j--){
    console.log(i,j)
}

//Estrutura de un for in


arr=[1,2,3,4,5,6,7,3]
for (let i in arr){
    console.log("i: ", i)
}
//auque esta fprma de rocorrer objetos puede ser comodo, no es muy recomendable usarla ya que el rendimiento puede bajar exponencialmente

//ejemplo de diferencia a la hora de ejecucion
console.time();

let arrFor= new Array();
for (let i = 0; i < chars.length; i++){
    arrFor[i]=chars[i];
}
console.timeEnd()

console.time();

let arrForIn= new Array();
for (let i in chars){
    
    arrForIn[i]=chars[i]
}
console.timeEnd()

//Estructura for of

arr=[1,2,3,"hola",5,6,7,3]
for (let i of arr){
    console.log("i: ", i)
}
//a diferencia del for in que lo que hace es dar el de i a medida que aumenta por la cantidad de elementos, el for of imprime el elemnto en cuestion
// como si la variable se convirtiera en el elemento, tampoco es muy efectivo

console.time();

let arrForOf= new Array();

for (let [key , value] of chars.entries()){
    
    arrForOf[key]=value
}
console.timeEnd()


//los de arriba eran variaciones del bucle for
//ahora veamos la estructura del bucle forEach

console.time();

let arrForEach= new Array();

chars.forEach(function(v,i){
    arrForEach[i]=v
})
console.timeEnd()

//El foreach resive una funcion callback que quiere decir ? desde mi punto de vista como el nombre lo dice hace un llamado
//este llamado contiene la informacion del elemento, del indice y el tercero "arr" que es un array, este valor array sirve para manipular el array

let aEjem= ["a", "b", "c", "d"]

aEjem.forEach( (valor, indice)=>{
    console.log(`Indice: ${indice}, Valor: ${valor}`)
})


aEjem.forEach( (valor, indice, arrayTres)=>{

    arrayTres[indice]=valor+"ia"
    console.log(arrayTres)
})

// El metodo forEach no admite mas parametros pero existe una configuracion el objeto que actuara como this: ejemplo

function calculadora(){
    this.suma = 0;
    this.producto=1;
}

calculadora.prototype.sumar=function(array){
    array.forEach( (valor)=>{
        this.suma += valor
    }, this)
};

calculadora.prototype.multiplicar=function(array){
    array.forEach((valor)=>{
        this.producto *= valor
    }, this)
}

let arrrr=[1,3,4,53,2,3]
let s= new calculadora
s.sumar(arrrr)
s.multiplicar(arrrr)

console.log(s.suma, s.producto)

//Estrutura Do While

//este se caracteriza porque se ejecuta un numero impredecible de veces hasta que la condicion del do while sea cumplida, a diferencia del
// for este tiene un rango de iteracion de 1 a N o sea que por lo menos se ejecutara su contenido una vez y solo se conforma por una condicion 
//la informacion sumistrada a la condicion puede ser tan compleja como desee pero toca tener cuidado debia que puede ocasionar un bucle infinito


let entero= 0

do{
    entero+=1;

    console.log(`enetero: ${entero}`);

}while(entero==10); //como se puede apreciar la condicion no se cumple pero se realiza la iteracion al menos una vez si cambiamos "==" por "<" se ejecuta 10 veces

//Estrutura While

//En esta estrutura es igual que el do while en terminos de puede itererar un numero impredecible de veces, pero a direfencia del do while
//aqui la condicion se evalua primero asi que su numero de iteraciones va desde 0 hasta N
//mismas precauciones del do while 

let entroDos = 0

while(entroDos<10){
    entroDos+=1;

    console.log(`entero: ${entroDos}`); //como se aprecia aca la condicion se evalua primero y se ejecuta la cantidad de veces establecida por la condicion, si se cambia "<" por "==" no se ejecuta 
}

//Sentencia Break
//sirve para romper el bucle, no es considerado una buena practica ya que interrumpe la secuencialidad del codigo, pero ahorra mucho tiempo de ejecucion

for (let i =0 ; i< 10; i++){
    if(i==5)break; // si i es igual a 5 rompalo
    console.log("x: ", i) // como se puede apreciar el bucle deberia ejecutarse 10 veces ya que esa es la condicion pero debido al break, solo se ejecuta 5

}



//Sentencia Continue
//Esta sentencia sirve para omitir ciertas cosas pero se considera un mala practica debido a que si tienes que omitir ciertas cosas es porque esta mal construido el codigo
//pero a veces no hay remedio asi que se usa

for (let i =0 ; i< 10; i++){
    if(i==5)continue; // si i es igual a 5 omitalo
    console.log("x: ", i) 
}