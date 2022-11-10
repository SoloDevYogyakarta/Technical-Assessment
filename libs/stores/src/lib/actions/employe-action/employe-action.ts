import { createAction, props } from '@ngrx/store';
import { IEmploye } from '../../constants/employe-type/employe-type';

export const getEmployes = createAction('Get List Employe');
export const getEmployesSuccess = createAction(
  'Get List Employe Success',
  props<{
    isLoading: boolean;
    employes: IEmploye[];
  }>()
);
export const getEmployesFailed = createAction(
  'Get List Employe Failed',
  props<{ isLoading: boolean; error: string }>()
);

export const getDetailEmploye = createAction(
  'Get Detail Employe',
  props<{ username: string }>()
);
export const getDetailEmployeSuccess = createAction(
  'Get Detail Employe Success',
  props<{ isLoading: boolean; username: string }>()
);
export const getDetailEmployeFailed = createAction(
  'Get Detail Employe Failed',
  props<{ isLoading: boolean; error: string }>()
);

export const destroyEmploye = createAction(
  'Destroy Employe',
  props<{ username: string }>()
);
export const destroyEmployeSuccess = createAction(
  'Destroy Employe Success',
  props<{ isLoading: boolean; username: string }>()
);
export const destroyEmployeFailed = createAction(
  'Destroy Employe Failed',
  props<{ isLoading: boolean; error: string }>()
);

export const filterEmploye = createAction(
  'Filter Employe',
  props<{ username: string }>()
);
export const filterEmployeSuccess = createAction(
  'Filter Employe Success',
  props<{ username: string; isLoading: boolean }>()
);
