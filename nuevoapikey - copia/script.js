/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
function initMap() {
  const bounds = new google.maps.LatLngBounds();
  const markersArray = [];
  const map = new google.maps.Map(document.getElementById("map"),{
    zoom: 10,
  });
  // initialize services
  const geocoder = new google.maps.Geocoder();
  const service = new google.maps.DistanceMatrixService();
  // build request
  const origin1 = { lat: 4.609, lng: -74.081 };
  const destinationB = { lat: 4.85876, lng: -74.05866 };
  const request = {
    origins: [origin1],
    destinations: [destinationB],
    travelMode: google.maps.TravelMode.DRIVING,
    unitSystem: google.maps.UnitSystem.METRIC,
    avoidHighways: false,
    avoidTolls: false,
  };

  // put request on page
  document.getElementById("request").innerText = JSON.stringify(
    request,
    null,
    2
  );
  // get distance matrix response
  service.getDistanceMatrix(request).then((response) => {
    // put response
    document.getElementById("response").innerText = JSON.stringify(
      response.rows[0].elements[0].duration.text,
      null,
      2
    );

    // show on map
    const originList = response.originAddresses;
    const destinationList = response.destinationAddresses;

    deleteMarkers(markersArray);

    const showGeocodedAddressOnMap = (asDestination) => {
      const handler = ({ results }) => {
        console.log(results)
        map.fitBounds(bounds.extend(results[0].geometry.location));
        markersArray.push(
          new google.maps.Marker({
            map,
            position: results[0].geometry.location,
            label: asDestination ? "D" : "O",
          })
        );
      };
      return handler;
    };

    for (let i = 0; i < originList.length; i++) {
      const results = response.rows[i].elements;
  

      geocoder
        .geocode({ address: originList[i] })
        .then(showGeocodedAddressOnMap(false));
        

      for (let j = 0; j < results.length; j++) {
        geocoder
          .geocode({ address: destinationList[j] })
          .then(showGeocodedAddressOnMap(true));
      }
    }
  });
}

function deleteMarkers(markersArray) {
  for (let i = 0; i < markersArray.length; i++) {
    markersArray[i].setMap(null);
  }

  markersArray = [];
}

/*---------------------------------------------------------*/

let flechaRastreo=document.querySelector(".flechaRastreo")
let selecionCiudad=document.querySelector(".seleccCiudad")
let ciudadEscogida=document.querySelector("#selecionCiudad")
let ciudadMomento=document.querySelector(".ciudadMomento")
let ciudadInputSelect=document.querySelector(".ciudadInputSelect")
/*----------------------------------------------------------*/
let ciudadEscogidaA=document.querySelector("#seleccionCiudadA")
let ciudadMomentoPuntoA=document.querySelector(".seleccCiudadPuntoA")
let ciudadMomentoA=document.querySelector(".ciudadMomentoA")
/*----------------------------------------------------------*/
let ciudadInputSelectB=document.querySelector(".ciudadInputSelectB")
let ciudadEscogidaB=document.querySelector("#seleccionCiudadB")
let ciudadMomentoPuntoB=document.querySelector(".seleccCiudadPuntoB")
let ciudadMomentoB=document.querySelector(".ciudadMomentoB")
/*----------------------------------------------------------*/

function oprimirFlecha(){

  flechaRastreo.addEventListener("click", (e)=> {

    selecionCiudad.classList.toggle("verCiudad")
    ciudadMomentoPuntoA.classList.remove("verCiudadDos")
    ciudadMomentoPuntoB.classList.remove("verCiudadDos")
    oprimirCiudad()[0].classList.remove("verCiudadDos")

  })
  ciudadEscogida.addEventListener("click", (e) => {

    ciudadMomento.innerHTML= ciudadEscogida.value
    let ciudad=ciudadEscogida.value.split(",")
    ciudadMomentoA.innerHTML= ciudad[0]
    ciudadMomentoB.innerHTML= ciudad[0]
    oprimirCiudad()[1].innerHTML=ciudad[0]

    selecionCiudad.classList.remove("verCiudad")


  }) 
  ciudadInputSelect.addEventListener("click", (e)=> {

    ciudadMomentoPuntoA.classList.toggle("verCiudadDos")
    selecionCiudad.classList.remove("verCiudad")
    ciudadMomentoPuntoB.classList.remove("verCiudadDos")
    oprimirCiudad()[0].classList.remove("verCiudadDos")


  })
  ciudadMomentoPuntoA.addEventListener("click", (e)=>{

    ciudadMomentoA.innerHTML= ciudadEscogidaA.value
    ciudadMomentoPuntoA.classList.remove("verCiudadDos")

  })
  ciudadInputSelectB.addEventListener("click", (e)=> {

    ciudadMomentoPuntoB.classList.toggle("verCiudadDos")
    selecionCiudad.classList.remove("verCiudad")
    oprimirCiudad()[0].classList.remove("verCiudadDos")


  })
  ciudadMomentoPuntoB.addEventListener("click", (e)=>{

    ciudadMomentoB.innerHTML= ciudadEscogidaB.value
    ciudadMomentoPuntoB.classList.remove("verCiudadDos")

  })

}
let oprimiCiudades=oprimirFlecha()

let inputInfoB=document.querySelector(".direccionInB")
let inputInfoA=document.querySelector(".direccionInA")
let botonCambio=document.querySelector(".contenedorIntercambio")


