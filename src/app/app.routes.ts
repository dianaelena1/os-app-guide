import { Routes } from '@angular/router';
import { ShellGuideComponent } from './components/shell-guide/shell-guide.component';
import { LoginComponent } from './pages/login/login.component';
import { ExamUploadComponent } from './pages/exam-upload/exam-upload.component';

export const routes: Routes = [
  { path: '', component: ShellGuideComponent },
  { path: 'login', component: LoginComponent },
  { path: 'exam', component: ExamUploadComponent },
  { path: '**', redirectTo: '' }
];