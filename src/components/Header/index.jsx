import { Link } from 'react-router-dom'
import logo from '../../assets/images/LOGO.png'
import logoSmall from '../../assets/images/LOGO_mobile.svg'

function Header() {
  return (
    <header className=" centered_flex">
      <div className="header_container container">
        <picture>
          <source srcSet={logoSmall} media="(max-width: 768px)" />
          <img src={logo} alt="logo" />
        </picture>
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
