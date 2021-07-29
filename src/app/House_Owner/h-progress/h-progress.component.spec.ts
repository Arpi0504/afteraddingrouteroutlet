import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HProgressComponent } from './h-progress.component';

describe('HProgressComponent', () => {
  let component: HProgressComponent;
  let fixture: ComponentFixture<HProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HProgressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
