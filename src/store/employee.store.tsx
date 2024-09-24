import { create } from "zustand";
import { IEmployee } from "../interface/user/user.interface";
import { EmployeeList } from "../const/employee.const";
import toast from "react-hot-toast";

interface EmployeeState {
  listEmployees: IEmployee[];
  deleteEmployeeById: (id: number) => void;

}

export const useEmployeeStore = create<EmployeeState>()((set) => ({
  listEmployees: EmployeeList,
  deleteEmployeeById: (id) => set((state) => {
    
    toast.success("Empleado eliminado correctamente", {
      position: "top-right",
    });
    
    return {
      listEmployees: state.listEmployees.filter((employee) => employee.id !== id),
    };
  })
}));
