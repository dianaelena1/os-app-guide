import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-scroll-top-button',
  standalone: true,
  imports: [],
  templateUrl: './scroll-top-button.component.html',
  styleUrl: './scroll-top-button.component.scss'
})
export class ScrollTopButtonComponent {
  @Output() scrollTop = new EventEmitter<void>();
}