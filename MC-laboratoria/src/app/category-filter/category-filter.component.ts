import { Component } from '@angular/core';
import { FilterMovieService } from '../service/filter-movie.service';

@Component({
  selector: 'app-category-filter',
  templateUrl: './category-filter.component.html',
  styleUrls: ['./category-filter.component.css']
})
export class CategoryFilterComponent {
  constructor(private sharedService: FilterMovieService) { }


  onCriteriaSelect(selectedCriteria: string): void {
    this.sharedService.setSelectedCriteria(selectedCriteria);
     }

}
