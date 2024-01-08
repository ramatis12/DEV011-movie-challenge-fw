import { Component, OnInit } from '@angular/core';
import { APImovieService } from '../service/apimovie.service';

@Component({
  selector: 'app-category-filter',
  templateUrl: './category-filter.component.html',
  styleUrls: ['./category-filter.component.css']
})
export class CategoryFilterComponent implements OnInit {
  data: any =  {};

  constructor(private apiService: APImovieService) { }

  ngOnInit(): void {
    this.llenarData()
  }
  llenarData(){
    this.apiService.getData().subscribe(data => {
      this.data = Object.values(data);
      console.log(this.data);
    })
  }
}
