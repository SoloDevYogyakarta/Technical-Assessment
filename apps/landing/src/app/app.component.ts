import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationService } from '@nov9-technical-assessment/shared/ui';

@Component({
  selector: 'nov9-technical-assessment-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'landing';
  notif = {
    open: 0,
    message: '',
    title: '',
    status: false,
  };

  constructor(
    private router: Router,
    private notification: NotificationService
  ) {}

  onNotification(open: number) {
    this.notification.state.next({ ...this.notif, open });
  }

  onNavigate(path: string) {
    this.router.navigateByUrl(path);
  }

  ngOnInit(): void {
    this.notification.state.subscribe((notif) => {
      this.notif = notif;
    });
  }
}
