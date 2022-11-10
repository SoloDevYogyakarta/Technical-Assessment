import { Injectable } from '@angular/core';
import { BehaviorSubject, delay, map, Observable, of } from 'rxjs';
import { IEmploye } from '../../constants/employe-type/employe-type';
import { initialState } from '../../reducers/employe-reducer/employe-reducer';
import listEmployes from './employes.json';

@Injectable({
  providedIn: 'root',
})
export class EmployeService {
  employes: BehaviorSubject<IEmploye[]> = new BehaviorSubject<IEmploye[]>(
    listEmployes
  );
  employe: BehaviorSubject<IEmploye> = new BehaviorSubject<IEmploye>(
    initialState.employe
  );

  constructor() {}

  getList(): Observable<IEmploye[]> {
    return this.employes.pipe(
      map((item) =>
        item.map((employe) => {
          return {
            ...employe,
            basicSalary: String(
              Intl.NumberFormat('ID', {
                style: 'currency',
                currency: 'IDR',
              }).format(Number(employe.basicSalary))
            ),
          };
        })
      ),
      delay(1000)
    );
  }

  getDetail(username: string): Observable<string> {
    return of(username).pipe(delay(300));
  }

  destroy(username: string): Observable<string> {
    return of(username).pipe(delay(500));
  }

  filter(username: string): Observable<string> {
    return of(username).pipe(delay(100));
  }
}
