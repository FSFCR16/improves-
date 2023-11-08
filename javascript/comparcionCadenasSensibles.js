let provinces=["Ávala", "Malaga", "Madrid", "Ávila", "Alicante"]
console.log(provinces.sort(Intl.Collator().compare).join(", ")) //Ordeno las palabras del array por letra

// Al igual que todo lo que hemso visto esto lo puedes sin ningun parametro pero si quieres hacer un comportamiento
// distinto lo que tienes que hcaer es pasarle parametros, Collator recibe 2, el primero que es el codigo de la region como ya hemos visto
// y el segundo que es un json con especificaciones

//Propiedad usage
// Esta propieda indica para que vamos a utilizar la comparcion, recibe dos posibles valores 
// sort-- para decir que vamos a ordenar
// search-- para indicar que vamos a buscar coincidencias

let names=["Ávala", "Malaga", "Madrid", "Ávila", "Alicante"]

let opcionesNombres={
    usage: "sort"
}
console.log(names.sort(Intl.Collator("es-ES", opcionesNombres).compare).join(", "))

//Propiedad sensivity