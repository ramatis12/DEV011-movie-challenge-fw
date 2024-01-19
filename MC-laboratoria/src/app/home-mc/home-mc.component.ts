import { Component, OnInit } from '@angular/core';
import { APImovieService } from '../service/apimovie.service';
import { FilterMovieService } from '../service/filter-movie.service';

@Component({
  selector: 'app-home-mc',
  templateUrl: './home-mc.component.html',
  styleUrls: ['./home-mc.component.css']
})
export class HomeMCComponent implements OnInit {
data: any[] =  [];
totalResults: number = 0;
public page!: number;
public criteria: string = '';

  constructor(
    private apiService: APImovieService,
    private sharedService: FilterMovieService
    ) { }

  ngOnInit(): void {
    this.llenarData()
    this.sharedService.selectedCriteria$.subscribe(criteria => {
      this.criteria = criteria;
      this.llenarData();
    });
  }
  llenarData(){
    this.apiService.getData(this.criteria).subscribe((data: any[]) => {
      this.data = data;
      this.totalResults = 10000;
      console.log(this.data);
    })
  }

}
