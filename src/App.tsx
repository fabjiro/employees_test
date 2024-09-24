import { Route, Routes } from "react-router-dom";
import "./App.css";
import { EmployeeListScreen } from "./screens/employee/EmployeeListScreen";
import { EmployeeNewScreen } from "./screens/employee/EmployeeNewScreen";

function App() {
  return (
    <Routes>
      <Route path="/" element={<EmployeeListScreen />} />
      <Route path="/nuevo" element={<EmployeeNewScreen />} />
    </Routes>
  );
}

export default App;
