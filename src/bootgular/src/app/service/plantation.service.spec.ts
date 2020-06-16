import { TestBed } from '@angular/core/testing';

import { PlantationService } from './plantation.service';

describe('PlantationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlantationService = TestBed.get(PlantationService);
    expect(service).toBeTruthy();
  });
});
