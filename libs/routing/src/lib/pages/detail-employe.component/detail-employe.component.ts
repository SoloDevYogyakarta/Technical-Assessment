import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import {
  employeIsLoadingSelector,
  employeSelector,
  getDetailEmploye,
  IEmploye,
  IEmployeState,
} from '@nov9-technical-assessment/stores';
import { Observable } from 'rxjs';

@Component({
  selector: 'detailemploye-component',
  templateUrl: 'detail-employe.component.html',
})
export class DetailEmployeComponent implements OnInit {
  title = 'DetailEmployeComponent';
  employe$: Observable<IEmploye> = new Observable<IEmploye>();
  isLoading$: Observable<boolean> = new Observable<boolean>();

  constructor(
    private store: Store<IEmployeState>,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.employe$ = this.store.select(employeSelector);
    this.isLoading$ = this.store.select(employeIsLoadingSelector);
  }

  onBack() {
    this.router.navigateByUrl('/employe/list');
  }

  ngOnInit(): void {
    this.employe$.subscribe((res) => {
      if (!res.username) {
        this.route.queryParams.subscribe((res) => {
          const username = (res as { username: string }).username;
          this.store.dispatch(getDetailEmploye({ username: username }));
        });
      }
    });
  }
}
