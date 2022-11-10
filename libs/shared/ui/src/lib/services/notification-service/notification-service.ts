import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { INotification } from '../../constants/notification-type/notification-type';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  public state: BehaviorSubject<INotification> =
    new BehaviorSubject<INotification>({
      open: 0,
      title: '',
      message: '',
      status: false,
    });
  constructor() {}

  notificationChange(ctx: INotification) {
    this.state.next(ctx);
  }
}
