import { Component } from '@angular/core';
import { ReportsSummaryComponent } from '../../components/reports-summary/reports-summary.component';

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [ReportsSummaryComponent],
  templateUrl: './reports.component.html',
  styleUrl: './reports.component.css'
})
export class ReportsComponent {

}
