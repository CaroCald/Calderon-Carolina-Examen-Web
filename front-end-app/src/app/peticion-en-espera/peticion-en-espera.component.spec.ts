import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeticionEnEsperaComponent } from './peticion-en-espera.component';

describe('PeticionEnEsperaComponent', () => {
  let component: PeticionEnEsperaComponent;
  let fixture: ComponentFixture<PeticionEnEsperaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeticionEnEsperaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeticionEnEsperaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
