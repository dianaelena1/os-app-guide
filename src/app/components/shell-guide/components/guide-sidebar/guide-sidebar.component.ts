import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { BadgeItem } from '../../../../models/guide.models';

@Component({
  selector: 'app-guide-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './guide-sidebar.component.html',
  styleUrl: './guide-sidebar.component.scss'
})
export class GuideSidebarComponent {
  @Input() activeTab = 'overview';
  @Input() badges: BadgeItem[] = [];

  isActiveTab(tabId: string): boolean {
    return this.activeTab === tabId;
  }
}