import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import {
  IEmploye,
  IEmployeState,
} from '../../constants/employe-type/employe-type';

@Injectable({
  providedIn: 'root',
})
export class EmployeService {
  employe: BehaviorSubject<IEmploye> = new BehaviorSubject<IEmploye>({
    public_id: '',
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    birthDate: '',
    status: '',
    group: '',
    description: '',
  });
  employes: BehaviorSubject<IEmploye[]> = new BehaviorSubject<IEmploye[]>([]);

  constructor() {}

  getList(employes: IEmploye[]): Observable<IEmploye[]> {
    this.employes.next(employes);
    return this.employes;
  }

  getDetail(employe: IEmploye): Observable<IEmploye> {
    this.employe.next(employe);
    return this.employe;
  }
}
