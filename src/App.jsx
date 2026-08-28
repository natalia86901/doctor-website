import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import { internalRoutes } from './components/Navbar/navConfig'
import Home from './pages/Home/Home'
import MeetDrTarkesh from './pages/MeetDrTarkesh/MeetDrTarkesh'
import PlaceholderPage from './pages/PlaceholderPage/PlaceholderPage'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/why-dr-tarkesh/meet-dr-tarkesh"
          element={<MeetDrTarkesh />}
        />
        {internalRoutes.map(({ label, path }) => (
          <Route key={path} path={path} element={<PlaceholderPage title={label} />} />
        ))}
        <Route path="*" element={<PlaceholderPage title="Page Not Found" />} />
      </Routes>
    </>
  )
}

export default App