function cambiarInfo(){
  botonCambio.addEventListener("click", (e) =>{
    let valueUno=""
    let valueDos=""

    valueUno+=inputInfoA.value
    valueDos+=inputInfoB.value

    inputInfoA.value=valueDos
    inputInfoB.value=valueUno

    /*Cambio de cuidad*/

    let ciudadUno=""
    let ciudadDos=""

    ciudadUno+=ciudadMomentoA.innerHTML
    ciudadDos+=ciudadMomentoB.innerHTML

    ciudadMomentoA.innerHTML=ciudadDos
    ciudadMomentoB.innerHTML=ciudadUno
    
  })
}
cambiarInfo()


let contenedorParadas=document.querySelector(".conteAgregar")
let contenedorPrincipalPar=document.querySelector(".contenedorPuntoB")
let articleNuevo=document.createElement("article")
let articleNuevopuntoC=document.createElement("article")
let barraLateral=document.querySelector(".barralateral")
let contenedorPuntos=document.querySelector(".contenedorPuntos")

function oprimirCiudad(){

  contenedorParadas.style.display= "none"

  /*adicion de clases*/
  contenedorPuntos.classList.add("adicionGridPuntos")
  barraLateral.classList.add("adicionGridPrincipal")

  /*contenedor intercambio*/

  contenedorPrincipalPar.after(articleNuevo)
  articleNuevo.innerHTML=`<article class="contenedorIntercambio interCambioDos">
  <i class="fa-solid fa-arrow-down-up-across-line" style="color: #780803;"></i>
</article>`



  /*contenedor puntoC*/
  articleNuevo.after(articleNuevopuntoC)
  articleNuevopuntoC.classList.add("contenedorPuntoA")
  articleNuevopuntoC.classList.add("contenedorPuntoNuevo")
  articleNuevopuntoC.innerHTML=`<section class="contedorTextA">
                                  <p class="textoA">Punto C</P>
                                </section>
                                <section class="contedorDireccionYNum">
                                  <article class="dirrecionRastreo">
                                    <section class="iconoUbicacion">
                                      <i class="fa-solid fa-location-dot" style="color: #030303;  opacity: 0.3"></i>
                                    </section>
                                    <section  class="inputDireccion">
                                      <input type="text" class="direccionIn direccionInC" style="z-index:0;" placeholder="Escribe aqui tu direccion. Ej: Calle 98 # 3-6">
                                    </section>
                                    <section  class="ciudadInputSelect ciudadInputSelectC">
                                      <p class="ciudadMomento ciudadMomentoC" style="font-family: Regular;">Chia</p>
                                      <i class="fa-solid fa-angle-down arrowCiudad" style="color: #ffffff;"></i>
                                    </section>
                                    <section class="cerrarPuntoC">
                                      <i class="fa-regular fa-circle-xmark" style="color: #000000;"></i>
                                    </section>
                                    <article class="seleccCiudad seleccCiudadPuntoC ">
                                      <select name="SeleccionCiudades" id="seleccionCiudadC" size="6">
                                        <option value="Boogota" class="options">Boogota</option>
                                        <option value="Medellin" class="options">Medellin</option>
                                        <option value="Barranquilla" class="options">Barranquilla</option>
                                        <option value="Cali" class="options">Cali</option>
                                        <option value="Cartagena" class="options">Cartagena</option>
                                        <option value="Ibague" class="options">Ibague</option>
                                        <option value="Chia" class="options">Chia</option>
                                        <option value="Funza" class="options">Funza</option>
                                         <option value="Mosquera" class="options">Mosquera</option>
                                      </select>
                                    </article>
                                  </article>
                                </section>`
  /*--------------------------------------------------------------------------*/
  let ciudadInputSelectC=document.querySelector(".ciudadInputSelectC")
  let ciudadEscogidaC=document.querySelector("#seleccionCiudadC")
  let ciudadMomentoPuntoC=document.querySelector(".seleccCiudadPuntoC")
  let ciudadMomentoC=document.querySelector(".ciudadMomentoC")
  let inputInfoC=document.querySelector(".direccionInC")
  let botonDos= document.querySelector(".interCambioDos")
  let cerrar=document.querySelector(".cerrarPuntoC")
  

  ciudadInputSelectC.addEventListener("click", ()=> {

    ciudadMomentoPuntoC.classList.toggle("verCiudadDos")
    selecionCiudad.classList.remove("verCiudad")

  })
  ciudadMomentoPuntoC.addEventListener("click", (e)=>{

    ciudadMomentoC.innerHTML= ciudadEscogidaC.value
    ciudadMomentoPuntoC.classList.remove("verCiudadDos")

  })
  botonDos.addEventListener("click", (e) =>{
    let valueDos=""
    let valueTres=""

    valueDos+=inputInfoB.value
    valueTres+=inputInfoC.value
    console.log(valueDos)
    console.log(valueTres)

    inputInfoB.value=valueTres
    inputInfoC.value=valueDos

    /*Cambio de cuidad*/

    let ciudadUno=""
    let ciudadDos=""

    ciudadUno+=ciudadMomentoB.innerHTML
    ciudadDos+=ciudadMomentoC.innerHTML

    ciudadMomentoB.innerHTML=ciudadDos
    ciudadMomentoC.innerHTML=ciudadUno

  })
  

  return [ciudadMomentoPuntoC, ciudadMomentoC]

}

function puntos(){

  contenedorParadas.addEventListener("click", oprimirCiudad) 

}
puntos()

