import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderbardbuComponent } from './headerbardbu.component';

describe('HeaderbardbuComponent', () => {
  let component: HeaderbardbuComponent;
  let fixture: ComponentFixture<HeaderbardbuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderbardbuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderbardbuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
