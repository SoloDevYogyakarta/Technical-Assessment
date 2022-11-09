import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouteModule } from './route.module/route.module';

@NgModule({
  imports: [CommonModule, RouteModule],
  exports: [RouteModule],
})
export class RoutingModule {}
