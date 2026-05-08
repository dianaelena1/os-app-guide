import { Routes } from '@angular/router';

import { ShellGuideComponent } from './components/shell-guide/shell-guide.component';
import { LoginComponent } from './pages/login/login.component';
import { ExamUploadComponent } from './pages/exam-upload/exam-upload.component';
import { SettingsComponent } from './pages/settings/settings.component';

import { authGuard } from '../guards/auth.guard';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    component: ShellGuideComponent,
    canActivate: [authGuard]
  },
  {
    path: 'exam',
    component: ExamUploadComponent,
    canActivate: [authGuard]
  },
  {
    path: 'settings',
    component: SettingsComponent,
    canActivate: [authGuard]
  },
  {
    path: '**',
    redirectTo: ''
  }
];