import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewThisProfileComponent } from './view-this-profile.component';

describe('ViewThisProfileComponent', () => {
  let component: ViewThisProfileComponent;
  let fixture: ComponentFixture<ViewThisProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewThisProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewThisProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
