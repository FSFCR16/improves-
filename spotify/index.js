const barra2 = document.querySelector(".barra-2")
const flechaDerecha = document.querySelector(".flecha-derecha")
const flechaIzquierda = document.querySelector(".flecha-izquierda")

const step = 50

function ajustarFlechas(){
    if(barra2.scrollWidth === barra2.clientWidth){
        flechaDerecha.setAttribute("hidden", true)
        flechaIzquierda.setAttribute("hidden", true)
    }else{
        flechaDerecha.removeAttribute("hidden")
    }
}


window.onresize = function(){
    ajustarFlechas()
}
window.onload= function()
{
    ajustarFlechas()
}
flechaDerecha.addEventListener("click", (e) => {
    barra2.scrollLeft += step
    flechaIzquierda.removeAttribute("hidden")
    if(barra2.scrollLeft === (barra2.scrollWidth - barra2.clientWidth )){
        flechaDerecha.setAttribute("hidden", true)
    }

})

flechaIzquierda.addEventListener("click", (e) => {
    barra2.scrollLeft -= step
    if(barra2.scrollLeft !== 0){
        flechaDerecha.removeAttribute("hidden")
    }else{
        flechaIzquierda.setAttribute("hidden", true)
        

    }
})