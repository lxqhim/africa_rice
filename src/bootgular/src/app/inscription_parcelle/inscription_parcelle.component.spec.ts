import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InscriptionParcelleComponent } from './inscription_parcelle.component';

describe('InscriptionParcelleComponent', () => {
  let component: InscriptionParcelleComponent;
  let fixture: ComponentFixture<InscriptionParcelleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InscriptionParcelleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InscriptionParcelleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
