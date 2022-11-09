import { Component, Input } from '@angular/core';
import { NotificationService } from '../services/notification-service/notification-service';

@Component({
  selector: 'notification-component',
  templateUrl: 'notification.component.html',
  styleUrls: ['notification.component.scss'],
})
export class NotificationComponent {
  @Input() open: number = 0;
  @Input() title: string = '';
  @Input() message: string = '';
  @Input() status: boolean = false;

  constructor(private notification: NotificationService) {}

  onclose() {
    this.notification.state.next({
      open: 2,
      title: this.title,
      message: this.message,
      status: false,
    });
  }
}
