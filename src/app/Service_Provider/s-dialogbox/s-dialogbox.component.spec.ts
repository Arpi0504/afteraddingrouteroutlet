import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SDialogboxComponent } from './s-dialogbox.component';

describe('SDialogboxComponent', () => {
  let component: SDialogboxComponent;
  let fixture: ComponentFixture<SDialogboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SDialogboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SDialogboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
