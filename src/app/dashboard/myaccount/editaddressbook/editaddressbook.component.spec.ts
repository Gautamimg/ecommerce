import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditaddressbookComponent } from './editaddressbook.component';

describe('EditaddressbookComponent', () => {
  let component: EditaddressbookComponent;
  let fixture: ComponentFixture<EditaddressbookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditaddressbookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditaddressbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
