import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationComponent } from './notification.component/notification.component';
import { NgHeroiconsModule } from '@dimaslz/ng-heroicons';

@NgModule({
  imports: [CommonModule, NgHeroiconsModule],
  declarations: [NotificationComponent],
  exports: [NotificationComponent],
  providers: [],
})
export class SharedUiModule {}
