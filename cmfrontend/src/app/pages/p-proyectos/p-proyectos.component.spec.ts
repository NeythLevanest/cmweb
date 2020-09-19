import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PProyectosComponent } from './p-proyectos.component';

describe('PProyectosComponent', () => {
  let component: PProyectosComponent;
  let fixture: ComponentFixture<PProyectosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PProyectosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PProyectosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
