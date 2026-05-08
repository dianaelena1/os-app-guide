import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-c-section',
  standalone: true,
  imports: [],
  templateUrl: './c-section.component.html',
  styleUrl: './c-section.component.scss'
})
export class CSectionComponent {
  @Output() cardMouseMove = new EventEmitter<MouseEvent>();
}