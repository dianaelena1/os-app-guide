import { Component } from '@angular/core';
import { ShellGuideComponent } from './components/shell-guide/shell-guide.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ShellGuideComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {}
