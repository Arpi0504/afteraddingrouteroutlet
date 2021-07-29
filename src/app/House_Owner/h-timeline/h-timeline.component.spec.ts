import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HTimelineComponent } from './h-timeline.component';

describe('HTimelineComponent', () => {
  let component: HTimelineComponent;
  let fixture: ComponentFixture<HTimelineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HTimelineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
