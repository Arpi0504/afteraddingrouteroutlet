import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SProjectinfoComponent } from './s-projectinfo.component';

describe('SProjectinfoComponent', () => {
  let component: SProjectinfoComponent;
  let fixture: ComponentFixture<SProjectinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SProjectinfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SProjectinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
