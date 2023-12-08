const barra2 = document.querySelector(".barra-2")
const flechaDerecha = document.querySelector(".flecha-derecha")
const flechaIzquierda = document.querySelector(".flecha-izquierda")

const step = 60
//ScrollWidth son la cantidad de pixeles que tiene un contenedor internamente
//ClientWidth sirve para saber la cantidad de pixeles visibles en un contendor
//scrollLeft la cantidad de pixeles que se movio hacia cierto lado

function ajustarFlechas() {
    if (barra2.scrollWidth === barra2.clientWidth) {
        flechaDerecha.setAttribute("hidden", true)
        flechaIzquierda.setAttribute("hidden", true)
    } else {
        flechaDerecha.removeAttribute("hidden")
    }
}
window.onresize = function () {
    ajustarFlechas()
}
window.onload = function () {
    ajustarFlechas()
}

flechaDerecha.addEventListener("click", () => {
    // let can = barra2.scrollLeft
    barra2.scrollLeft += step
    // let scrollLeftt = barra2.scrollLeft

    flechaIzquierda.removeAttribute("hidden")
    if (barra2.scrollLeft === (barra2.scrollWidth - barra2.clientWidth)) {
        flechaDerecha.setAttribute("hidden", true)
    }
})

flechaIzquierda.addEventListener("click", () => {
    barra2.scrollLeft -= step
    if (barra2.scrollLeft !== 0) {
        flechaDerecha.removeAttribute("hidden")
    }
    if (barra2.scrollLeft === 0) {
        flechaIzquierda.setAttribute("hidden", true)
        flechaDerecha.removeAttribute("hidden")

    }
})


/*Opacar los laterales del contendor de las flechas*/