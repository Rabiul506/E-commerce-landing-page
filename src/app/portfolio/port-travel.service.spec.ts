import { TestBed } from '@angular/core/testing';

import { PortTravelService } from './port-travel.service';

describe('PortTravelService', () => {
  let service: PortTravelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PortTravelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
