export interface GuideTab {
  id: string;
  label: string;
}

export interface BadgeItem {
  label: string;
}

export interface QuizQuestion {
  id: string;
  lab: string;
  question: string;
  options: string[];
  correctAnswer: string;
  explanation?: string;
}