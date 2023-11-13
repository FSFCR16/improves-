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

    let selecion=document.getElementById("selecionCiudad");
    let botonIntercambio=document.querySelector(".fa-arrow-down-up-across-line")

    /*opciones del marcador*/

    const options = {
      center: latLong,
      zoom: 14
    }

    let iconBase= "https://maps.google.com/mapfiles/kml/shapes/"

    /*creacion del mapa*/

    let map=document.getElementById("map");

    const mapa =new google.maps.Map(map, options)

    /*geocodificacion*/

    let addressInicial= ""

    selecion.addEventListener("click", ()=>{
      addressInicial=selecion.value;
      geocode.geocode({'address': addressInicial}, function(result, status){
        console.log(result)
        if(status == "OK"){
          mapa.setCenter(result[0].geometry.location);
        }else{
          alert("No se pudo ir a la ubicacion, verifique bien")
        }
      })

    })



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

    /*Distancia Tiempo*/
    let valor1=""
    let valor2=""
    function DistanciaTiempo(){
      busqueda.addListener("place_changed", ()=>{
        valor1=inputInfoA.value
      })
      busquedaDestino.addListener("place_changed", ()=>{
        valor2=inputInfoB.value
        calcularDistaciaTiempo()
      })
    }
    DistanciaTiempo()

    function calcularDistaciaTiempo(){
      let service = new google.maps.DistanceMatrixService();
      service.getDistanceMatrix(
      {
        origins: [valor1],
        destinations: [valor2],
        travelMode: 'DRIVING',
        avoidHighways: true,
        avoidTolls: true,
      }, callback);

      botonIntercambio.addEventListener("click", ()=>{
        let destinoCalculadoA=""
        let destinoCalculadoB=""

        destinoCalculadoA+=valor1
        destinoCalculadoB+=valor2

        valor1=destinoCalculadoB
        valor2=destinoCalculadoA

        service.getDistanceMatrix(
          {
            origins: [valor1],
            destinations: [valor2],
            travelMode: 'DRIVING',
            avoidHighways: true,
            avoidTolls: true,
          }, callback);

          callback()
      });

      function callback(response, status) {
        if (status =="OK"){
          let origin=response.originAddresses;
          let destinations = response.destinationAddresses;

          for (let i =0; i < origin.length; i++){
            let results=response.rows[i].elements;

            for (let j =0; j<results.length;j++ ){
              
              let element=results[j]
              let distancia=element.distance.text
              let duracion=element.duration.text
              let from = origin[i];
              let to = destinations[j];

              console.log(distancia)
              console.log(duracion)
              
            }
          }
        }
      }
    }
        
    
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

      /* poner informacion en el mapa marcadorB*/
    })
    busquedaDestino.addListener("place_changed", ()=>{

      let placeDos=busquedaDestino.getPlace();

      marcadorB.setPosition(placeDos.geometry.location)
      if(placeDos.geometry.viewport){
        mapa.fitBounds(placeDos.geometry.viewport)
        mapa.setZoom(13)
        marcadorB.setVisible(true)
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
      let request={
        origin: destinoOrigen,
        destination: destinoFinal, 
        travelMode: 'DRIVING'
  
      }

      botonIntercambio.addEventListener("click", ()=>{
        let destinoCambioA=""
        let destinoCambioB=""

        destinoCambioA+=destinoOrigen
        destinoCambioB+=destinoFinal

        destinoOrigen=destinoCambioB
        destinoFinal=destinoCambioA

        request={
          origin:destinoOrigen,
          destination:destinoFinal,
          travelMode:'DRIVING'
        }

        ruta()
      })

      function ruta(){
        directionsService.route(request, function(result, status){
          if(status=="OK"){
            marcador.setVisible(false)
            marcadorB.setVisible(false)
            directionsRenderer.setMap(mapa);
            directionsRenderer.setDirections(result)
          }else{
            alert("error al trazar la ruta: " + status + " Posible error, no se escribio la ruta a")
            inputInfoB.value=""
            destinoFinal=""
          }
        })

      }
      ruta()
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

  // initMap.nuevoEvento= function(mapa){


  //   inputInfoC.addEventListener("click", ()=>{


  //     const marcadorC= new google.maps.Marker({
  //       map:initMap.mapa,
  //       icon: {
  //         url: 'punto_b.png',
  //         scaledSize: new google.maps.Size(30, 38),
    
  //       }
  //     });

  //     let autocompleteDestinoC= inputInfoC;

  //     const busquedaDestinoC=new google.maps.places.Autocomplete(autocompleteDestinoC);



  // //     // busquedaDestinoC.addListener("place_changed", ()=>{
  // //     //   marcadorC.setVisible(false)

  // //     //   let placeTres=busquedaDestinoC.getPlace();
    
  // //     //   marcadorC.setPosition(placeTres.geometry.location)
  // //     //   if(placeTres.geometry.viewport){
  // //     //     initMap.mapa.fitBounds(placeTres.geometry.viewport)
  // //     //     initMap.mapa.setZoom(13)
  // //     //     marcadorC.setVisible(true)
  // //     //     }
  // //     // })
  

  //   });
  // }
  // initMap.nuevoEvento()

}

function puntos(){

  contenedorParadas.addEventListener("click", oprimirCiudad) 

}
puntos()

// //codigo para la zona de paquetes

// let sobre=document.querySelector(".paquete")
// let sobreImg=document.querySelector(".sobreImg")
// let sobreSvg=document.querySelector(".sobreImg")


// function paquetes(){
//   sobre.addEventListener("click", ()=>{
//     sobre.classList.toggle("paquetejs")
//     sobreSvg.classList.toggle("sobreSvgDos")

//   })
// }
// paquetes()

