import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RoutingModule } from '@nov9-technical-assessment/routing';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import {
  SharedUiModule,
  NotificationService,
} from '@nov9-technical-assessment/shared/ui';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RoutingModule,
    SharedUiModule,
    StoreModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      autoPause: true,
    }),
    EffectsModule.forRoot([]),
  ],
  providers: [NotificationService],
  bootstrap: [AppComponent],
})
export class AppModule {}
