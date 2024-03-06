//Estructura de un if, se compone de una expresion a evaluar y despendiendo de la evaluacion hara una cosa o hara otra

if (25>7){
    console.log("25 si es mayor que 7")
}

//tambien tenemos un else, que sirva para decir que si la condicion del if no se cumplio entonces haga esto otro 

if (5>7){
    console.log("5 si es mayor que 7")
}

else{
    console.log("5 no es mayor que 7")
}

//estructura switch

marcaCarro= (marca)=>{
    switch(marca){

        case "Ford":
            console.log("El carro es de marca Ford");
            break;

        case "BMW":
            console.log("El carro es de marca BMW");
            break;

        default: 
            console.log("El carro es otra marca")
    }
}
marcaCarroEstructuraIf= (marcaDos)=>{

    if(marcaDos === "Ford"){
        console.log("El carro es de marca Ford")
    }else if(marcaDos === "BMW"){
        console.log("El carro es de marca BMW")
    }else{
        console.log("El carro no es de ninguna marca")
    }
}

marcaCarro("Ford")
marcaCarroEstructuraIf("BMW")


//formas de gestion de errores por presencia 
let arrayEjemplo = {
    nombre: "santiago",
    apellidos: "fajardo",
    edad: 23,
    hola: "saludar"
}
console.log(arrayEjemplo.hasOwnProperty("hola")) //este metodo nos ayuda a saber si hay una propiedad en un json
//tambien tenemos el "in"que nos ayuda a saber si un objeto tiene una  propiedad o metodo en su definicion

//tambien tenemos el try... catch este nos sirve para evitar errores y que el codigo no se detenga si no que sea capturado y 
//el codigo pueda continuar con su ejecucion normal

try{
    allert("hola mundo");
}catch(err){
    console.log(err.message);
}
console.log("ok") //como se puede observar en la ejecucion del codigo el codigo no se inturrumpio si no que agarro el error y lo imprimio por consola
//despues continuo con el flujo de ejucion normal 

//finally

try{
    allert("hola mundo");
}catch(err){
    console.log(err.message);
}finally{
    console.log("ok") 
}
//la estrutuctura finally se ejecuta si o si, se jecute o no se ejecute el error esta se ejecuta, pero no se utiliza mucho por su falat de compatibilidad en navegadores

//Sentencia throw

//throw "error" //esta sentencia nos sirve para lanzar un error en caso que sea necesario 

function excepcionPersonalizada(mensaje){

    let error = new Error(mensaje);

    error.code="Error 4S";
    return error

}

