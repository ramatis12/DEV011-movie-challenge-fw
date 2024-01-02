import { TestBed } from '@angular/core/testing';

import { APImovieService } from './apimovie.service';

describe('APImovieService', () => {
  let service: APImovieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(APImovieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
