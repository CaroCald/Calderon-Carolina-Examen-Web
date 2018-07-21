import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeticionPorAceptarComponent } from './peticion-por-aceptar.component';

describe('PeticionPorAceptarComponent', () => {
  let component: PeticionPorAceptarComponent;
  let fixture: ComponentFixture<PeticionPorAceptarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeticionPorAceptarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeticionPorAceptarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
