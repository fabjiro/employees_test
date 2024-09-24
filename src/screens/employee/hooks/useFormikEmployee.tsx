import { useFormik } from "formik";
import { employeeValidationSchema } from "../schemas/employee.schema";
import { IEmployee } from "../../../interface/user/user.interface";
import { useEmployeeStore } from "../../../store/employee.store";
import { useNavigate } from "react-router-dom";

export function useFormikEmployee() {
  const navigate = useNavigate();
  const addEmployee = useEmployeeStore((state) => state.addEmployee);
  const {
    handleChange,
    handleSubmit,
    setValues,
    setFieldValue,
    submitForm: submitForm,
    errors,
    values,
  } = useFormik<IEmployee>({
    initialValues: {
      name: "",
      lastName: "",
      email: "",
      identification: "",
      numerINSS: "",
    },
    validateOnChange: false,
    validateOnMount: false,
    validateOnBlur: false,
    validationSchema: employeeValidationSchema,
    onSubmit: (values) => {
      addEmployee(values, () => navigate("/"));
    },
  });

  return {
    handleChange,
    handleSubmit,
    setValues,
    setFieldValue,
    submitForm,
    errors,
    values,
  };
}
