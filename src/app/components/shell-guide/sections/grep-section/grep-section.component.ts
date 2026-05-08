import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-grep-section',
  standalone: true,
  imports: [],
  templateUrl: './grep-section.component.html',
  styleUrl: './grep-section.component.scss'
})
export class GrepSectionComponent {
  @Output() cardMouseMove = new EventEmitter<MouseEvent>();
}