import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditThisProfileComponent } from './edit-this-profile.component';

describe('EditThisProfileComponent', () => {
  let component: EditThisProfileComponent;
  let fixture: ComponentFixture<EditThisProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditThisProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditThisProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
