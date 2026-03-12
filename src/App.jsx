import { Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/Login'
import ProjectList from './pages/ProjectList'
import DPRForm from './pages/DPRForm'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/projects" element={<ProjectList />} />
      <Route path="/dpr" element={<DPRForm />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App