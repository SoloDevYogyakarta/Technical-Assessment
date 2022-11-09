import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'nov9-technical-assessment-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'landing';

  constructor(private router: Router) {}

  onNavigate(path: string) {
    this.router.navigateByUrl(path);
  }
}
