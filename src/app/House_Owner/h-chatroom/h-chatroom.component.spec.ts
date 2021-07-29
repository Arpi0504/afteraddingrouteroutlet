import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HChatroomComponent } from './h-chatroom.component';

describe('HChatroomComponent', () => {
  let component: HChatroomComponent;
  let fixture: ComponentFixture<HChatroomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HChatroomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HChatroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
