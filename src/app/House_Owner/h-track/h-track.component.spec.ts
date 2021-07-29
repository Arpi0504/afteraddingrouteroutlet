import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HTrackComponent } from './h-track.component';

describe('HTrackComponent', () => {
  let component: HTrackComponent;
  let fixture: ComponentFixture<HTrackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HTrackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HTrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
