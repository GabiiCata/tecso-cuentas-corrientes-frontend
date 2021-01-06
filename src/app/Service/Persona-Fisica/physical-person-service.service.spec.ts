import { TestBed } from '@angular/core/testing';

import { PhysicalPersonServiceService } from './physical-person-service.service';

describe('PhysicalPersonServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PhysicalPersonServiceService = TestBed.get(PhysicalPersonServiceService);
    expect(service).toBeTruthy();
  });
});
