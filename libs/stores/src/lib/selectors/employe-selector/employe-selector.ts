import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IEmployeState } from '../../constants/employe-type/employe-type';

export const employeFeatureSelector =
  createFeatureSelector<IEmployeState>('employe');

export const employesSelector = createSelector(
  employeFeatureSelector,
  (state) => {
    return state.employes;
  }
);

export const employeIsLoadingSelector = createSelector(
  employeFeatureSelector,
  (state) => {
    return state.isLoading;
  }
);

export const employeErrorSelector = createSelector(
  employeFeatureSelector,
  (state) => state.error
);

export const employeSelector = createSelector(
  employeFeatureSelector,
  (state) => state.employe
);

export const filterEmployeSelector = createSelector(
  employeFeatureSelector,
  (state) => state.filterEmployes
);
