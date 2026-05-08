import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-basics-section',
  standalone: true,
  imports: [],
  templateUrl: './basics-section.component.html',
  styleUrl: './basics-section.component.scss'
})
export class BasicsSectionComponent {
  @Output() imageSelected = new EventEmitter<string>();
}