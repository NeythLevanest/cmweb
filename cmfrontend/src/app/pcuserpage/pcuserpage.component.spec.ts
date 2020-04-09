import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PcuserpageComponent } from './pcuserpage.component';

describe('PcuserpageComponent', () => {
  let component: PcuserpageComponent;
  let fixture: ComponentFixture<PcuserpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PcuserpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PcuserpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
