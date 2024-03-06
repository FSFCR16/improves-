import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-practica',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './practica.component.html',
  styleUrl: './practica.component.css'
})

//you provide Angular-specific information for a component by adding a @Component decorator on top of the TypeScript class
//the object passed to the @component decorator is called the components metadata
//this includes the selector, template, and other properties described throughout the doc

export class PracticaComponent {
  saludar: string = "hola"
}

//todos los componentes deben tener
//A TypeScript class with behaviors such as handling user input and fetching data from a server
//an html templetes that controls what renders into the Dom 
//a css selector that difnes how the component is used in html



