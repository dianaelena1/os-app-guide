import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-awk-section',
  standalone: true,
  imports: [],
  templateUrl: './awk-section.component.html',
  styleUrl: './awk-section.component.scss'
})
export class AwkSectionComponent {
  @Output() cardMouseMove = new EventEmitter<MouseEvent>();
}