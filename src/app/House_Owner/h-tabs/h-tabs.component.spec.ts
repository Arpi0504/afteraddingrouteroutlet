import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HTabsComponent } from './h-tabs.component';

describe('HTabsComponent', () => {
  let component: HTabsComponent;
  let fixture: ComponentFixture<HTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HTabsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
