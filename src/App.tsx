import { Route, Routes } from "react-router-dom";
import "./App.css";
import { EmployeeListScreen } from "./screens/employee/EmployeeListScreen";
import { EmployeeNewScreen } from "./screens/employee/EmployeeNewScreen";
import { EmployeeEditScreen } from "./screens/employee/EmployeeEditScreen";

function App() {
  return (
    <Routes>
      <Route path="/" element={<EmployeeListScreen />} />
      <Route path="/nuevo" element={<EmployeeNewScreen />} />
      <Route path="/:id/editar" element={<EmployeeEditScreen />} />
    </Routes>
  );
}

export default App;
