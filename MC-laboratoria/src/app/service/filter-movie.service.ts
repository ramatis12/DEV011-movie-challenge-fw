import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilterMovieService {

  private selectedCriteriaSource = new BehaviorSubject<string>('');
  selectedCriteria$ = this.selectedCriteriaSource.asObservable();

  setSelectedCriteria(criteria: string): void {
    this.selectedCriteriaSource.next(criteria);
  }
}
