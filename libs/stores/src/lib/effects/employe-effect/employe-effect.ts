import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, map } from 'rxjs';
import { EmployeService } from '../../services/employe-service/employe-service';
import { ListEmployeAction } from '../../actions/employe-action/employe-action';

@Injectable({
  providedIn: 'root',
})
export class EmployeEffects {
  constructor(private action$: Actions, private service$: EmployeService) {}

  listEmploye = createEffect(() =>
    this.action$
      .pipe(
        ofType('Employe::Action::List'),
        exhaustMap((res) => this.service$.getList(res))
      )
      .pipe(
        map((res) => {
          return ListEmployeAction({ employes: res });
        })
      )
  );
}
