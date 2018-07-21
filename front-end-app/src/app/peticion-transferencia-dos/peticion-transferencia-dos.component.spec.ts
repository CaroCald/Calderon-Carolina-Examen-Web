import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeticionTransferenciaDosComponent } from './peticion-transferencia-dos.component';

describe('PeticionTransferenciaDosComponent', () => {
  let component: PeticionTransferenciaDosComponent;
  let fixture: ComponentFixture<PeticionTransferenciaDosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeticionTransferenciaDosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeticionTransferenciaDosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
