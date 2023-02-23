import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountReturnComponent } from './account-return.component';

describe('AccountReturnComponent', () => {
  let component: AccountReturnComponent;
  let fixture: ComponentFixture<AccountReturnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountReturnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountReturnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
