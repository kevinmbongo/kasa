import AboutPicture from '../../assets/images/kalen_emsley_Bkci_8qcdvQ_unsplash2.png'
import Dropdown from '../../components/Dropdown'

function About() {
  return (
    <div className="centered_flex about_container">
      <section>
        <img className="home_banner_img" src={AboutPicture} alt="home" />
      </section>
      <section className="about_dropdown_section">
        <Dropdown name="Fiabilité" text="coucou" />
        <Dropdown name="Équipements" text="coucou" />
        <Dropdown name="Service" text="coucou" />
        <Dropdown name="Sécurité" text="coucou" />
      </section>
    </div>
  )
}
export default About
