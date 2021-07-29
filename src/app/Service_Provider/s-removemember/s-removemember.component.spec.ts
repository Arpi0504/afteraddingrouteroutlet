import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SRemovememberComponent } from './s-removemember.component';

describe('SRemovememberComponent', () => {
  let component: SRemovememberComponent;
  let fixture: ComponentFixture<SRemovememberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SRemovememberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SRemovememberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
