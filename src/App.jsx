import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import { internalRoutes } from './components/Navbar/navConfig'
import Home from './pages/Home/Home'
import PlaceholderPage from './pages/PlaceholderPage/PlaceholderPage'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {internalRoutes.map(({ label, path }) => (
          <Route key={path} path={path} element={<PlaceholderPage title={label} />} />
        ))}
        <Route path="*" element={<PlaceholderPage title="Page Not Found" />} />
      </Routes>
    </>
  )
}

export default App
