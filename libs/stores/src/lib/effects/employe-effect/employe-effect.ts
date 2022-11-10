import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EmployeService } from '../../services/employe-service/employe-service';
import * as actions from '../../actions/employe-action/employe-action';
import { catchError, exhaustMap, map, of } from 'rxjs';
import { NotificationService } from '@nov9-technical-assessment/shared/ui';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class EmployeEffects {
  constructor(
    private action$: Actions,
    private service$: EmployeService,
    private notification: NotificationService,
    private router: Router
  ) {}

  listEmploye = createEffect(() =>
    this.action$
      .pipe(
        ofType(actions.getEmployes().type),
        exhaustMap(() => this.service$.getList())
      )
      .pipe(
        map((res) => {
          return actions.getEmployesSuccess({
            employes: res,
            isLoading: false,
          });
        })
      )
  );

  destroyEmploye = createEffect(() =>
    this.action$
      .pipe(
        ofType(actions.destroyEmploye),
        exhaustMap(({ username }) => {
          this.notification.state.next({
            open: 0,
            title: '',
            message: '',
            status: false,
          });
          return this.service$.destroy(username);
        })
      )
      .pipe(
        map((res) => {
          this.notification.state.next({
            open: 1,
            title: 'Success',
            message: `${res} has been deleted`,
            status: true,
          });
          return actions.destroyEmployeSuccess({
            username: res,
            isLoading: false,
          });
        })
      )
  );

  detailEmploye = createEffect(() =>
    this.action$
      .pipe(
        ofType(actions.getDetailEmploye),
        exhaustMap(({ username }) => this.service$.getDetail(username))
      )
      .pipe(
        map((res) => {
          this.router.navigate(['/employe'], {
            queryParams: { username: res },
          });
          return actions.getDetailEmployeSuccess({
            username: res,
            isLoading: false,
          });
        }),
        catchError(() => {
          this.router.navigateByUrl('/employe/list');
          return of(
            actions.getDetailEmployeFailed({
              error: 'Account not found',
              isLoading: false,
            })
          );
        })
      )
  );

  filterEmploye = createEffect(() =>
    this.action$.pipe(
      ofType(actions.filterEmploye),
      exhaustMap(({ username }) =>
        this.service$.filter(username).pipe(
          map((res) => {
            return actions.filterEmployeSuccess({
              username: res,
              isLoading: false,
            });
          })
        )
      )
    )
  );
}
