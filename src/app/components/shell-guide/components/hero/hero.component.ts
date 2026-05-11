import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output, inject } from '@angular/core';

import { AuthService } from '../../../../services/auth.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  private authService = inject(AuthService);

  displayName$ = this.authService.displayName$;

  @Output() scrollToGuide = new EventEmitter<void>();
}