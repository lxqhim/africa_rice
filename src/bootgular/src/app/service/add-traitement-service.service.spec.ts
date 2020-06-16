import { TestBed } from '@angular/core/testing';

import { AddTraitementServiceService } from './add-traitement-service.service';

describe('AddTraitementServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddTraitementServiceService = TestBed.get(AddTraitementServiceService);
    expect(service).toBeTruthy();
  });
});
