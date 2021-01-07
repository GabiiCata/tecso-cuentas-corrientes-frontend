import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AddMvComponent } from './add-mv.component';

describe('AddMvComponent', () => {
  let component: AddMvComponent;
  let fixture: ComponentFixture<AddMvComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
