import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriversAndStudentsComponent } from './drivers-and-students.component';

describe('DriversAndStudentsComponent', () => {
  let component: DriversAndStudentsComponent;
  let fixture: ComponentFixture<DriversAndStudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DriversAndStudentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DriversAndStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
