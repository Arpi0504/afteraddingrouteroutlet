import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SPersonaldetailsComponent } from './s-personaldetails.component';

describe('SPersonaldetailsComponent', () => {
  let component: SPersonaldetailsComponent;
  let fixture: ComponentFixture<SPersonaldetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SPersonaldetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SPersonaldetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
