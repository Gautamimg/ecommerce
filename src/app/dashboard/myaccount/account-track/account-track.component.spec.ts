import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountTrackComponent } from './account-track.component';

describe('AccountTrackComponent', () => {
  let component: AccountTrackComponent;
  let fixture: ComponentFixture<AccountTrackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountTrackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountTrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
