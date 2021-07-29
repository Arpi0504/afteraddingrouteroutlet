import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServProvDetailsComponent } from './serv-prov-details.component';

describe('ServProvDetailsComponent', () => {
  let component: ServProvDetailsComponent;
  let fixture: ComponentFixture<ServProvDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServProvDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServProvDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
