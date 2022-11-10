import { Component, DoCheck, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {
  IEmployeState,
  employesSelector,
  getEmployes,
  IEmploye,
  employeIsLoadingSelector,
  destroyEmploye,
  getDetailEmploye,
  filterEmploye,
  filterEmployeSelector,
} from '@nov9-technical-assessment/stores';
import { Store } from '@ngrx/store';

@Component({
  selector: 'employe-component',
  templateUrl: 'employe.component.html',
})
export class EmployeComponent implements OnInit, DoCheck {
  title = 'EmployeComponent';
  employe$: Observable<IEmploye[]> = new Observable<IEmploye[]>();
  isLoading$: Observable<boolean> = new Observable<boolean>();
  search: string = '';

  constructor(private store: Store<IEmployeState>) {
    this.employe$ = this.store.select(filterEmployeSelector);
    this.isLoading$ = this.store.select(employeIsLoadingSelector);
  }

  onDelete(username: string) {
    this.store.dispatch(destroyEmploye({ username: username }));
  }

  getDetailEmploye(username: string) {
    this.store.dispatch(getDetailEmploye({ username }));
  }

  ngOnInit(): void {
    this.store.dispatch(getEmployes());
  }

  ngDoCheck(): void {
    this.store.dispatch(filterEmploye({ username: this.search }));
  }
}
