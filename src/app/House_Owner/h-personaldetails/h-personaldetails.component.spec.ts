import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HPersonaldetailsComponent } from './h-personaldetails.component';

describe('HPersonaldetailsComponent', () => {
  let component: HPersonaldetailsComponent;
  let fixture: ComponentFixture<HPersonaldetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HPersonaldetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HPersonaldetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
