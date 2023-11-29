import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

//En angular tenemos el decorador @Injectable el cual permite especificar en que parte de la aplicacion
//el servicio tiene acceso, esto se lo especificamos con la propiedad providedIn: "root" la cual
//le dice que puede ser ejecutado en la aplicacion
//tambien tenemos: 
// 'root': Hace que el servicio sea un singleton global en toda la aplicación.
// 'any': Hace que el servicio se cree un nuevo proveedor para cada módulo que lo importa.
// 'platform': El servicio se provee en el nivel de plataforma (por ejemplo, en el nivel de Angular Universal).
// Puedes proporcionar el nombre de un módulo específico en lugar de las palabras clave anteriores, lo que limitará la disponibilidad del servicio al alcance de ese módulo.

export class CalculatorService {

  add(x: number, y: number) {
    return x + y;
  }
  //add es una funcion  la cual recibe dos parametros los cuales son numeros , X y Y 
  //y esta misma funcion retorna la suma de estos valores
}

//Tenemos tambien la clase la cual esta escrito el codigo desea el cual sera ejecutado cuando el servicio sea inyectado 

//¿ Como usar el servicio en un componente ?

// si queremos usarlo hacemos lo siguiente 

// 1. Importamos el servicio
// 2. Declaramos un campo en la clase donde el servicio sera inyectado, Asigna el campo de clase al resultado de la llamada a la función incorporada inject, que crea el servicio."

