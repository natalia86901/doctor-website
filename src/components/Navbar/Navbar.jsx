import { useLocation } from 'react-router-dom'
import NavbarDesktop from './NavbarDesktop'
import NavbarMobile from './NavbarMobile'
import './Navbar.css'

function Navbar() {
  const location = useLocation()
  return (
    <>
      <NavbarDesktop />
      <NavbarMobile key={location.key} />
    </>
  )
}

export default Navbar
