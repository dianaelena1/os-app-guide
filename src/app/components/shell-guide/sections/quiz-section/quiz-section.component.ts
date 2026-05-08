import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { QuizQuestion } from '../../../../models/guide.models';

@Component({
  selector: 'app-quiz-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quiz-section.component.html',
  styleUrl: './quiz-section.component.scss'
})
export class QuizSectionComponent {
  @Input() quizQuestions: QuizQuestion[] = [];
  @Output() cardMouseMove = new EventEmitter<MouseEvent>();

  openAnswers = new Set<string>();

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
}