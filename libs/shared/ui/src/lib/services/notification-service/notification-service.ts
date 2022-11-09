import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

interface IState {
  open: number;
  title: string;
  message: string;
  status: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  state: BehaviorSubject<IState> = new BehaviorSubject<IState>({
    open: 0,
    title: '',
    message: '',
    status: false,
  });
  constructor() {}

  notificationChange(ctx: IState) {
    this.state.next(ctx);
  }
}
