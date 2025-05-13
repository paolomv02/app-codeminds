import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-student-driver-card',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './student-driver-card.component.html',
  styleUrl: './student-driver-card.component.css'
})
export class StudentDriverCardComponent {
  @Input() user!: { name: string; role: string; image: string };
}
