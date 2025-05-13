import { Component } from '@angular/core';
import { StudentDriverCardComponent } from '../student-driver-card/student-driver-card.component';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-student-driver-summary',
  standalone: true,
  imports: [StudentDriverCardComponent, MatSelectModule, MatInputModule, MatButtonModule, MatIconModule, MatFormFieldModule, CommonModule],
  templateUrl: './student-driver-summary.component.html',
  styleUrl: './student-driver-summary.component.css'
})
export class StudentDriverSummaryComponent {
  userTypes = ['Student', 'Driver'];
  selectedUserType = 'Student';

  users = [
    { name: 'Julio Rodriguez', role: 'Student', image: 'https://st3.depositphotos.com/9881890/16378/i/450/depositphotos_163786426-stock-photo-handsome-cheerful-man.jpg' },  
    { name: 'Juan Pérez', role: 'Student', image: 'assets/juan.jpg' },
    { name: 'Carlos Quispe', role: 'Student', image: 'assets/carlos.jpg' },
    { name: 'Luis Ramírez', role: 'Student', image: 'assets/luis.jpg' },
    { name: 'José Rojas', role: 'Driver', image: 'assets/jose.jpg' },
    { name: 'Miguel Huamán', role: 'Driver', image: 'assets/miguel.jpg' },
    { name: 'Pedro Gonzales', role: 'Driver', image: 'assets/pedro.jpg' },
    { name: 'Jorge Chávez', role: 'Driver', image: 'assets/jorge.jpg' },
  ];

  filteredUsers = [...this.users];

  filterUsers() {
    this.filteredUsers = this.users.filter(user => user.role === this.selectedUserType);
  }

  search() {
    this.filterUsers();
  }
}
