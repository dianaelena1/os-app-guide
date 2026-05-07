import { Routes } from '@angular/router';
import { ShellGuideComponent } from './components/shell-guide/shell-guide.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
  { path: '', component: ShellGuideComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '' }
];