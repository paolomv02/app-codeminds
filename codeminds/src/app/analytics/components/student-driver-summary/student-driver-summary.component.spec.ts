import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentDriverSummaryComponent } from './student-driver-summary.component';

describe('StudentDriverSummaryComponent', () => {
  let component: StudentDriverSummaryComponent;
  let fixture: ComponentFixture<StudentDriverSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentDriverSummaryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentDriverSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
