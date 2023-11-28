import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  taskTitle: string ='Read cup of coffe' 
  //esta es la forma de hacer un contenido dinamico en angular, de forma automatica angular interpola la informacion
  //que esta en la variable y la lleva al html pasando de un html template statico a dinamico

  formsIsInvalid: boolean = true;
  //En angular cuando quieres hacer una propiedad dinamica usamos los [] 
  //para que angular lo interprete como una declaracion de javascript en cambio de un string
  //de esta forma podriamos decir que cuando no usamos [] angular lo interpreta como string si los usamos como una variable

  testId:string= "main.cta"
  //Para añadir un atributo personalizado en angular encerramos el atributo con []
  //y para que sea dinamico le pasamos el nombre de la variable que queramos, pero para que atributo personalizado funcione 
  //lo que haremos es antes del atributo añadir el prefijo attr. si es personalizado 
  //ejemplo [attr.data-test-id]="testId", de esta forma nuestro elemento tiene un atributo personalizado

  isAdmin:boolean=false


  ingredientList = [
    {name: 'nooldles', quantity: 1},
    {name: 'miso broth', quantity: 1},
    {name: 'egg', quantity:2}
  ];

  //En angular no sole tenemos el if tmabien tenemos el for el cual nos sirve para renderizar varias cosas
  //con una sencilla linea de codigo que veremos en el html

  //HANDLE
  //si quisieramos crear un boton que corra la funcion transformtext cuando hagamos click en el, debemos hacer lo siguinente

  annnouncement="Hello angain Angula!";

  transformtext(){
    this.annnouncement =this.annnouncement.toUpperCase();
  }

  //Despues de crear esta funcion lo que haremos es añadir esto al bton con dos pasos
  //1. añadir un atributo con el nombre del evento adentro de unos parentesis
  //specify what javaScript statement tu quieres correr cuando oprimas el boton ejemplo
  //<button (click)="transfromtext()">clcik me </button>

  //si queremos usar un evento en especifico podriamos hacer los siguiente
  // Inside your component class
  createUser(event: MouseEvent) {
  // Access properties of the event object
    console.log(event.clientX);
    console.log(event.clientY);
  // Perform actions based on the event
  }
}


