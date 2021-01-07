import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AddPfComponent } from './add-pf.component';

describe('AddPfComponent', () => {
  let component: AddPfComponent;
  let fixture: ComponentFixture<AddPfComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
