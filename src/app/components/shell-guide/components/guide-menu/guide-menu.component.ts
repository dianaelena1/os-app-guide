import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../../services/auth.service';
import { GuideTab } from '../../../../models/guide.models';

@Component({
  selector: 'app-guide-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './guide-menu.component.html',
  styleUrl: './guide-menu.component.scss'
})
export class GuideMenuComponent {
  private router = inject(Router);
  private authService = inject(AuthService);

  displayName$ = this.authService.displayName$;

  @Input() tabs: GuideTab[] = [];
  @Input() activeTab = 'overview';
  @Input() theme: 'dark' | 'light' = 'dark';
  @Input() isUserMenuOpen = false;

  @Output() tabSelected = new EventEmitter<string>();
  @Output() themeToggled = new EventEmitter<void>();
  @Output() userMenuToggled = new EventEmitter<void>();
  @Output() logoutClicked = new EventEmitter<void>();

  openGrades(): void {
    window.open(
      'https://docs.google.com/spreadsheets/d/e/2PACX-1vQ8yZq2QGlWw984Ix881zY39DUOMSfpE1JcAlcY_WZnLNchu8Ld-wrwSrb5drEZT7o0hzY57LIKZ2X9/pubhtml?gid=334396870&single=true',
      '_blank',
      'noopener,noreferrer'
    );
  }

  handleTabClick(tabId: string): void {
  if (tabId === 'grades') {
    this.openGrades();
    return;
  }

  if (tabId === 'exam') {
    this.router.navigate(['/exam']);
    return;
  }

  this.tabSelected.emit(tabId);
}

openSettings(): void {
  this.router.navigate(['/settings']);
}
}