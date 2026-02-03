import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import ScrollToTop from './components/ScrollToTop'
import ProtectedRoute from './components/ProtectedRoute'
import Homepage from './pages/Homepage'
import SolutionsPage from './pages/SolutionsPage'
import WorkPage from './pages/WorkPage'
import ProjectBasePage from './pages/ProjectBasePage'
import ConsultationPage from './pages/ConsultationPage'
import AdminLogin from './pages/AdminLogin'
import AdminDashboard from './pages/AdminDashboard'
import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Loading from './components/Loading'

function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const isAdminPage = location.pathname.startsWith('/admin') || location.pathname.startsWith('/dashboard');

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loading/>;

  return (
    /* 1. Ensure the parent is relative and has a min-height */
    <div className="relative min-h-screen  bg-white">
      
      <div className="fixed top-1/2 right-[-25%] -translate-y-1/2 w-[800px] md:w-[1000px] aspect-square pointer-events-none select-none opacity-[0.09] z-0">
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-emerald-600">
          <g stroke="currentColor" strokeWidth="0.2">
            <circle cx="100" cy="100" r="30" />
            {[...Array(6)].map((_, i) => (
              <circle 
                key={i}
                cx={100 + 30 * Math.cos((i * 60 * Math.PI) / 180)} 
                cy={100 + 30 * Math.sin((i * 60 * Math.PI) / 180)} 
                r="30" 
              />
            ))}
          </g>
          <circle cx="100" cy="100" r="85" stroke="currentColor" strokeWidth="0.1" strokeDasharray="1 4" />
          <path d="M100 0 V200 M0 100 H200" stroke="currentColor" strokeWidth="0.05" />
          {[...Array(12)].map((_, i) => (
            <line 
              key={`line-${i}`}
              x1={100 + 80 * Math.cos((i * 30 * Math.PI) / 180)}
              y1={100 + 80 * Math.sin((i * 30 * Math.PI) / 180)}
              x2={100 + 90 * Math.cos((i * 30 * Math.PI) / 180)}
              y2={100 + 90 * Math.sin((i * 30 * Math.PI) / 180)}
              stroke="currentColor"
              strokeWidth="0.5"
            />
          ))}
        </svg>
      </div>

      {/* 3. CONTENT LAYOUT */}
      {!isAdminPage && <Navbar />}
      <ScrollToTop />
      
      <main className="relative z-10">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/solutions" element={<SolutionsPage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/project-base" element={<ProjectBasePage />} />
          <Route path="/contact" element={<ConsultationPage />} />
          <Route path="/admin" element={<AdminLogin />} />
          <Route 
            path="/admin/dashboard" 
            element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            } 
          />
        </Routes>
      </main>

      {!isAdminPage && <Footer />}
    </div>
  )
}

export default App