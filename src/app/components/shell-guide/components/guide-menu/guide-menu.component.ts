import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { GuideTab } from '../../../../models/guide.models';

@Component({
  selector: 'app-guide-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './guide-menu.component.html',
  styleUrl: './guide-menu.component.scss'
})
export class GuideMenuComponent {
  @Input() tabs: GuideTab[] = [];
  @Input() activeTab = 'overview';
  @Input() theme: 'dark' | 'light' = 'dark';
  @Input() isUserMenuOpen = false;

  @Output() tabSelected = new EventEmitter<string>();
  @Output() themeToggled = new EventEmitter<void>();
  @Output() userMenuToggled = new EventEmitter<void>();
  @Output() logoutClicked = new EventEmitter<void>();
}