import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HSpinfoComponent } from './h-spinfo.component';

describe('HSpinfoComponent', () => {
  let component: HSpinfoComponent;
  let fixture: ComponentFixture<HSpinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HSpinfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HSpinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
