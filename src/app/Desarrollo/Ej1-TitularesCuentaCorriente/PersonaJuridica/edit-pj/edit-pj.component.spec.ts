import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPjComponent } from './edit-pj.component';

describe('EditPjComponent', () => {
  let component: EditPjComponent;
  let fixture: ComponentFixture<EditPjComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPjComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
