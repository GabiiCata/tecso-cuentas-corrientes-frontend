import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AddPjComponent } from './add-pj.component';

describe('AddPjComponent', () => {
  let component: AddPjComponent;
  let fixture: ComponentFixture<AddPjComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPjComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
