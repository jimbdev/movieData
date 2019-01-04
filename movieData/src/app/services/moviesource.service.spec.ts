import { TestBed } from '@angular/core/testing';

import { MoviesourceService } from './moviesource.service';

describe('MoviesourceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MoviesourceService = TestBed.get(MoviesourceService);
    expect(service).toBeTruthy();
  });
});
