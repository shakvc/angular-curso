import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent  {

  heroes: string[] = ['Ironman','Spiderman', 'Hulk', 'Thor', 'Capitan America'];
  heroeBorradoG: string = "";

  borrarHeroe(){
    this.heroeBorradoG = this.heroes.pop() || '';  
  }

}
