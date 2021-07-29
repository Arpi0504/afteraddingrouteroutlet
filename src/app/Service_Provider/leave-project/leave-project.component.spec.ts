import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveProjectComponent } from './leave-project.component';

describe('LeaveProjectComponent', () => {
  let component: LeaveProjectComponent;
  let fixture: ComponentFixture<LeaveProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeaveProjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaveProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
