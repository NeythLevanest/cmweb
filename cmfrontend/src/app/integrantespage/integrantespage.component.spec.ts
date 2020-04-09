import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntegrantespageComponent } from './integrantespage.component';

describe('IntegrantespageComponent', () => {
  let component: IntegrantespageComponent;
  let fixture: ComponentFixture<IntegrantespageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntegrantespageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntegrantespageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
