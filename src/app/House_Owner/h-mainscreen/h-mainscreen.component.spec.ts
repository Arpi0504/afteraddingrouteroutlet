import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HMainscreenComponent } from './h-mainscreen.component';

describe('HMainscreenComponent', () => {
  let component: HMainscreenComponent;
  let fixture: ComponentFixture<HMainscreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HMainscreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HMainscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
