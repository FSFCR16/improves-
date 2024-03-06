let botones=document.querySelectorAll(".btnPost")
let inputTextTarea=document.querySelector(".inputTitle")
let numInput=document.querySelector(".numInput")
let btnToggle=document.querySelectorAll(".btnsCambiar")
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


function countChars(){

    inputTextTarea.addEventListener("keyup", (e) =>{


        let inde=numInput.innerHTML = e.target.value.length +' / 300';

    })

}
countChars()


function cambiarColorBtn(){

    let icon= document.querySelectorAll(".fa-solid")


    for (let i = 0 ; i < btnToggle.length ; i++){


        btnToggle[i].addEventListener("click", function(){


   
            icon[i+1].classList.toggle("btnsCambiarColor")


        })      

    }

}

cambiarColorBtn()
