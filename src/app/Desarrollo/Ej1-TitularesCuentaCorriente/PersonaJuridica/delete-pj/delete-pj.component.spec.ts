import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletePjComponent } from './delete-pj.component';

describe('DeletePjComponent', () => {
  let component: DeletePjComponent;
  let fixture: ComponentFixture<DeletePjComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletePjComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletePjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
