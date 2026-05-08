import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-ls-section',
  standalone: true,
  imports: [],
  templateUrl: './ls-section.component.html',
  styleUrl: './ls-section.component.scss'
})
export class LsSectionComponent {
  @Output() cardMouseMove = new EventEmitter<MouseEvent>();
}