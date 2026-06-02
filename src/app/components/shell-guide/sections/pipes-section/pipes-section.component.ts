import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-pipes-section',
    standalone: true,
    imports: [],
    templateUrl: './pipes-section.component.html',
    styleUrl: './pipes-section.component.scss'
})
export class PipesSectionComponent {
    @Output() cardMouseMove = new EventEmitter<MouseEvent>();
}