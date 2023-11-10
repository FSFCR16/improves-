/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
let inputInfoB=document.querySelector(".direccionInB")
let inputInfoA=document.querySelector(".direccionInA")
let botonCambio=document.querySelector(".contenedorIntercambio")

class Localizacion{

  constructor(callback){
      if(navigator.geolocation){
          navigator.geolocation.getCurrentPosition((position)=>{
              this.latitud =position.coords.latitude
              this.longitud =position.coords.longitude
              callback();
          })
      }else{
          alert("No se pudo realizar esat accion")
      }
  }
}


let ubicacion= new Localizacion()



function initMap(){

  const ubicacion= new Localizacion(()=>{
    const geocode= new google.maps.Geocoder()
    const latLong={lat: ubicacion.latitud, lng: ubicacion.longitud}
    const directionsService = new google.maps.DirectionsService();
    const directionsRenderer = new google.maps.DirectionsRenderer();

    /*geocodificacion*/
    /*opciones del marcador*/

    const options = {
      center: latLong,
      zoom: 14
    }

    let iconBase= "https://maps.google.com/mapfiles/kml/shapes/"

    /*creacion del mapa*/

    let map=document.getElementById("map");

    const mapa =new google.maps.Map(map, options)

    /* creacion del marcador */

    const marcador= new google.maps.Marker({
      map:mapa,
      icon: {
        url: 'punto_a.png',
        scaledSize: new google.maps.Size(30, 38),

      }
    })

    const marcadorB= new google.maps.Marker({
      map:mapa,
      icon: {
        url: 'punto_b.png',
        scaledSize: new google.maps.Size(30, 38),

      }
    })

    /* creacion de la ventana de informacion*/

    let informacion =new google.maps.InfoWindow({
    })
    let informacionB =new google.maps.InfoWindow({
    })

    marcador.addListener("click", ()=>{
      informacion.open(mapa,marcador)
    })

    let autocomplete= inputInfoA
    let autocompleteDestino= inputInfoB

    /* creacion de constantes para autocompletar*/

    const busqueda= new google.maps.places.Autocomplete(autocomplete)
    busqueda.bindTo("bounds", mapa);

    const busquedaDestino= new google.maps.places.Autocomplete(autocompleteDestino)
    busquedaDestino.bindTo("bounds", mapa);

    
    /* poner informacion en el mapa marcadorA*/

    busqueda.addListener("place_changed", ()=>{

      informacion.close()
      informacionB.close()
      marcador.setVisible(false)
      marcadorB.setVisible(false)

      let place= busqueda.getPlace();

      if(!place.geometry.viewport){
        window.alert("error al mostrar el lugar")
      }
      if(place.geometry.viewport){
        mapa.fitBounds(place.geometry.viewport)
      }else{
        mapa.setCenter(place.geometry.location)

      }

      marcador.setPosition(place.geometry.location)
      marcador.setVisible(true)

      let address="";
      if (place.address_components){
        address=[
          (place.address_components[0] && place.address_components[0].long_name || ''),
          (place.address_components[1] && place.address_components[1].long_name || ''),
          (place.address_components[2] && place.address_components[2].long_name || ''),
        ];

        informacion.setContent('<section><strong>'+ place.name +'</strong><br>'+ address+ '</section>')
        informacion.open(mapa, marcador)
      }
      /* poner informacion en el mapa marcadorB*/
    })
    busquedaDestino.addListener("place_changed", ()=>{

      let placeDos=busquedaDestino.getPlace();

      marcadorB.setPosition(placeDos.geometry.location)
      marcadorB.setVisible(true)
      if(placeDos.geometry.viewport){
        mapa.fitBounds(placeDos.geometry.viewport)
        mapa.setZoom(13)
      }
    })

    let destinoOrigen=""
    let destinoFinal=""

    busqueda.addListener('place_changed', ()=>{
      
      const placeRuta=busqueda.getPlace();
       if(!placeRuta.geometry){
        console.log("la direccion no tiene coordenadas validas");
        return;
      }

      destinoOrigen= placeRuta.formatted_address
    })

    busquedaDestino.addListener('place_changed', ()=>{

      const placeRutaDos=busquedaDestino.getPlace();
      if(!placeRutaDos.geometry){
        console.log("la direccion no tiene coordenadas validas");
        return;
      }
      destinoFinal= placeRutaDos.formatted_address
      cacularRuta()
    })

    function cacularRuta(){
      const request={
        origin: destinoOrigen,
        destination: destinoFinal, 
        travelMode: 'DRIVING'
  
      }
  
      directionsService.route(request, function(result, status){
        if(status=="OK"){
          marcador.setVisible(false)
          marcadorB.setVisible(false)
          directionsRenderer.setMap(mapa);
          directionsRenderer.setDirections(result)
        }else{
          console.error("error al trazar la ruta: " + status)
        }
      })

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


  })
  ciudadEscogida.addEventListener("click", (e) => {

    ciudadMomento.innerHTML= ciudadEscogida.value
    let ciudad=ciudadEscogida.value.split(",")
    ciudadMomentoA.innerHTML= ciudad[0]
    ciudadMomentoB.innerHTML= ciudad[0]

    selecionCiudad.classList.remove("verCiudad")


  }) 
  ciudadInputSelect.addEventListener("click", (e)=> {

    ciudadMomentoPuntoA.classList.toggle("verCiudadDos")
    selecionCiudad.classList.remove("verCiudad")
    ciudadMomentoPuntoB.classList.remove("verCiudadDos")



  })
  ciudadMomentoPuntoA.addEventListener("click", (e)=>{

    ciudadMomentoA.innerHTML= ciudadEscogidaA.value
    ciudadMomentoPuntoA.classList.remove("verCiudadDos")

  })
  ciudadInputSelectB.addEventListener("click", (e)=> {

    ciudadMomentoPuntoB.classList.toggle("verCiudadDos")
    selecionCiudad.classList.remove("verCiudad")

  })
  ciudadMomentoPuntoB.addEventListener("click", (e)=>{

    ciudadMomentoB.innerHTML= ciudadEscogidaB.value
    ciudadMomentoPuntoB.classList.remove("verCiudadDos")

  })

}
let oprimiCiudades=oprimirFlecha()

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

  contenedorParadas.style.display="none"

  contenedorPuntos.classList.add("nuevoGridPuntos")
  barraLateral.classList.add("contenedorBarraGrid")

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
  let cerrar=document.querySelector(".cerrarPuntoC")
  let contenedorPadreC=document.querySelector(".contenedorPuntoNuevo")
  let intercambioDos=document.querySelector(".interCambioDos")

  ciudadInputSelectC.addEventListener("click", ()=> {

    ciudadMomentoPuntoC.classList.toggle("verCiudadDos")
    selecionCiudad.classList.remove("verCiudad")

  })
  ciudadMomentoPuntoC.addEventListener("click", (e)=>{

    ciudadMomentoC.innerHTML= ciudadEscogidaC.value
    ciudadMomentoPuntoC.classList.remove("verCiudadDos")

  })
  intercambioDos.addEventListener("click", (e) =>{
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
  flechaRastreo.addEventListener("click", (e)=>{
    ciudadMomentoPuntoC.classList.remove("verCiudadDos")
  })

  ciudadEscogida.addEventListener("click", (e)=>{
    let ciudad=ciudadEscogida.value.split(",")
    ciudadMomentoC.innerHTML=ciudad[0]

  })

  ciudadInputSelect.addEventListener("click", (e)=>{
    ciudadMomentoPuntoC.classList.remove("verCiudadDos")
  })

  ciudadInputSelectB.addEventListener("clcik", (e)=>{
    ciudadMomentoPuntoC.classList.remove("verCiudadDos")
  })
  cerrar.addEventListener("click", ()=>{
    contenedorPuntos.classList.remove("nuevoGridPuntos")
    barraLateral.classList.remove("contenedorBarraGrid")
    contenedorPadreC.remove()
    intercambioDos.remove()
    articleNuevo.remove()
    contenedorParadas.style.display="grid"

  })
}

function puntos(){

  contenedorParadas.addEventListener("click", oprimirCiudad) 

}
puntos()

//codigo para la zona de paquetes

let sobre=document.querySelector(".paquete")
let sobreImg=document.querySelector(".sobreImg")


function paquetes(){
  sobre.addEventListener("click", ()=>{
    sobre.classList.toggle("paquetejs")

  })
}
paquetes()

