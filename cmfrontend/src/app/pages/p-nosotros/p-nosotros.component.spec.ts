import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PNosotrosComponent } from './p-nosotros.component';

describe('PNosotrosComponent', () => {
  let component: PNosotrosComponent;
  let fixture: ComponentFixture<PNosotrosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PNosotrosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PNosotrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
