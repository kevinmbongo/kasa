import { Link } from 'react-router-dom'
import logo from '../../assets/images/LOGO.png'

function Header() {
  return (
    <div className="header">
      <img src={logo} alt="log" />
      <nav className="header_nav">
        <Link className="header_nav_link" to="">
          Acceuil
        </Link>
        <Link className="header_nav_link" to="">
          A Propos
        </Link>
      </nav>
    </div>
  )
}

export default Header
