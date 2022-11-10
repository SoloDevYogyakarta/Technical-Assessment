import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  IEmploye,
  IEmployeState,
} from '../../constants/employe-type/employe-type';

export const employe = (state: IEmployeState) => state.employe;

export const selectEmployeFeature =
  createFeatureSelector<IEmployeState>('employe');

export const selectEmployes = createSelector(selectEmployeFeature, (state) => {
  const result = state.employes as unknown as { employes: IEmploye[] };
  return result.employes;
});
