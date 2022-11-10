export interface IEmploye {
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  birthDate: string;
  basicSalary: string;
  status: string;
  group: string;
  description: string;
}

export interface IEmployeState {
  employe: IEmploye;
  employes: IEmploye[];
  filterEmployes: IEmploye[];
  isLoading: boolean;
  error: string;
}
