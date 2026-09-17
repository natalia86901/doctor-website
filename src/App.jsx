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

const dentalImplantsPath = '/services/implants'

function App() {
  return (
    <>
      <Navbar />
      <ScrollManager />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path={dentalImplantsPath} element={<DentalImplantsPage />} />
        <Route path="/services/dentures" element={<Dentures />} />
        <Route path="/services/complex-cases" element={<ComplexCases />} />
        <Route path="/dentures" element={<Navigate to="/services/dentures" replace />} />
        <Route
          path="/why-dr-tarkesh/meet-dr-tarkesh"
          element={<MeetDrTarkesh />}
        />
        {internalRoutes.filter(({ path }) => path !== dentalImplantsPath && path !== '/services/dentures' && path !== '/services/complex-cases').map(({ label, path }) => (
          <Route key={path} path={path} element={<PlaceholderPage title={label} />} />
        ))}
        <Route path="*" element={<PlaceholderPage title="Page Not Found" />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
