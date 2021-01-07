import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ListCuentaComponent } from './list-cuenta.component';

describe('ListCuentaComponent', () => {
  let component: ListCuentaComponent;
  let fixture: ComponentFixture<ListCuentaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListCuentaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCuentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
