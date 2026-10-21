import { useLayoutEffect } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import Footer from './components/Footer'
import FloatingActions from './components/FloatingActions'
import Navbar from './components/Navbar'
import ContactPage from './pages/ContactPage'
import LandingPage from './pages/LandingPage'
import ViduvaruTransportPage from './pages/ViduvaruTransportPage'
import OurWorkPage from './pages/OurWorkPage'
import PropertyManagementSystemPage from './pages/PropertyManagementSystemPage'
import LushHotelCloudPage from './pages/LushHotelCloudPage'
import ServicesPage from './pages/ServicesPage'
import TravelCrmPage from './pages/TravelCrmPage'
//import { useLenis } from './hooks/useLenis'

function App() {
  const location = useLocation();
  const isContactPage = location.pathname === '/contact';

  // Initialize Lenis smooth scrolling globally
  //useLenis();

  useLayoutEffect(() => {
    window.dispatchEvent(new Event('lenis-scroll-to-top'));
  }, [location.pathname]);

  return (
    <div className='min-h-screen bg-[#ffffff]'>
      <Navbar />
      <div
        aria-hidden={!isContactPage}
        inert={!isContactPage}
        style={isContactPage ? undefined : {
          position: 'fixed',
          top: 0,
          left: '-10000px',
          width: '100%',
          height: '100vh',
          overflow: 'hidden',
          visibility: 'hidden',
          pointerEvents: 'none',
        }}
      >
        <ContactPage />
      </div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/viduvaru" element={<ViduvaruTransportPage />} />
        <Route path="/hotelcloud" element={<LushHotelCloudPage />} />
        <Route path="/our-work" element={<OurWorkPage />} />
        <Route path="/real-estate-control" element={<PropertyManagementSystemPage />} />
        <Route path="/contact" element={null} />
        <Route path="/travel-crm" element={<TravelCrmPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <FloatingActions />
      <Footer />
    </div>
  )
}

export default App
