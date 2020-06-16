import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceptionAlerteComponent } from './reception-alerte.component';

describe('ReceptionAlerteComponent', () => {
  let component: ReceptionAlerteComponent;
  let fixture: ComponentFixture<ReceptionAlerteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceptionAlerteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceptionAlerteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
