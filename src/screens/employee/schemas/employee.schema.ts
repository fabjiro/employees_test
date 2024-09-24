import * as Yup from "yup";

// Validation schema
export const employeeValidationSchema = Yup.object().shape({
  name: Yup.string().required("El nombre es requerido"),
  lastName: Yup.string().required("El apellido es requerido"),
  email: Yup.string()
    .email("Debe ser un correo válido")
    .required("El correo es requerido"),
  identification: Yup.string()
    .required("La identificación es requerida")
    .matches(
      /^\d{3}-\d{6}-\d{4}[A-Z]$/,
      "La identificación debe tener el formato 000-000000-00000"
    ),
  numerINSS: Yup.string().required("El número de INSS es requerido"),
});