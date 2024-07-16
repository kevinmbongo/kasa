import logoFooter from '../../assets/images/LOGO_footer.png'

function Footer() {
  return (
    <div className="footer_container">
      <img className="footer_logo" src={logoFooter} alt="logo footer" />
      <p className="footer_copyright"> © 2020 Kasa. All rights reserved</p>
    </div>
  )
}

export default Footer
