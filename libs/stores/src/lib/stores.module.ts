import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { employeReducer } from './reducers/employe-reducer/employe-reducer';
import { EffectsModule } from '@ngrx/effects';
import { EmployeEffects } from './effects/employe-effect/employe-effect';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('employe', employeReducer),
    EffectsModule.forFeature([EmployeEffects]),
  ],
  exports: [StoreModule],
})
export class StoresModule {}
