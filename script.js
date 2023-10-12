let botones=document.querySelectorAll(".btnPost")
let inputTextTarea=document.querySelector(".inputTitle")
let numInput=document.querySelector(".numInput")

function activar() {
    let updateButton = document.getElementById("updateDetails");
    let cancelButton = document.getElementById("cancel");
    let favDialog = document.querySelector(".ventanaPost");

    // Update button opens a modal dialog
    updateButton.addEventListener("click", function () {
      favDialog.showModal();
    });

}

activar()

/*Funciones botones*/
console.log(botones)
function hover(){

    for (let i=0; i<botones.length; i++){

        botones[i].addEventListener("click", function(e){

            let va= e.target
            resetbtn()
            va.classList.toggle("btnPostDos")
        })
    }
}

hover()

function resetbtn() {

    for (let i=0 ; i<botones.length;i++){

    botones[i].classList.remove("btnPostDos")

    }
}

/*funciones input TextTarea*/


function contadorLetras(){
    let contador=0

    inputTextTarea.addEventListener("keydown", function(e){

        if(contador!=300){
            numInput.innerHTML=numInput.innerHTML.replace(contador,contador+1)
            contador=contador+1
        }
    })
}
contadorLetras()

