import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HDialogboxComponent } from './h-dialogbox.component';

describe('HDialogboxComponent', () => {
  let component: HDialogboxComponent;
  let fixture: ComponentFixture<HDialogboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HDialogboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HDialogboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
