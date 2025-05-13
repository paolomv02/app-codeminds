import { Routes } from '@angular/router';
import { ReportsComponent } from './analytics/pages/reports/reports.component';
import { DriversAndStudentsComponent } from './analytics/pages/drivers-and-students/drivers-and-students.component';

export const routes: Routes = [
    {path: '', redirectTo: 'reports', pathMatch: 'full'},
    {path: 'reports', component: ReportsComponent},
    {path: 'drivers-and-students', component: DriversAndStudentsComponent}
]