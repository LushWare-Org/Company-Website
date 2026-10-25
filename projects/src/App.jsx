import { Routes, Route } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Packages from './pages/Packages.jsx'
import NotFound from './pages/NotFound.jsx'
import Seo from './seo/Seo.jsx'

export default function App() {
  return (
    <div className="app-shell">
      <Seo />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/specializations/:tabSlug" element={<Home />} />
        <Route path="/specializations/:tabSlug/:subSlug" element={<Home />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  )
}
