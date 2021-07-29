import { ComponentFixture, TestBed } from '@angular/core/testing';

import { STabsComponent } from './s-tabs.component';

describe('STabsComponent', () => {
  let component: STabsComponent;
  let fixture: ComponentFixture<STabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ STabsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(STabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
