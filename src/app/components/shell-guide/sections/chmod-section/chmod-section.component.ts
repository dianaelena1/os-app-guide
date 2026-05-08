import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-chmod-section',
  standalone: true,
  imports: [],
  templateUrl: './chmod-section.component.html',
  styleUrl: './chmod-section.component.scss'
})
export class ChmodSectionComponent {
  @Output() cardMouseMove = new EventEmitter<MouseEvent>();
}