import AboutPicture from '../../assets/images/kalen_emsley_Bkci_8qcdvQ_unsplash2.png'
import Dropdown from '../../components/Dropdown'

const dropdownNames = ['Fiabilité', 'Respect', 'Service', 'Sécurité']

function About() {
  return (
    <div className="centered_flex about_container">
      <section>
        <img className="home_banner_img" src={AboutPicture} alt="home" />
      </section>

      <section className="about_dropdown_section">
        {dropdownNames.map((dropdownName, index) => (
          <Dropdown
            key={index}
            name={dropdownName}
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate dolorum quia nisi omnis aliquam exercitationem iure blanditiis illum, sunt beatae repellat recusandae ad tenetur quos. Odio omnis dolores dolorum aspernatur."
          />
        ))}
      </section>
    </div>
  )
}
export default About
