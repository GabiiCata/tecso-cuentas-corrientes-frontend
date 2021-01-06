import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPfComponent } from './list-pf.component';

describe('ListPfComponent', () => {
  let component: ListPfComponent;
  let fixture: ComponentFixture<ListPfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
