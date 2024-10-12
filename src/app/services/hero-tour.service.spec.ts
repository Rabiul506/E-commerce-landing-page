import { TestBed } from '@angular/core/testing';

import { HeroTourService } from './hero-tour.service';

describe('HeroTourService', () => {
  let service: HeroTourService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeroTourService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
