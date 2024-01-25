import { Component } from '@angular/core';
import { FilterMovieService } from '../service/filter-movie.service';
import { APImovieService } from '../service/apimovie.service';

@Component({
  selector: 'app-category-filter',
  templateUrl: './category-filter.component.html',
  styleUrls: ['./category-filter.component.css']
})
export class CategoryFilterComponent {
 
  constructor(private apiService: APImovieService) { }

 
  selectedGenero: number= 0;

  onGeneroChange() {
    // Envia el valor seleccionado al servicio
    this.apiService.setGeneroSeleccionado(this.selectedGenero);
    //console.log('Genero seleccionado:', this.selectedGenero);
  }
  // onGeneroChange() {
  //   // Muestra el valor seleccionado en la consola
  //   console.log(this.selectedGenero);
  // }

}
