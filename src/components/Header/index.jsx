import { Link } from 'react-router-dom'
import logo from '../../assets/images/LOGO.png'

function Header() {
  return (
    <header className=" centered_flex">
      <div className="header_container container">
        <img src={logo} alt="log" />
        <nav className="header_nav">
          <Link className="header_nav_link" to="">
            Acceuil
          </Link>
          <Link className="header_nav_link" to="/About">
            A Propos
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
