import { Component, EventEmitter, OnInit } from '@angular/core';
import { APImovieService } from '../service/apimovie.service';
import { FilterMovieService } from '../service/filter-movie.service';

@Component({
  selector: 'app-home-mc',
  templateUrl: './home-mc.component.html',
  styleUrls: ['./home-mc.component.css']
})
export class HomeMCComponent implements OnInit {
data: any;
totalResults: number = 0;
// public page!: number;
public criteria: string = '';
public pageSize: number = 4;
public page: number = 1;
public selectedGenre: number = 18;

  constructor(private apiService: APImovieService) { }

  ngOnInit(): void {
    this.llenarData(this.page, this.selectedGenre);
  }
  llenarData(page:number, selectedGenre:number){
    this.apiService.getData(page, selectedGenre).subscribe((data) => {
      this.data = data.results;
      this.totalResults = 1000;
      console.log(data);
    })
  }
  onPageChange(event: number): void {
    // this.pageChange.emit(event)
    this.page = event;
       this.llenarData(this.page, this.selectedGenre)
  }
  onGenreChange(genreId: number) {
    this.selectedGenre = genreId;
    this.page = 1; // Reiniciar la página al cambiar el género
    this.llenarData(this.page, this.selectedGenre)
  }

}
