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