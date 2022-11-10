import { createReducer, on } from '@ngrx/store';
import * as actions from '../../actions/employe-action/employe-action';
import {
  IEmploye,
  IEmployeState,
} from '../../constants/employe-type/employe-type';

const initialState: IEmployeState = {
  employes: [],
  employe: {
    public_id: '',
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    birthDate: '',
    status: '',
    group: '',
    description: '',
  },
};

export const employeReducer = createReducer(
  initialState,
  on(
    actions.ListEmployeAction,
    (state: IEmployeState, action: { employes: IEmploye[] }) => ({
      ...state,
      employes: action.employes,
    })
  ),
  on(
    actions.DetailEmployeAction,
    (state: IEmployeState, action: { public_id: string }) => ({
      ...state,
      employes: state.employes.filter(
        (item) => item.public_id === action.public_id
      ),
    })
  ),
  on(
    actions.DestroyEmployeAction,
    (state: IEmployeState, action: { public_id: string }) => ({
      ...state,
      employes: state.employes.filter(
        (item) => item.public_id !== action.public_id
      ),
    })
  ),
  on(
    actions.CreateEmployeAction,
    (state: IEmployeState, action: { employe: IEmploye }) => ({
      ...state,
      employes: [...state.employes, action.employe],
    })
  ),
  on(
    actions.UpdateEmployeAction,
    (
      state: IEmployeState,
      action: { public_id: string; employe: IEmploye }
    ) => ({
      ...state,
      employes: state.employes.map((item) =>
        item.public_id === action.public_id ? action.employe : item
      ),
    })
  )
);
