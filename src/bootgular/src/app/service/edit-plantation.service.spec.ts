import { TestBed } from '@angular/core/testing';

import { EditPlantationService } from './edit-plantation.service';

describe('EditPlantationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EditPlantationService = TestBed.get(EditPlantationService);
    expect(service).toBeTruthy();
  });
});
