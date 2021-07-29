import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SChatroomComponent } from './s-chatroom.component';

describe('SChatroomComponent', () => {
  let component: SChatroomComponent;
  let fixture: ComponentFixture<SChatroomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SChatroomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SChatroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
