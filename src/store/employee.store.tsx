import { create } from "zustand";
import { IEmployee } from "../interface/user/user.interface";
import { EmployeeList } from "../const/employee.const";
import toast from "react-hot-toast";

interface EmployeeState {
  listEmployees: IEmployee[];
  deleteEmployeeById: (id: number) => void;
  addEmployee: (employee: IEmployee, onSuccess?: () => void) => void;
  editEmployee: (employee: IEmployee, onSuccess?: () => void) => void;
}

export const useEmployeeStore = create<EmployeeState>()((set) => ({
  listEmployees: EmployeeList,
  editEmployee: (employee, onSuccess) => set((state) => {
    // get employee by id
    const employeIndex = state.listEmployees.findIndex((emp) => emp.id === employee.id);
    
    if (employeIndex === -1) {
      toast.error("Empleado no encontrado", {
        position: "top-right",
      })
      return state;
    }
    
    const employe = state.listEmployees[employeIndex];

    // validate unique email
    if(employe.email !== employee.email) {
      const existingEmployee = state.listEmployees.find(
        (emp) => emp.email === employee.email
      );
      if (existingEmployee) {
        toast.error("El correo ya esta en uso", {
          position: "top-right",
        });
        return state;
      }
    }

    // validate unique identification
    if(employe.identification !== employee.identification) {
      const existingIdentification = state.listEmployees.find(
        (emp) => emp.identification === employee.identification
      );
      if (existingIdentification) {
        toast.error("La identificación ya esta en uso", {
          position: "top-right",
        });
        return state;
      }
    }

    state.listEmployees[employeIndex] = employee;
    toast.success("Empleado editado correctamente", {
      position: "top-right",
    });
    setTimeout(() => {
      if (onSuccess) {
        onSuccess();
      }
    }, 100);

    return {
      listEmployees: state.listEmployees
    }
    
  }),
  addEmployee: (employee, onSuccess) =>
    set((state) => {
      // validate unique email
      const existingEmployee = state.listEmployees.find(
        (emp) => emp.email === employee.email
      );
      if (existingEmployee) {
        toast.error("El correo ya esta en uso", {
          position: "top-right",
        });
        return state;
      }
      // validate unique identification
      const existingIdentification = state.listEmployees.find(
        (emp) => emp.identification === employee.identification
      );
      if (existingIdentification) {
        toast.error("La identificación ya esta en uso", {
          position: "top-right",
        });
        return state;
      }

      // get las employee id
      const lastEmployeeId =
        (state.listEmployees.length > 0
          ? state.listEmployees[state.listEmployees.length - 1].id
          : 0) ?? 0;
      const newEmployee = {
        ...employee,
        id: lastEmployeeId + 1,
      };

      toast.success("Empleado agregado correctamente", {
        position: "top-right",
      });

      setTimeout(() => {
        if (onSuccess) {
          onSuccess();
        }
      }, 100);

      return {
        listEmployees: [...state.listEmployees, newEmployee],
      };
    }),
  deleteEmployeeById: (id) =>
    set((state) => {
      toast.success("Empleado eliminado correctamente", {
        position: "top-right",
      });

      return {
        listEmployees: state.listEmployees.filter(
          (employee) => employee.id !== id
        ),
      };
    }),
}));
