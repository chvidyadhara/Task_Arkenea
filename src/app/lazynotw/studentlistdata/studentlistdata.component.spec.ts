import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentlistdataComponent } from './studentlistdata.component';

describe('StudentlistdataComponent', () => {
  let component: StudentlistdataComponent;
  let fixture: ComponentFixture<StudentlistdataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentlistdataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentlistdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
