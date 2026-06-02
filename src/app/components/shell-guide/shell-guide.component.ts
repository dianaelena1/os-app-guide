import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

import { GUIDE_BADGES, GUIDE_TABS, QUIZ_QUESTIONS } from '../../data/guide.data';
import { BadgeItem, GuideTab, QuizQuestion } from '../../models/guide.models';

import { HeroComponent } from './components/hero/hero.component';
import { GuideMenuComponent } from './components/guide-menu/guide-menu.component';
import { GuideSidebarComponent } from './components/guide-sidebar/guide-sidebar.component';
import { AppFooterComponent } from './components/app-footer/app-footer.component';
import { ScrollTopButtonComponent } from './components/scroll-top-button/scroll-top-button.component';
import { ImageModalComponent } from './components/image-modal/image-modal.component';

import { OverviewSectionComponent } from './sections/overview-section/overview-section.component';
import { BasicsSectionComponent } from './sections/basics-section/basics-section.component';
import { LsSectionComponent } from './sections/ls-section/ls-section.component';
import { ChmodSectionComponent } from './sections/chmod-section/chmod-section.component';
import { GrepSectionComponent } from './sections/grep-section/grep-section.component';
import { SedSectionComponent } from './sections/sed-section/sed-section.component';
import { AwkSectionComponent } from './sections/awk-section/awk-section.component';
import { CSectionComponent } from './sections/c-section/c-section.component';
import { QuizSectionComponent } from './sections/quiz-section/quiz-section.component';
import { ProcessesSectionComponent } from './sections/processes-section/processes-section.component';
import { PipesSectionComponent } from './sections/pipes-section/pipes-section.component';

@Component({
  selector: 'app-shell-guide',
  standalone: true,
  imports: [
    CommonModule,
    HeroComponent,
    GuideMenuComponent,
    GuideSidebarComponent,
    AppFooterComponent,
    ScrollTopButtonComponent,
    ImageModalComponent,
    OverviewSectionComponent,
    BasicsSectionComponent,
    LsSectionComponent,
    ChmodSectionComponent,
    GrepSectionComponent,
    SedSectionComponent,
    AwkSectionComponent,
    CSectionComponent,
    QuizSectionComponent,
    ProcessesSectionComponent,
    PipesSectionComponent
  ],
  templateUrl: './shell-guide.component.html',
  styleUrl: './shell-guide.component.scss'
})
export class ShellGuideComponent {
  theme: 'dark' | 'light' = 'dark';
  isUserMenuOpen = false;

  tabs: GuideTab[] = GUIDE_TABS;
  badges: BadgeItem[] = GUIDE_BADGES;
  quizQuestions: QuizQuestion[] = QUIZ_QUESTIONS;

  activeTab = 'overview';
  selectedImage: string | null = null;
  showScrollTop = false;

  constructor(private router: Router,  private authService: AuthService) {}

  setActiveTab(tabId: string): void {
    this.activeTab = tabId;
  }

  isActiveTab(tabId: string): boolean {
    return this.activeTab === tabId;
  }

  toggleUserMenu(): void {
    this.isUserMenuOpen = !this.isUserMenuOpen;
  }

 logout(): void {
  this.authService.logout().then(() => {
    this.router.navigate(['/login']);
  });
}

  toggleTheme(): void {
    this.theme = this.theme === 'dark' ? 'light' : 'dark';
  }

  onMouseMove(event: MouseEvent): void {
    const target = event.currentTarget as HTMLElement;
    const rect = target.getBoundingClientRect();

    target.style.setProperty('--x', `${event.clientX - rect.left}px`);
    target.style.setProperty('--y', `${event.clientY - rect.top}px`);
  }

  scrollToGuide(): void {
    document
      .getElementById('guide-content')
      ?.scrollIntoView({ behavior: 'smooth' });
  }

  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  openImage(imageUrl: string): void {
    this.selectedImage = imageUrl;
  }

  closeImage(): void {
    this.selectedImage = null;
  }

  @HostListener('document:keydown.escape')
  onEscapePressed(): void {
    if (this.selectedImage) {
      this.closeImage();
    }
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.showScrollTop = window.scrollY > 300;
  }
}