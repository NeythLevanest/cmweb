import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PIntegrantesComponent } from './p-integrantes.component';

describe('PIntegrantesComponent', () => {
  let component: PIntegrantesComponent;
  let fixture: ComponentFixture<PIntegrantesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PIntegrantesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PIntegrantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
