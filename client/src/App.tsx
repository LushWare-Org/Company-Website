
import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Homepage from './pages/Homepage'
import SolutionsPage from './pages/SolutionsPage'
import WorkPage from './pages/WorkPage'
import ProjectBasePage from './pages/ProjectBasePage'
import ConsultationPage from './pages/ConsultationPage'
import { Routes, Route } from 'react-router-dom'

function App() {


  return (
    <div className="bg-white text-gray-900">
      <Navbar />
      <main className="pt-24">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/solutions" element={<SolutionsPage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/project-base" element={<ProjectBasePage />} />
          <Route path="/contact" element={<ConsultationPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
