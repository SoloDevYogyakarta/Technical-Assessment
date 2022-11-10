import { createAction, props } from '@ngrx/store';
import { IEmploye } from '../../constants/employe-type/employe-type';

export const ListEmployeAction = createAction(
  'Employe::Action::List',
  props<{
    employes: IEmploye[];
  }>()
);

export const DetailEmployeAction = createAction(
  'Employe::Action::Detail',
  props<{ public_id: string }>()
);

export const DestroyEmployeAction = createAction(
  'Employe::Action::Destroy',
  props<{ public_id: string }>()
);

export const CreateEmployeAction = createAction(
  'Employe::Action::Created',
  props<{ employe: IEmploye }>()
);

export const UpdateEmployeAction = createAction(
  'Employe::Action::Update',
  props<{ public_id: string; employe: IEmploye }>()
);
