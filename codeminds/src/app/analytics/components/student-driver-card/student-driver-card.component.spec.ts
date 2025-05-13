import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentDriverCardComponent } from './student-driver-card.component';

describe('StudentDriverCardComponent', () => {
  let component: StudentDriverCardComponent;
  let fixture: ComponentFixture<StudentDriverCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentDriverCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentDriverCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
