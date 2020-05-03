import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectoshomeComponent } from './proyectoshome.component';

describe('ProyectoshomeComponent', () => {
  let component: ProyectoshomeComponent;
  let fixture: ComponentFixture<ProyectoshomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProyectoshomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProyectoshomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
