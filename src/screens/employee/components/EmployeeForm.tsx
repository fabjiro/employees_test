import { Button, Input } from "@nextui-org/react";
import { FaSave } from "react-icons/fa";
import { useFormikEmployee } from "../hooks/useFormikEmployee";
export function EmployeeForm() {

  const { errors, handleSubmit, setFieldValue } = useFormikEmployee();

  const {
    name: nameError,
    lastName: lastNameError,
    email: emailError,
    identification: identificationError,
    numerINSS: inssError,
  } = errors;

  return (
    <div className="mt-4 flex flex-col gap-6">
      {/* nave and las name */}
      <div className="flex flex-row gap-4">
        <Input
          isInvalid={!!nameError}
          errorMessage={nameError}
          onChange={(e) => setFieldValue("name", e.target.value)}
          label="Nombre"
          isRequired
          labelPlacement="outside"
        />
        <Input
          isInvalid={!!lastNameError}
          errorMessage={lastNameError}
          onChange={(e) => setFieldValue("lastName", e.target.value)}
          label="Apellido"
          isRequired
          labelPlacement="outside"
        />
      </div>
      {/* email */}
      <Input
        isInvalid={!!emailError}
        errorMessage={emailError}
        onChange={(e) => setFieldValue("email", e.target.value)}
        label="Correo"
        isRequired
        labelPlacement="outside"
      />
      {/* identification */}
      <Input
        isInvalid={!!identificationError}
        errorMessage={identificationError}
        onChange={(e) => setFieldValue("identification", e.target.value)}
        label="Cedula"
        isRequired
        labelPlacement="outside"
      />
      {/* INSS number */}
      <Input
        isInvalid={!!inssError}
        errorMessage={inssError}
        onChange={(e) => setFieldValue("numerINSS", e.target.value)}
        label="Número de INSS"
        isRequired
        labelPlacement="outside"
      />

      <div className="mt-4 flex flex-row items-center justify-end">
        <Button
          onClick={() => handleSubmit()}
          startContent={<FaSave />}
          className="w-1/6"
          color="primary"
        >
          Guardar
        </Button>
      </div>
    </div>
  );
}
