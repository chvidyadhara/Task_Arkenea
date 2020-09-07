import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyheadComponent } from './lazyhead.component';

describe('LazyheadComponent', () => {
  let component: LazyheadComponent;
  let fixture: ComponentFixture<LazyheadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LazyheadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyheadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
