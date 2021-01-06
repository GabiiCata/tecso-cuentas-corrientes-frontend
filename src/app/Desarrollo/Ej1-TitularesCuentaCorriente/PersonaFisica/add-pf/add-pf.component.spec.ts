import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPfComponent } from './add-pf.component';

describe('AddPfComponent', () => {
  let component: AddPfComponent;
  let fixture: ComponentFixture<AddPfComponent>;

  beforeEach(async(() => {
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
