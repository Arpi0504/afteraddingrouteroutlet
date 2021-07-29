import { ComponentFixture, TestBed } from '@angular/core/testing';

import { STimelineComponent } from './s-timeline.component';

describe('STimelineComponent', () => {
  let component: STimelineComponent;
  let fixture: ComponentFixture<STimelineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ STimelineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(STimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
