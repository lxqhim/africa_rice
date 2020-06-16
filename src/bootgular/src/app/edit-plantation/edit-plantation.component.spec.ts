import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPlantationComponent } from './edit-plantation.component';

describe('EditPlantationComponent', () => {
  let component: EditPlantationComponent;
  let fixture: ComponentFixture<EditPlantationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPlantationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPlantationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
