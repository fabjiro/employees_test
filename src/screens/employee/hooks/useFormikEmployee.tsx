import { useFormik } from "formik";
import { employeeValidationSchema } from "../schemas/employee.schema";
import { IEmployee } from "../../../interface/user/user.interface";
import { useEmployeeStore } from "../../../store/employee.store";
import { useNavigate } from "react-router-dom";
import { ModeFormEnum } from "../../../enums/modeForm.enum";

interface IProps {
  mode: ModeFormEnum;
  initialValues?: IEmployee;
}
export function useFormikEmployee({ mode, initialValues }: IProps) {
  const navigate = useNavigate();
  const addEmployee = useEmployeeStore((state) => state.addEmployee);
  const editEmployee = useEmployeeStore((state) => state.editEmployee);

  const initialValue =
    mode === ModeFormEnum.EDIT
      ? {
          name: initialValues?.name ?? "",
          lastName: initialValues?.lastName ?? "",
          email: initialValues?.email ?? "",
          identification: initialValues?.identification ?? "",
          numerINSS: initialValues?.numerINSS ?? "",
        }
      : {
          name: "",
          lastName: "",
          email: "",
          identification: "",
          numerINSS: "",
        };

  const {
    handleChange,
    handleSubmit,
    setValues,
    setFieldValue,
    submitForm: submitForm,
    errors,
    values,
  } = useFormik<IEmployee>({
    initialValues: initialValue,
    validateOnChange: false,
    validateOnMount: false,
    validateOnBlur: false,
    validationSchema: employeeValidationSchema,
    onSubmit: (values) => {
      if (mode === ModeFormEnum.EDIT) {
        editEmployee({
          id: initialValues?.id ?? 0,
          ...values,
        }, () => navigate("/"));
      } else if (mode === ModeFormEnum.NEW) {
        addEmployee(values, () => navigate("/"));
      }
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
