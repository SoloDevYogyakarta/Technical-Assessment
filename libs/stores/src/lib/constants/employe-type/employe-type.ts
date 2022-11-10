export interface IEmploye {
  public_id: string;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  birthDate: string;
  status: string;
  group: string;
  description: string;
}

export interface IEmployeState {
  employes: IEmploye[];
  employe: IEmploye;
}
