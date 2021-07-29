import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HRemovememberComponent } from './h-removemember.component';

describe('HRemovememberComponent', () => {
  let component: HRemovememberComponent;
  let fixture: ComponentFixture<HRemovememberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HRemovememberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HRemovememberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
