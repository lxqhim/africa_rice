import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPlantationComponent } from './add-plantation.component';

describe('AddPlantationComponent', () => {
  let component: AddPlantationComponent;
  let fixture: ComponentFixture<AddPlantationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPlantationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPlantationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
