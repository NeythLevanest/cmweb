import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DboarduserComponent } from './dboarduser.component';

describe('DboarduserComponent', () => {
  let component: DboarduserComponent;
  let fixture: ComponentFixture<DboarduserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DboarduserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DboarduserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
