function spinWords(string){
    let listaa=[]
    let lista=string.split(" ")

    for (let i = 0; i< lista.length; i++){

        if (tamaño=lista[i].length > 3){

            let resultado=lista[i].split("").reverse().join("")
            listaa.push(resultado)

        }else{
            listaa.push(lista[i])
        }
    }
    
    let respuesta=listaa.join(" ")
    console.log(respuesta) 
}
spinWords("sihT is a tset")

