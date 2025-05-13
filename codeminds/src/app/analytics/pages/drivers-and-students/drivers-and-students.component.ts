import { Component } from '@angular/core';
import { StudentDriverSummaryComponent } from '../../components/student-driver-summary/student-driver-summary.component';

@Component({
  selector: 'app-drivers-and-students',
  standalone: true,
  imports: [StudentDriverSummaryComponent],
  templateUrl: './drivers-and-students.component.html',
  styleUrl: './drivers-and-students.component.css'
})
export class DriversAndStudentsComponent {

}
