import { TestBed } from '@angular/core/testing';

import { TraitementService } from './traitement.service';

describe('TraitementService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TraitementService = TestBed.get(TraitementService);
    expect(service).toBeTruthy();
  });
});
