import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletePfComponent } from './delete-pf.component';

describe('DeletePfComponent', () => {
  let component: DeletePfComponent;
  let fixture: ComponentFixture<DeletePfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletePfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletePfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
