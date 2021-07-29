import { ComponentFixture, TestBed } from '@angular/core/testing';

import { STrackComponent } from './s-track.component';

describe('STrackComponent', () => {
  let component: STrackComponent;
  let fixture: ComponentFixture<STrackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ STrackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(STrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
