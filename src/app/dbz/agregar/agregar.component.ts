import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.services';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent {

  @Input()
  nuevo : Personaje = {
    nombre: '',
    poder: 0
  }

 // @Output() onNuevoPersonaje : EventEmitter<Personaje> = new EventEmitter();
  constructor(private dbzService : DbzService ){
    
  }

  agregar() {
    if (this.nuevo.nombre.trim().length == 0) { return; }
    //this.onNuevoPersonaje.emit(this.nuevo);
    this.dbzService.agregarNuevoPersonaje(this.nuevo);
    this.nuevo = {
      nombre: '',
      poder: 0
    }}
}
