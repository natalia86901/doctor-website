import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import ScrollManager from './components/ScrollManager'
import { internalRoutes } from './components/Navbar/navConfig'
import Home from './pages/Home/Home'
import DentalImplantsPage from './pages/DentalImplants/DentalImplantsPage'
import Dentures from './pages/Dentures/Dentures'
import ComplexCases from './pages/ComplexCases/ComplexCases'
import MeetDrTarkesh from './pages/MeetDrTarkesh/MeetDrTarkesh'
import PlaceholderPage from './pages/PlaceholderPage/PlaceholderPage'
import IV from './pages/IV/IV'
import PricingFinancing from './pages/PricingFinancing/PricingFinancing'
import SmileGallery from './pages/SmileGallery/SmileGallery'
import RequestAppointment from './pages/RequestAppointment/RequestAppointment'
import LocationDirections from './pages/LocationDirections/LocationDirections'

const dentalImplantsPath = '/services/implants'

function App() {
  return (
    <>
      <Navbar />
      <ScrollManager />
      <Routes>
        <Route path="/contact/schedule-consultation" element={<RequestAppointment />} />
        <Route path="/contact/location-directions" element={<LocationDirections />} />
        <Route path="/" element={<Home />} />
        <Route path={dentalImplantsPath} element={<DentalImplantsPage />} />
        <Route path="/services/dentures" element={<Dentures />} />
        <Route path="/services/complex-cases" element={<ComplexCases />} />
        <Route path="/services/iv-sedation" element={<IV />} />
        <Route path="/patient-resources/pricing-financing" element={<PricingFinancing />} />
        <Route path="/smile-gallery" element={<SmileGallery />} />
        <Route path="/smile-gallery/patient-results" element={<SmileGallery />} />
        <Route path="/dentures" element={<Navigate to="/services/dentures" replace />} />
        <Route
          path="/why-dr-tarkesh/meet-dr-tarkesh"
          element={<MeetDrTarkesh />}
        />
        {internalRoutes.filter(({ path }) => path !== '/contact/location-directions' && !path.startsWith('/smile-gallery') && path !== dentalImplantsPath && path !== '/services/dentures' && path !== '/services/complex-cases' && path !== '/services/iv-sedation' && path !== '/patient-resources/pricing-financing').map(({ label, path }) => (
          <Route key={path} path={path} element={<PlaceholderPage title={label} />} />
        ))}
        <Route path="*" element={<PlaceholderPage title="Page Not Found" />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
