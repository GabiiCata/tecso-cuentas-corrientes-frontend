import { TestBed } from '@angular/core/testing';

import { LegalPersonServiceService } from './legal-person-service.service';

describe('LegalPersonServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LegalPersonServiceService = TestBed.get(LegalPersonServiceService);
    expect(service).toBeTruthy();
  });
});
