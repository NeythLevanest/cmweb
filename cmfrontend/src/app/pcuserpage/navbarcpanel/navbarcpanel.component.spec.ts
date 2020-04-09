import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarcpanelComponent } from './navbarcpanel.component';

describe('NavbarcpanelComponent', () => {
  let component: NavbarcpanelComponent;
  let fixture: ComponentFixture<NavbarcpanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarcpanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarcpanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
