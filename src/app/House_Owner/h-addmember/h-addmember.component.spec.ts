import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HAddmemberComponent } from './h-addmember.component';

describe('HAddmemberComponent', () => {
  let component: HAddmemberComponent;
  let fixture: ComponentFixture<HAddmemberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HAddmemberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HAddmemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
