import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EditCuentaComponent } from './edit-cuenta.component';

describe('EditCuentaComponent', () => {
  let component: EditCuentaComponent;
  let fixture: ComponentFixture<EditCuentaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EditCuentaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCuentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
