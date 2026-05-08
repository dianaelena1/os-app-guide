import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-image-modal',
  standalone: true,
  imports: [],
  templateUrl: './image-modal.component.html',
  styleUrl: './image-modal.component.scss'
})
export class ImageModalComponent {
  @Input() selectedImage: string | null = null;
  @Output() closed = new EventEmitter<void>();
}