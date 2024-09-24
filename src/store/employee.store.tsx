import { create } from "zustand";
import { IEmployee } from "../interface/user/user.interface";
import { EmployeeList } from "../const/employee.const";

interface EmployeeState {
  selectedEmployee?: IEmployee;
  listEmployees: IEmployee[];
}

export const useEmployeeStore = create<EmployeeState>()(() => ({
  listEmployees: EmployeeList,
}));
