import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomedbComponent } from './homedb.component';

describe('HomedbComponent', () => {
  let component: HomedbComponent;
  let fixture: ComponentFixture<HomedbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomedbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomedbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
