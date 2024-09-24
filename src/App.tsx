import { Route, Routes } from 'react-router-dom'
import './App.css'
import { EmployeeListScreen } from './screens/employee/EmployeeListScreen'

function App() {

  return (
    <Routes>
      <Route path="/" element={<EmployeeListScreen />} />
    </Routes>
  )
}

export default App
