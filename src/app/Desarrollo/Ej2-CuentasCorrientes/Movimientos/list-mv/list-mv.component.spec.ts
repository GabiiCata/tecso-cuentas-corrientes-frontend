import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ListMvComponent } from './list-mv.component';

describe('ListMvComponent', () => {
  let component: ListMvComponent;
  let fixture: ComponentFixture<ListMvComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListMvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
