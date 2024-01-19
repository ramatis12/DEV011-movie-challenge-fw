import { TestBed } from '@angular/core/testing';

import { FilterMovieService } from './filter-movie.service';

describe('FilterMovieService', () => {
  let service: FilterMovieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilterMovieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
