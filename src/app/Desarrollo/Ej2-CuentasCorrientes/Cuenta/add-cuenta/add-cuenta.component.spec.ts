import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AddCuentaComponent } from './add-cuenta.component';

describe('AddCuentaComponent', () => {
  let component: AddCuentaComponent;
  let fixture: ComponentFixture<AddCuentaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCuentaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCuentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
