import { ModeFormEnum } from "../../enums/modeForm.enum";
import { BaseScreen } from "../BaseScreen";
import { EmployeeForm } from "./components/EmployeeForm";

export function EmployeeNewScreen() {
  return (
    <BaseScreen title="Nuevo Empleado">
      <EmployeeForm mode={ModeFormEnum.NEW} />
    </BaseScreen>
  );
}
