import { TestBed } from '@angular/core/testing';

import { TruckerDataService } from './trucker-data.service';

describe('TruckerDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TruckerDataService = TestBed.get(TruckerDataService);
    expect(service).toBeTruthy();
  });
});
