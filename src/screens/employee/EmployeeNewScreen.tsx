import { BaseScreen } from "../BaseScreen";
import { EmployeeForm } from "./components/EmployeeForm";

export function EmployeeNewScreen() {
  return (
    <BaseScreen title="Nuevo Empleado">
        <EmployeeForm/>
    </BaseScreen>
  );
}
