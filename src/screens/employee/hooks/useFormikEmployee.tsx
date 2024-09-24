import { useFormik } from "formik";
import { employeeValidationSchema } from "../schemas/employee.schema";
import { IEmployee } from "../../../interface/user/user.interface";

export function useFormikEmployee() {
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
      // Handle form submission
      console.log(values);
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
