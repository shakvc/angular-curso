import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {

  nuevo : Personaje = {
    nombre: '',
    poder: 0
  }

  constructor(){
  }

}

  //Esto lo podemos colocar en el input para indicar el nombre
  // y el evento que se disparara cada vez q se teclee algo en el input
  //[value]="nuevo.nombre" //llaves cuadradas es para establecer el valor
  //(input)="cambiarNombre( $event )" // el evento se encierra en parentesis para indicar que esta escuchando dicho evento

  //TwoWayDataBinding
  //Por otro lado Angular maneja un ngModel:
    //[(ngModel)] 
    //llaves cuadradas es para establecer el valor
    //parentesis indica que quiero escuchar y emitir el evento y el valor del evento quiero que caiga sobre nuevo.nombre
