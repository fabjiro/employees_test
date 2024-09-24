import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import { useEmployeeStore } from "../../store/employee.store";
import { BaseScreen } from "../BaseScreen";
import { FaEllipsisVertical, FaPlus } from "react-icons/fa6";
import { MdEdit, MdDelete } from "react-icons/md";

export function EmployeeListScreen() {
  const employeeList = useEmployeeStore((state) => state.listEmployees);

  return (
    <BaseScreen title="Lista de empleados">
      <div className="w-full h-full flex flex-col gap-4">
        <div className="flex flex-row items-center justify-end">
          <Button color="primary" startContent={<FaPlus />}>
            Nuevo empleado
          </Button>
        </div>
        <div className="flex-1 flex h-full w-full overflow-auto p-2">
          <Table
            classNames={{
              wrapper: "flex-1 h-full",
            }}
            isVirtualized
            isStriped
            isHeaderSticky
          >
            <TableHeader>
              <TableColumn>NOMBRE</TableColumn>
              <TableColumn>APELLIDO</TableColumn>
              <TableColumn>CORREO</TableColumn>
              <TableColumn>CEDULA</TableColumn>
              <TableColumn>INSS</TableColumn>
              <TableColumn>FECHA NACIMIENTO</TableColumn>
              <TableColumn>ACCIONES</TableColumn>
            </TableHeader>
            <TableBody>
              {employeeList.map((employee, index) => (
                <TableRow key={index}>
                  <TableCell>{employee.name}</TableCell>
                  <TableCell>{employee.lastName}</TableCell>
                  <TableCell>{employee.email}</TableCell>
                  <TableCell>{employee.identification}</TableCell>
                  <TableCell>{employee.numerINSS}</TableCell>
                  <TableCell>JUELA</TableCell>
                  <TableCell className="flex flex-row gap-2 ">
                    <Dropdown>
                      <DropdownTrigger>
                        <Button size="sm" isIconOnly variant="ghost">
                          <FaEllipsisVertical />
                        </Button>
                      </DropdownTrigger>
                      <DropdownMenu aria-label="Static Actions">
                        <DropdownItem startContent={<MdEdit />} key="edit">
                          Editar
                        </DropdownItem>
                        <DropdownItem
                          className="text-danger"
                          color="danger"
                          key="edit"
                          startContent={<MdDelete />}
                        >
                          Eliminar
                        </DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </BaseScreen>
  );
}
