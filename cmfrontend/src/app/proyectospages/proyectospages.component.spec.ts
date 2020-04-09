import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectospagesComponent } from './proyectospages.component';

describe('ProyectospagesComponent', () => {
  let component: ProyectospagesComponent;
  let fixture: ComponentFixture<ProyectospagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProyectospagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProyectospagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
