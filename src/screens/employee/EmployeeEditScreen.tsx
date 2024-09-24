import { useParams } from "react-router-dom";
import { ModeFormEnum } from "../../enums/modeForm.enum";
import { BaseScreen } from "../BaseScreen";
import { EmployeeForm } from "./components/EmployeeForm";
import { useEmployeeStore } from "../../store/employee.store";
import { useEffect, useState } from "react";
import { IEmployee } from "../../interface/user/user.interface";
import { NotFoundScreen } from "../NotFoundScreen";

export function EmployeeEditScreen() {
  const employeeList = useEmployeeStore((state) => state.listEmployees);
  const [employee, setEmployee] = useState<IEmployee | undefined>();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      setEmployee(employeeList.find((emp) => emp.id === Number(id)));
    }
  }, [id, employeeList]);

  if (!employee || !id) {
    return <NotFoundScreen description="Empleado no encontrado" />;
  }

  return (
    <BaseScreen title="Editar Empleado">
      <EmployeeForm mode={ModeFormEnum.EDIT} initialValues={employee} />
    </BaseScreen>
  );
}
