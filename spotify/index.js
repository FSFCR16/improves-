const barra2 = document.querySelector(".barra-2")
const flechaDerecha = document.querySelector(".flecha-derecha")
const flechaIzquierda = document.querySelector(".flecha-izquierda")
const cartaPlst= document.querySelectorAll(".carta-plst")
const botonesPlay= document.querySelectorAll(".run-song")
const contenedor= document.querySelector(".degradado")

const step = 50
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



flechaDerecha.addEventListener("click", (e) => {
    barra2.scrollLeft += step
    flechaIzquierda.removeAttribute("hidden")
    console.log(barra2.scrollLeft)
    console.log(barra2.scrollWidth - barra2.clientWidth)
    console.log(barra2.scrollLeft === (barra2.scrollWidth - barra2.clientWidth))


    if (Math.round(barra2.scrollLeft) === (barra2.scrollWidth - barra2.clientWidth)) {
        console.log("oiawnd")
        flechaDerecha.setAttribute("hidden", true)
    }
})

flechaIzquierda.addEventListener("click", (e) => {
    barra2.scrollLeft -= step
    if (barra2.scrollLeft !== 0) {
        flechaDerecha.removeAttribute("hidden")
    }
    if (barra2.scrollLeft === 0) {
        flechaIzquierda.setAttribute("hidden", true)
        flechaDerecha.removeAttribute("hidden")
    }
})


for (let i = 0; i< cartaPlst.length; i++){
    cartaPlst[i].addEventListener("mouseover", ()=>{
        const idCard=cartaPlst[i].getAttribute("id")

        for (let j = 0; j< botonesPlay.length; j++){
            const idBoton=botonesPlay[j].getAttribute("id")

            if(idCard===idBoton){
                botonesPlay[j].removeAttribute("hidden")
            }
        }
        if (idCard === "plst-1") {
            contenedor.style.setProperty("background-color", "rgb(120,192,200)")
        }else if(idCard === "plst-2") {
            contenedor.style.setProperty("background-color", "rgb(144,8,80)")
        }else if(idCard === "plst-3") {
            contenedor.style.setProperty("background-color", "rgb(32,56,64)")
        }else if(idCard === "plst-4") {
            contenedor.style.setProperty("background-color", "rgb(40,56,80)")
        }else if(idCard === "plst-5") {
            contenedor.style.setProperty("background-color", "rgb(88,56,56)")
        }else if(idCard === "plst-6") {
            contenedor.style.setProperty("background-color", "rgb(208,24,40)")
        }

    })
    cartaPlst[i].addEventListener("mouseout", () => {
        const idCard=cartaPlst[i].getAttribute("id")
        for (let h = 0; h < botonesPlay.length; h++) {
            botonesPlay[h].setAttribute("hidden", "true");
        }
            
        if (idCard === "plst-1") {
            contenedor.style.removeProperty("background-color", "#0000ff")
        }else if(idCard === "plst-2") {
            contenedor.style.removeProperty("background-color", "rgb(144,8,80)")
        }else if(idCard === "plst-3") {
            contenedor.style.removeProperty("background-color", "rgb(32,56,64)")
        }else if(idCard === "plst-4") {
            contenedor.style.removeProperty("background-color", "rgb(40,56,80)")
        }else if(idCard === "plst-5") {
            contenedor.style.removeProperty("background-color", "rgb(88,56,56)")
        }else if(idCard === "plst-6") {
            contenedor.style.removeProperty("background-color", "rgb(208,24,40)")
        }
    });


}

