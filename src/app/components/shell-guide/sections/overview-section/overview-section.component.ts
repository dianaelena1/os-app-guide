import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-overview-section',
  standalone: true,
  imports: [],
  templateUrl: './overview-section.component.html',
  styleUrl: './overview-section.component.scss'
})
export class OverviewSectionComponent {
  @Output() cardMouseMove = new EventEmitter<MouseEvent>();
}