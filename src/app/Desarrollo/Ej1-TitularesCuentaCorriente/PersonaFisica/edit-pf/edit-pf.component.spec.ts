import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPfComponent } from './edit-pf.component';

describe('EditPfComponent', () => {
  let component: EditPfComponent;
  let fixture: ComponentFixture<EditPfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
