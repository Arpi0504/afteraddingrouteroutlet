import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SAddmemberComponent } from './s-addmember.component';

describe('SAddmemberComponent', () => {
  let component: SAddmemberComponent;
  let fixture: ComponentFixture<SAddmemberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SAddmemberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SAddmemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
