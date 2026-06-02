import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-processes-section',
    standalone: true,
    imports: [],
    templateUrl: './processes-section.component.html',
    styleUrl: './processes-section.component.scss'
})
export class ProcessesSectionComponent {
    @Output() cardMouseMove = new EventEmitter<MouseEvent>();
}