import { createReducer, on } from '@ngrx/store';
import { IEmployeState } from '../../constants/employe-type/employe-type';
import * as actions from '../../actions/employe-action/employe-action';

export const initialState: IEmployeState = {
  employe: {
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    birthDate: '',
    basicSalary: '',
    status: '',
    group: '',
    description: '',
  },
  employes: [],
  filterEmployes: [],
  isLoading: false,
  error: '',
};

export const employeReducer = createReducer(
  initialState,
  // Get List Employe
  on(actions.getEmployes, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(actions.getEmployesSuccess, (state, action) => {
    return {
      ...state,
      employes: action.employes,
      isLoading: action.isLoading,
    };
  }),
  on(actions.getEmployesFailed, (state, action) => ({
    ...state,
    isLoading: action.isLoading,
    error: action.error,
  })),
  // ======================================
  on(actions.destroyEmploye, (state, action) => ({
    ...state,
    isLoading: true,
  })),
  on(actions.destroyEmployeSuccess, (state, action) => {
    return {
      ...state,
      employes: state.employes.filter(
        (employe) => employe.username !== action.username
      ),
      isLoading: action.isLoading,
    };
  }),
  on(actions.getDetailEmployeSuccess, (state, action) => {
    return {
      ...state,
      employe: state.employes.filter(
        (employe) => employe.username === action.username
      )[0],
      isLoading: action.isLoading,
    };
  }),
  on(actions.filterEmployeSuccess, (state, action) => ({
    ...state,
    filterEmployes: state.employes.filter(
      (item) =>
        item.username.toLowerCase().indexOf(action.username.toLowerCase()) > -1
    ),
    isLoading: action.isLoading,
  }))
);
