import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ModeladoComponent } from './modelado.component';

describe('ModeladoComponent', () => {
  let component: ModeladoComponent;
  let fixture: ComponentFixture<ModeladoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ModeladoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModeladoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
