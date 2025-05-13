import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatLabel } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-reports-summary',
  standalone: true,
  imports: [
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatLabel,
    CommonModule,
    FormsModule
  ],
  templateUrl: './reports-summary.component.html',
  styleUrl: './reports-summary.component.css'
})
export class ReportsSummaryComponent {

  drivers = ['Juan Perez', 'Maria Lopez', 'Carlos Gomez'];
  reportTypes = ['Incidents', 'Delays', 'Emergencies'];
  selectedDriver = '';
  selectedReportType = '';
  selectedDate: Date | null = null;

  data = [
    { date: '06/05/2025', type: 'Route diversion', hour: '07:10 AM', location: 'Calle Ficus 123', observations: 'He deviated 300 m from the route' },
    { date: '07/05/2025', type: 'Delayed', hour: '07:45 AM', location: 'Colegio Santa María', observations: 'The driver was 10 minutes late' },
    { date: '08/05/2025', type: 'Emergency button', hour: '04:20 PM', location: 'Av. Los Álamos 456', observations: '------------------------' },
    { date: '08/05/2025', type: 'Delayed', hour: '07:55 AM', location: 'Colegio Santa María', observations: 'Colegio Santa María' },
    { date: '18/05/2025', type: 'Route diversion', hour: '07:11 AM', location: 'Calle Ficus 123', observations: 'He deviated 200 m from the route' },
    { date: '22/05/2025', type: 'Route diversion', hour: '07:00 AM', location: 'Av. Los Álamos 456', observations: 'He deviated 150 m from the route' },
  ];

  filteredData = [...this.data];
  displayedColumns: string[] = ['date', 'type', 'hour', 'location', 'observations'];

  applyFilter() {
    this.filteredData = this.data.filter(item => {
      const matchesDriver = this.selectedDriver ? item.type.includes(this.selectedDriver) : true;
      const matchesReportType = this.selectedReportType ? item.type.includes(this.selectedReportType) : true;
      const matchesDate = this.selectedDate ? item.date === this.formatDate(this.selectedDate) : true;
      return matchesDriver && matchesReportType && matchesDate;
    });
  }

  private formatDate(date: Date): string {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }
}
