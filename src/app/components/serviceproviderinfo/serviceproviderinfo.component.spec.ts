import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceproviderinfoComponent } from './serviceproviderinfo.component';

describe('ServiceproviderinfoComponent', () => {
  let component: ServiceproviderinfoComponent;
  let fixture: ComponentFixture<ServiceproviderinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceproviderinfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceproviderinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
