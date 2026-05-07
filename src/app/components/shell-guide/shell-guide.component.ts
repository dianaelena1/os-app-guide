import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GUIDE_BADGES, GUIDE_TABS, QUIZ_QUESTIONS } from '../../data/guide.data';
import { BadgeItem, GuideTab, QuizQuestion } from '../../models/guide.models';
import { LAB_IMAGES } from '../../data/guide.data';
import { Router } from '@angular/router';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-shell-guide',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shell-guide.component.html',
  styleUrl: './shell-guide.component.scss'
})
export class ShellGuideComponent {
  theme: 'dark' | 'light' = 'dark';

  constructor(private router: Router) {}

  isUserMenuOpen = false;

toggleUserMenu(): void {
  this.isUserMenuOpen = !this.isUserMenuOpen;
}

logout(): void {
  this.router.navigate(['/login']);
}

toggleTheme(): void {
  this.theme = this.theme === 'dark' ? 'light' : 'dark';
}

  tabs: GuideTab[] = GUIDE_TABS;
  badges: BadgeItem[] = GUIDE_BADGES;
  quizQuestions: QuizQuestion[] = QUIZ_QUESTIONS;

  activeTab = 'overview';
  openAnswers = new Set<string>();

  selectedQuizLab = 'Lab 1';

  setActiveTab(tabId: string): void {
    this.activeTab = tabId;
  }

  isActiveTab(tabId: string): boolean {
    return this.activeTab === tabId;
  }

  toggleAnswer(answerId: string): void {
    if (this.openAnswers.has(answerId)) {
      this.openAnswers.delete(answerId);
    } else {
      this.openAnswers.add(answerId);
    }
  }

  isAnswerOpen(answerId: string): boolean {
    return this.openAnswers.has(answerId);
  }

  get quizLabs(): string[] {
    return [...new Set(this.quizQuestions.map(question => question.lab))];
  }

  get filteredQuizQuestions(): QuizQuestion[] {
    return this.quizQuestions.filter(
      question => question.lab === this.selectedQuizLab
    );
  }

  labImages = LAB_IMAGES;
  getImagesForLab(lab: string): string[] {
  return this.labImages.find(l => l.lab === lab)?.images || [];
  }

  onMouseMove(event: MouseEvent) {
  const target = event.currentTarget as HTMLElement;

  const rect = target.getBoundingClientRect();

  target.style.setProperty(
    '--x',
    `${event.clientX - rect.left}px`
  );

  target.style.setProperty(
    '--y',
    `${event.clientY - rect.top}px`
  );
}

scrollToTop(): void {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

selectedImage: string | null = null;

openImage(imageUrl: string): void {
  this.selectedImage = imageUrl;
}

closeImage(): void {
  this.selectedImage = null;
}

@HostListener('document:keydown.escape', ['$event'])
onEscapePressed(event: KeyboardEvent): void {
  if (this.selectedImage) {
    this.closeImage();
  }
}

scrollToGuide() {
  document
    .getElementById('guide-content')
    ?.scrollIntoView({ behavior: 'smooth' });
}

showScrollTop = false;

@HostListener('window:scroll')
onWindowScroll() {
  this.showScrollTop = window.scrollY > 300;
}
}