import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  IEmploye,
  ListEmployeAction,
  selectEmployes,
} from '@nov9-technical-assessment/stores';
import { Observable } from 'rxjs';
import employes from './employes.json'

@Component({
  selector: 'employe-component',
  templateUrl: 'employe.component.html',
})
export class EmployeComponent implements OnInit {
  title = 'EmployeComponent';
  list: Observable<IEmploye[]> = new Observable<IEmploye[]>

  constructor(private store: Store) {
    this.list = this.store.select(selectEmployes)
  }


  ngOnInit(): void {
    this.store.dispatch(ListEmployeAction({employes: employes}))
  }
}
