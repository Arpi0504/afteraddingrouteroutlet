import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HDashboardComponent } from './h-dashboard.component';

describe('HDashboardComponent', () => {
  let component: HDashboardComponent;
  let fixture: ComponentFixture<HDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
